"use client";

import { useState } from "react";

import Link from "next/link";

import { AlertCircle, CheckCircle2, Home, RefreshCw } from "lucide-react";

import { contactConfig } from "@/data/pages/contact.config";

export function ContactFormSection() {
  const { form } = contactConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      const data = Object.fromEntries(formData.entries());
      const payload = {
        ...data,
        name: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
      };

      const endpoint =
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || form.scriptUrl;

      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
      formElement.reset();
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full pb-20 md:pb-32">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-center px-5 md:px-10 lg:px-16">
        <div className="w-full max-w-[800px]">
          {isSuccess ? (
            <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Message Sent!
              </h3>
              <p className="mb-8 max-w-md text-base text-white/70">
                {form.successMessage}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  <RefreshCw className="h-4 w-4" />
                  Send Another Message
                </button>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex w-full flex-col gap-3">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-white/80"
                  >
                    {form.firstNameLabel}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white transition-colors focus:border-white focus:outline-none"
                  />
                </div>
                <div className="flex w-full flex-col gap-3">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-white/80"
                  >
                    {form.lastNameLabel}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white transition-colors focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white/80"
                >
                  {form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white transition-colors focus:border-white focus:outline-none"
                />
              </div>

              <div className="flex w-full flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white/80"
                >
                  {form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={form.messagePlaceholder}
                  rows={4}
                  className="w-full resize-y rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white transition-colors placeholder:text-white/30 focus:border-white focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="h-5 w-5 appearance-none rounded border border-white/20 bg-transparent checked:border-white checked:bg-white"
                />
                <label htmlFor="consent" className="text-sm text-white/60">
                  {form.termsText.split("*")[0]}*
                </label>
              </div>

              {isError && (
                <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-medium">{form.errorMessage}</p>
                    <p className="text-xs text-red-400/80">
                      Please check your connection and Google Script deployment.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-lg bg-white px-8 py-5 text-base font-medium text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    form.submitButton
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
