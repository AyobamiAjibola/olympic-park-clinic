import { cn } from "@/lib/utils";
import { MessageCircleMore, RotateCcw, Send, X } from "lucide-react";
import Image from "next/image";
import { SetStateAction, SyntheticEvent, useEffect, useRef, useState } from "react";
import logo from "@/public/logo.png"
import { CHAT_STORAGE_KEY, ChatButton, ChatMessage, ChatState, clinicAssistantFlow, CompanyName, CompanyWebsite, FlowKey } from "@/constants/chat.type";

type IProps = {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
    onResetChat?: () => void;
}

export default function ChatPanel({setIsOpen, isOpen, onResetChat}: IProps) {
    const [chatState, setChatState] = useState<ChatState>(() => ({
        id: crypto.randomUUID(),
        messages: [],
        startedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        currentFlow: "start",
    }));
    const [hasLoadedChat, setHasLoadedChat] = useState<boolean>(false);
    const messages = chatState.messages;
    const [inputValue, setInputValue] = useState("");
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [errMsg, setErrorMsg] = useState<string>('');
    console.log(errMsg)
    const isInitializingRef = useRef(false);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);

        const el = textareaRef.current;
        if (!el) return;

        el.style.height = "0px";
        el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
    };

    const scrollToBottom = () => {
        const container = messagesContainerRef.current;

        if (!container) return;

        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
        });
    };

    const appendBotResponseWithLoading = (
        responseMessages: ChatMessage[],
        delay = 600
    ) => {
        const loadingId = crypto.randomUUID();

        const loadingMessage: ChatMessage = {
            id: loadingId,
            from: "bot",
            type: "text",
            message: "",
            isLoading: true,
        };

        setChatState((prev) => ({
            ...prev,
            messages: [...prev.messages, loadingMessage],
            updatedAt: new Date().toISOString()
        }));

        setTimeout(() => {
            setChatState((prev) => {
            const updatedState = {
                ...prev,
                messages: [
                ...prev.messages.filter((msg) => msg.id !== loadingId),
                ...responseMessages,
                ],
                updatedAt: new Date().toISOString(),
            };

            localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(updatedState));
            isInitializingRef.current = false;

            return updatedState;
            });
        }, delay);
    };

    const handleSendMessage = () => {
        const trimmedMessage = inputValue.trim();

        if (!trimmedMessage) return;

        const matchedFlow = findMatchingFlow(trimmedMessage);
        const nextFlow = clinicAssistantFlow[matchedFlow];

        appendBotResponseWithLoading(
            nextFlow.messages.map((message) => ({
                id: crypto.randomUUID(),
                from: "bot" as const,
                ...message,
            })) as ChatMessage[],
            600
        );

        setChatState((prev) => {
            if (!prev) return prev;

            return {
                ...prev,
                currentFlow: matchedFlow,
                updatedAt: new Date().toISOString(),
            };
        });

        setInputValue("");
    };

    const findMatchingFlow = (message: string): FlowKey => {
        const text = message.toLowerCase();

        if (
            text.includes("walk") ||
            text.includes("walk-in") ||
            text.includes("availability") ||
            text.includes("wait time")
        ) {
            return "walkInAvailability";
        }

        if (
            text.includes("book") ||
            text.includes("appointment") ||
            text.includes("schedule")
        ) {
            return "bookAppointment";
        }

        if (
            text.includes("test") ||
            text.includes("result") ||
            text.includes("lab")
        ) {
            return "testResults";
        }

        if (
            text.includes("family doctor") ||
            text.includes("register") ||
            text.includes("registration") ||
            text.includes("new patient")
        ) {
            return "familyDoctorRegistration";
        }

        return "otherInquiry";
    };

    const appendMessages = (newMessages: ChatMessage[]) => {
        setChatState((prev) => {
            if (!prev) return prev;

            return {
                ...prev,
                messages: [...prev.messages, ...newMessages],
                updatedAt: new Date().toISOString(),
            };
        });
    };

    const handleChoiceClick = (button: ChatButton) => {
        appendMessages([
            {
                from: "user",
                type: "text",
                message: button.name,
            },
        ]);

        if (button.action) {
            window.location.assign(button.action);
            return;
        }

        if (button.next) {
            const nextFlow = clinicAssistantFlow[button.next];

            appendBotResponseWithLoading(
                nextFlow.messages.map((message) => ({
                    ...message,
                    id: crypto.randomUUID(),
                    from: "bot" as const,
                })) as ChatMessage[],
                600
            );

            setChatState((prev) => {
                if (!prev) return prev;

                return {
                    ...prev,
                    currentFlow: button.next,
                    updatedAt: new Date().toISOString(),
                };
            });
        }
    };

    const resetConversation = () => {
        localStorage.removeItem(CHAT_STORAGE_KEY);

        onResetChat?.();

        const initialMessages = clinicAssistantFlow.start.messages.map((message) => ({
            from: "bot",
            ...message,
        })) as ChatMessage[];

        setChatState({
            id: crypto.randomUUID(),
            messages: initialMessages,
            startedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            currentFlow: "start",
        });
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        const form = e.currentTarget;
        const formData = new FormData(form);
    
        formData.append("access_key", "0712f490-bae9-4b1f-8a57-eadf90218db8");
        formData.append("subject", "New Contact Message");
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
    
            const result = await response.json();
    
            if (result.success) {
                appendMessages([
                    {
                        from: "bot",
                        type: "text",
                        message:
                            "Thank you. Your request has been received. Our clinic team will follow up if needed.",
                        },
                ]);
                form.reset();
            } else {
                setErrorMsg("Something went wrong. Please try again.");
            }
        } catch (error: unknown) {
            setErrorMsg("Something went wrong. Please try again.");
          console.log(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isInitializingRef.current) return;

        const saved = localStorage.getItem(CHAT_STORAGE_KEY);

        if (saved) {
            const parsed = JSON.parse(saved) as ChatState;

            if (parsed.messages?.length) {
                setChatState(parsed);
                setHasLoadedChat(true);
                return;
            }
        }

        isInitializingRef.current = true;
        setHasLoadedChat(true);

        const initialMessages = clinicAssistantFlow.start.messages.map((message) => ({
            ...message,
            id: crypto.randomUUID(),
            from: "bot" as const,
        })) as ChatMessage[];

         appendBotResponseWithLoading(initialMessages, 700);
    }, []);

    useEffect(() => {
        if (!hasLoadedChat) return;
        if (isInitializingRef.current) return;

        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chatState));
    }, [chatState, hasLoadedChat]);

    useEffect(() => {
        if (!chatState) return;

        localStorage.setItem(
            CHAT_STORAGE_KEY,
            JSON.stringify(chatState)
        );
    }, [chatState]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            scrollToBottom();
        }, 100);

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div
            className={cn(
                "fixed bottom-6 right-6 z-999 origin-bottom-right transition-all duration-300",
                isOpen
                    ? "visible opacity-100 scale-100"
                    : "invisible opacity-0 scale-95 pointer-events-none"
            )}
        >
            <div className="flex h-130 w-108 flex-col overflow-hidden rounded-3xl border border-main/20 bg-[#eff6ff]/80 shadow-2xl backdrop-blur-md">
                {/* Fixed Header */}
                <div className="shrink-0 bg-main px-4 py-3">
                    <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                                    <MessageCircleMore size={20} />
                                </div>

                            <div>
                                <p className="font-semibold leading-tight text-white">
                                    { CompanyName }
                                </p>
                                <div className="mt-1 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                <p className="text-xs text-white/80">
                                    Virtual assistant online
                                </p>
                                </div>
                            </div>
                            </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-2 text-white transition hover:bg-white/20"
                            aria-label="Close chat"
                        >
                        <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div ref={messagesContainerRef}
                    className="flex-1 overflow-y-auto px-5 py-6"
                >
                    <div className="mb-6 flex flex-col items-center text-center">
                        <Image
                            src={logo}
                            alt={`${CompanyName} logo`}
                            className="h-20 w-26 object-contain"
                        />

                        <h3 className="mt-3 text-lg font-black text-main">
                            { CompanyName }
                        </h3>

                        <p className="mt-2 max-w-xs text-sm text-gray-600">
                            Hi, I can help you with clinic hours, walk-in information,
                            booking details, and general service questions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div
                            className={cn(
                                "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                "rounded-tl-sm bg-white text-gray-700"
                            )}
                        >
                            Hi there 👋! How can I help you today?
                        </div>
                        {messages.map((message, index) => {
                            if (message.type === "text") {
                                return (
                                    <div
                                    key={message.id ?? index}
                                    className={cn(
                                        "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                        message.from === "user"
                                        ? "ml-auto rounded-tr-sm bg-main text-white"
                                        : "rounded-tl-sm bg-white text-gray-700"
                                    )}
                                    >
                                    {message.isLoading ? (
                                        <div className="flex items-center gap-1">
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:120ms]" />
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:240ms]" />
                                        </div>
                                    ) : (
                                        message.message
                                    )}
                                    </div>
                                );
                            }

                            if (message.type === "choice") {
                                return (
                                    <div key={index} className="space-y-2">
                                        {message.buttons.map((button) => (
                                            <button
                                                key={button.name}
                                                onClick={() => handleChoiceClick(button)}
                                                className="w-full rounded-2xl border border-main/20 bg-white px-4 py-3 text-left text-sm font-medium text-main shadow-sm transition hover:bg-main hover:text-white"
                                            >
                                                {button.name}
                                            </button>
                                        ))}
                                    </div>
                                );
                            }

                            if (message.type === "form") {
                                return (
                                    <form
                                        key={index}
                                        className="space-y-3 rounded-2xl bg-white p-4 shadow-sm"
                                        onSubmit={handleSubmit}
                                    >
                                        {message.fields.map((field) => (
                                            <div key={field.name}>
                                                <label className="mb-1 block text-xs font-medium text-gray-600">
                                                {field.label}
                                                </label>

                                                {field.type === "textarea" ? (
                                                <textarea
                                                    name={field.name}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    className="min-h-24 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-main focus:ring-2 focus:ring-main/20"
                                                />
                                                ) : (
                                                <input
                                                    name={field.name}
                                                    type={field.type}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    className="h-11 w-full rounded-xl border border-gray-200 px-3 text-sm outline-none focus:border-main focus:ring-2 focus:ring-main/20"
                                                />
                                                )}
                                            </div>
                                        ))}

                                        <button
                                            type="submit"
                                            className="w-full rounded-xl bg-main px-4 py-3 text-sm font-semibold text-white transition hover:bg-main/90"
                                        >
                                            {loading
                                                ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                                : (
                                                    <>
                                                        <Send className="h-5 w-5" />
                                                        {message.submitText}
                                                    </>
                                                )
                                            }
                                        </button>
                                    </form>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>

                {/* Fixed Input */}
                <div className="shrink-0 border-t border-main/10 bg-white/90 p-4 backdrop-blur-md">
                    <div className="rounded-2xl bg-main p-3 shadow-xl flex justify-center items-center">
                        <textarea
                            ref={textareaRef}
                            value={inputValue}
                            onChange={handleInput}
                            onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                            rows={1}
                            placeholder="Message"
                            className="max-h-32 min-h-7 w-full resize-none overflow-y-auto bg-transparent text-[15px] text-white placeholder:text-white/60 outline-none"
                        />

                        <div className="mt-3 flex items-center justify-end gap-2">
                            <button
                                type="button"
                                onClick={resetConversation}
                                className="flex h-11 w-11 items-center justify-center rounded-full text-emerald-300 transition hover:bg-white/10 hover:text-white"
                                aria-label="Reset conversation"
                            >
                                <RotateCcw size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="flex h-11 w-11 items-center justify-center rounded-full text-white transition cursor-pointer border-white/15 border hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
                                aria-label="Send message"
                            >
                                <Send size={18} color="white"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <span className="text-sm text-neutral-400 font-extralight">{ CompanyWebsite }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
