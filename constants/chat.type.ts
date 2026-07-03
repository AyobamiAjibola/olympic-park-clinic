export const CHAT_STORAGE_KEY = "primara-clinic-chat";

export interface ChatButton {
  name: string;
  next?: string;
  action?: string;
}

export const CompanyName = "Primara Olympic Park Clinic";
export const CompanyWebsite = "primaraolympicparkclinic.ca"

export const clinicAssistantFlow = {
  start: {
    messages: [
      {
        type: "choice",
        buttons: [
          {
            name: "Walk in Availability",
            next: "walkInAvailability",
          },
          {
            name: "Book an Appointment",
            next: "bookAppointment",
          },
          {
            name: "Test Results Follow up",
            next: "testResults",
          },
          {
            name: "Register with a Family Doctor",
            next: "familyDoctorRegistration",
          },
          {
            name: "Other Inquiry",
            next: "otherInquiry",
          },
        ],
      },
    ],
  },

  walkInAvailability: {
    messages: [
      {
        type: "text",
        message:
          "Walk-ins are welcome based on daily availability.\n\nPlease call the clinic before coming in to confirm the current wait time.",
      },
      {
        type: "choice",
        buttons: [
          {
            name: "Call Clinic",
            action: "tel:+14030000000",
          },
          {
            name: "Back to Menu",
            next: "start",
          },
        ],
      },
    ],
  },

  bookAppointment: {
    messages: [
      {
        type: "text",
        message: "Sure, please provide your details below.",
      },
      {
        type: "form",
        formId: "appointmentForm",
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            name: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter your phone number",
            required: true,
          },
          {
            name: "reason",
            label: "Reason for Appointment",
            type: "textarea",
            placeholder: "Briefly describe your reason",
            required: true,
          },
        ],
        submitText: "Submit Request",
      },
    ],
  },

  testResults: {
    messages: [
      {
        type: "text",
        message:
          "For test results follow up, please contact the clinic directly.\n\nFor privacy reasons, test results cannot be shared through this chat.",
      },
      {
        type: "choice",
        buttons: [
          {
            name: "Call Clinic",
            action: "tel:+14030000000",
          },
          {
            name: "Back to Menu",
            next: "start",
          },
        ],
      },
    ],
  },

  familyDoctorRegistration: {
    messages: [
      {
        type: "text",
        message:
          "You can request registration with a family doctor by completing the form below.",
      },
      {
        type: "form",
        formId: "familyDoctorForm",
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            name: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter your phone number",
            required: true,
          },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email",
            required: false,
          },
        ],
        submitText: "Submit Registration Request",
      },
    ],
  },

  otherInquiry: {
    messages: [
      {
        type: "text",
        message:
          "Please type your inquiry below and our team will follow up if needed.",
      },
      {
        type: "form",
        formId: "otherInquiryForm",
        fields: [
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            name: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter your phone number",
            required: true,
          },
          {
            name: "message",
            label: "Message",
            type: "textarea",
            placeholder: "How can we help?",
            required: true,
          },
        ],
        submitText: "Send Inquiry",
      },
    ],
  },
};

export type FlowKey = keyof typeof clinicAssistantFlow;

export interface ChatState {
  id: string;
  messages: ChatMessage[];
  startedAt: string;
  updatedAt: string;
  currentFlow?: FlowKey;
}

export type ChatMessage =
  | {
        id?: string;
        from: "bot" | "user";
        type: "text";
        message: string;
        isLoading?: boolean;
    }
  | {
        id?: string;
        from: "bot";
        type: "choice";
        buttons: ChatButton[];
    }
  | {
        id?: string;
        from: "bot";
        type: "form";
        formId: string;
        fields: ChatField[];
        submitText: string;
    };

export interface ChatField {
    name: string;
    label: string;
    type: "text" | "tel" | "email" | "textarea";
    placeholder?: string;
    required?: boolean;
}