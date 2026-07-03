"use client";

import Image from "next/image";
import { MessageCircleMore, X } from "lucide-react";
import { useEffect, useState } from "react";
import chatWithUs from "@/public/chat-with-us.png";
import ChatPanel from "./ChatPanel";

const WELCOME_STORAGE_KEY = "primara-chat-welcome-hidden";

export default function ChatWidget() {
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isHidden = localStorage.getItem(WELCOME_STORAGE_KEY);

    setShowWelcomeMsg(isHidden !== "true");
  }, []);

  const hideWelcomeMessage = () => {
    localStorage.setItem(WELCOME_STORAGE_KEY, "true");
    setShowWelcomeMsg(false);
  };

  const resetWelcomeMessage = () => {
    localStorage.removeItem(WELCOME_STORAGE_KEY);
    setShowWelcomeMsg(true);
  };

  return (
    <>
        <ChatPanel
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            onResetChat={resetWelcomeMessage}
        />

        <div className="fixed bottom-6 right-6 z-50">
            {showWelcomeMsg && (
                <button
                    onClick={hideWelcomeMessage}
                    className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"
                >
                    <X size={14} />
                </button>
            )}

            <div
                className={`flex h-12 cursor-pointer items-center justify-end overflow-hidden rounded-full bg-main shadow-lg transition-all duration-300 ${
                    showWelcomeMsg ? "w-75" : "w-12"
                }`}
            >
                <div
                    className={`mx-3 flex items-center gap-3 whitespace-nowrap transition-opacity duration-300 ${
                    showWelcomeMsg ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={chatWithUs}
                        alt="Live Chat"
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-sm font-semibold text-white">Hi</p>
                        <p className="text-sm font-semibold text-white">
                            how can I help you today?
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => {
                    setIsOpen(true);
                    hideWelcomeMessage();
                    }}
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center text-white"
                >
                    <MessageCircleMore size={36} />
                </button>
            </div>

            {showWelcomeMsg && (
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    2
                </span>
            )}
        </div>
    </>
  );
}