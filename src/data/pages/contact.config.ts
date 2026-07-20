import { type ContactConfig } from "../entities/types";

export const contactConfig: ContactConfig = {
  hero: {
    tag: "Contact",
    headline: "What's up?",
  },
  form: {
    firstNameLabel: "First name*",
    lastNameLabel: "Last name*",
    emailLabel: "Email*",
    messageLabel: "Message",
    messagePlaceholder: "Start typing here ...",
    termsText: "I agree to the terms & privacy policy.*",
    submitButton: "Submit",
    successMessage: "Thank you! Your submission has been received!",
    errorMessage: "Oops! Something went wrong while submitting the form.",
  },
};
