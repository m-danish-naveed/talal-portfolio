import { type ContactConfig } from "../entities/types";

export const contactConfig: ContactConfig = {
  hero: {
    tag: "Contact",
    headline: "What's up?",
  },
  form: {
    scriptUrl:
      "https://script.google.com/macros/s/AKfycbwNWFCAxVxFeLtJYTmssMCbVvCJIDQAiLUWNmhfz12mLl02c4WKhcvqlCd2TbCPFPfWcg/exec",
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
