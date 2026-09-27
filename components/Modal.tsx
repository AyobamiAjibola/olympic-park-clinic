"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  open,
  onOpenChange,
  title,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50
            w-[calc(100%-2rem)] max-w-lg
            -translate-x-1/2 -translate-y-1/2
            rounded-2xl bg-white p-6
            shadow-xl
            focus:outline-none
          "
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              {title}
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            {title}
          </Dialog.Description>

          <div className="mt-5">
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}