"use client";

import { useEffect, useRef } from "react";

import { X } from "lucide-react";

interface ShowreelDialogProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeUrl?: string;
}

export function ShowreelDialog({
  isOpen,
  onClose,
  youtubeUrl,
}: ShowreelDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!youtubeUrl) return null;

  // Convert watch URL to embed URL
  const embedUrl = youtubeUrl.replace("watch?v=", "embed/");

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="backdrop:bg-background/90 open:animate-in open:fade-in-0 m-auto w-full max-w-5xl bg-transparent p-4 sm:p-8"
    >
      <div className="bg-surface relative mx-auto flex aspect-video w-full flex-col overflow-hidden rounded-lg shadow-2xl">
        <button
          onClick={onClose}
          className="bg-background/50 text-foreground hover:bg-background/80 absolute top-4 right-4 z-10 rounded-full p-2 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>
        {isOpen && (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        )}
      </div>
    </dialog>
  );
}
