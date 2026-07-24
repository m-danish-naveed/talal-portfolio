import { type ContactConfig } from "../entities/types";

export const contactConfig: ContactConfig = {
  hero: {
    tag: "Contact",
    headline: "What's up?",
  },
  form: {
    scriptUrl:
      "https://script.google.com/macros/s/AKfycbxAHIHvl85wrBDSJVE_st5fGCBb0RwXSGTWYS1WI_5njY21zxBZW6bmCn32HhkbXF9q/exec",
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
