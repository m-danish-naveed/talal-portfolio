"use client";

import { useState } from "react";

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

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="w-full pb-20 md:pb-32">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-center px-5 md:px-10 lg:px-16">
        <div className="w-full max-w-[800px]">
          {isSuccess ? (
            <div className="flex w-full items-center justify-center rounded-lg bg-white/5 p-8 text-center text-lg text-white">
              {form.successMessage}
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
                  required
                  className="h-5 w-5 appearance-none rounded border border-white/20 bg-transparent checked:border-white checked:bg-white"
                />
                <label htmlFor="consent" className="text-sm text-white/60">
                  {form.termsText.split("*")[0]}*
                </label>
              </div>

              {isError && (
                <div className="text-sm text-red-500">{form.errorMessage}</div>
              )}

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-4 rounded-lg bg-white px-8 py-5 text-base font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 md:w-auto"
                >
                  {isSubmitting ? "Sending..." : form.submitButton}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
