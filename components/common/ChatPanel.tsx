import { cn } from "@/lib/utils";
import { MessageCircleMore, X } from "lucide-react";
import { SetStateAction } from "react";

type IProps = {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}

export default function ChatPanel({setIsOpen, isOpen}: IProps) {
  return (
    <div
        className={cn(
            "fixed bottom-6 right-6 z-999 transition-all duration-700 ease-out",
            isOpen
               ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-40 opacity-0"
        )}
    >
        <div className="w-108 h-120 overflow-hidden rounded-3xl border border-main bg-[#eff6ff]/50 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between bg-main-light px-4 py-3">
                <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <MessageCircleMore size={20} />
                </div>

                <div>
                    <p className="font-semibold text-white">
                    Now Medical Clinic
                    </p>
                    <p className="text-sm text-white/80">
                    Your virtual assistant
                    </p>
                </div>
                </div>

                <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-white hover:bg-white/20"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="p-6">
                <input
                placeholder="Enter your phone number"
                className="mb-4 w-full rounded-xl border border-emerald-700 bg-emerald-950 px-4 py-3 text-white"
                />

                <textarea
                placeholder="Enter your inquiry"
                rows={4}
                className="mb-4 w-full rounded-xl border border-emerald-700 bg-emerald-950 px-4 py-3 text-white"
                />

                <button className="w-full rounded-xl border border-emerald-500 py-3 font-medium text-white hover:bg-emerald-500/10">
                Submit Inquiry
                </button>
            </div>
        </div>
    </div>
  )
}
