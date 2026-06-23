'use client'

import Image from "next/image";
import { MessageCircleMore, X } from "lucide-react";
import { useState } from "react";
import chatWithUs from "@/public/chat-with-us.png";
import ChatPanel from "./ChatPanel";

export default function ChatWidget() {
  const [showWelcomeMsg, setShowWelcomeMsg] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
        {isOpen && <ChatPanel setIsOpen={setIsOpen} isOpen={isOpen} />}
   
        <div className="fixed bottom-6 right-6 z-50">
        {showWelcomeMsg && (
            <button
                onClick={() => setShowWelcomeMsg(false)}
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
                <p className="text-sm font-semibold text-white">
                Hi
                </p>

                <p className="text-sm font-semibold text-white">
                how can I help you today?
                </p>
            </div>
            </div>

            <div onClick={() => setIsOpen(true)}
                className="relative flex h-12 w-12 shrink-0 items-center justify-center text-white"
            >
                <MessageCircleMore size={36} />
            </div>
        </div>

        {showWelcomeMsg && <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            2
        </span>}
        </div>
    </>
  );
}