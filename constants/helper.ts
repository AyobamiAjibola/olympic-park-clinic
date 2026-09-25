export const OfficeNumber = "403-900-5551"
export const fax = "403-900-5552"
export const clinicEmail = "clinic@primaraolympicparkclinic.ca"
export const clinicAddress = `34 Canada Olympic Common SW, Calgary, AB T3H 6K4`
export const mapAddress = "Canada Olympic Common Southwest, Calgary, AB T3H 6K4, Canada";
export const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapAddress
)}&output=embed`;
export const directionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`;
export const monFriHrs = "Monday - Friday: 9:00 AM — 7:00 PM"
export const sundayHrs = "Sunday: Closed"
export const saturdayHrs = "Saturday: 10:00 AM — 4:00 PM"
export const BOOKING_LINK = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2X4MccODHuNnKEe-1sL5ieOGHm1leIg8gBX2lABz1ndnXCdkiqZmDdjlTLqzlUTIJggJuKQNlF";

export const doctors = [
  {
    id: 1,
    initials: "JE",
    name: "Dr. Jacob Eze",
    role: "Family Physician",
    status: "Accepting New Patients",
    qualification: "(MD, MRCGP, LMCC, CCFP)",
    image: "",
    gender: "male",
    shortDescription:
      "Dr. Eze is committed to providing compassionate, evidence-based care for individuals and families in Southwest Calgary.",
    description: "",
    href: "",
  },
  {
    id: 2,
    initials: "LA",
    name: "Dr. Lynder Alole",
    role: "Family Physician",
    status: "Accepting New Patients",
    qualification: "(MBBS, FWACP, CCFP)",
    image: "",
    gender: "female",
    shortDescription:
      "Dr. Alole believes in building lasting relationships with her patients and supporting them through every stage of life.",
    description: "",
    href: "",
  }
];

type StoreHours = {
  open: number;
  close: number;
  openText: string;
  closeText: string;
};

type Holiday = {
  name: string;
  closed: boolean;
  open?: number;
  close?: number;
  openText?: string;
  closeText?: string;
  message?: string;
};

const hours: Array<StoreHours | null> = [
  null, // Sunday - Closed
  { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" }, // Monday
  { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" }, // Tuesday
  { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" }, // Wednesday
  { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" }, // Thursday
  { open: 9, close: 19, openText: "9:00 AM", closeText: "7:00 PM" }, // Friday
  { open: 10, close: 16, openText: "10:00 AM", closeText: "4:00 PM" }, // Saturday
];

const holidays: Record<string, Holiday> = {
  "2026-02-16": {
    name: "Family Day",
    closed: true,
    message: "Happy Family Day",
  },

  "2026-04-03": {
    name: "Good Friday",
    closed: true,
    message: "Wishing you a peaceful Good Friday",
  },

  "2026-05-18": {
    name: "Victoria Day",
    closed: true,
    message: "Happy Victoria Day",
  },

  "2026-09-07": {
    name: "Labour Day",
    closed: true,
    message: "Happy Labour Day",
  },

  "2026-10-12": {
    name: "Thanksgiving Day",
    closed: true,
    message: "Happy Thanksgiving",
  },

  "2026-12-25": {
    name: "Christmas Day",
    closed: true,
    message: "Merry Christmas",
  },

  "2026-12-26": {
    name: "Boxing Day",
    closed: true,
    message: "Happy Boxing Day",
  },

  "2027-01-01": {
    name: "New Year's Day",
    closed: true,
    message: "Happy New Year",
  },

  // Example: special holiday hours
  "2026-12-24": {
    name: "Christmas Eve",
    closed: false,
    open: 9,
    close: 14,
    openText: "9:00 AM",
    closeText: "2:00 PM"
  },
};

const getDateKey = (date: Date) => {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

const getHoursForDate = (date: Date): StoreHours | null => {
  const dateKey = getDateKey(date);
  const holiday = holidays[dateKey];

  // Holiday and completely closed
  if (holiday?.closed) {
    return null;
  }

  // Holiday with special hours
  if (
    holiday &&
    holiday.open !== undefined &&
    holiday.close !== undefined &&
    holiday.openText &&
    holiday.closeText
  ) {
    return {
      open: holiday.open,
      close: holiday.close,
      openText: holiday.openText,
      closeText: holiday.closeText,
    };
  }

  // Otherwise use normal weekly hours
  return hours[date.getDay()];
};

const findNextOpening = (fromDate: Date) => {
  // Search up to 14 days ahead
  for (let i = 1; i <= 14; i++) {
    const date = new Date(fromDate);

    date.setDate(fromDate.getDate() + i);

    const dayHours = getHoursForDate(date);

    if (dayHours) {
      return {
        date,
        hours: dayHours,
        daysAway: i,
      };
    }
  }

  return null;
};

export const getStoreStatus_ = () => {
  const now = new Date();

  const dateKey = getDateKey(now);
  const holiday = holidays[dateKey];
  const today = getHoursForDate(now);

  // Store is closed all day today
  if (!today) {
    const nextOpening = findNextOpening(now);

    if (!nextOpening) {
      return {
        isOpen: false,
        message: "Closed",
      };
    }

    const { date, hours: nextHours, daysAway } = nextOpening;

    if (daysAway === 1) {
      return {
        isOpen: false,
        message: `Opens Tomorrow at ${nextHours.openText}`,
      };
    }

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    return {
      isOpen: false,
      message: holiday?.closed
        ? `Closed Today - ${holiday.name}. Opens ${dayName} at ${nextHours.openText}`
        : `Opens ${dayName} at ${nextHours.openText}`,
    };
  }

  // Store has opening hours today
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const openingMinutes = today.open * 60;
  const closingMinutes = today.close * 60;

  // Before opening
  if (currentMinutes < openingMinutes) {
    return {
      isOpen: false,
      message: `Opens Today at ${today.openText}`,
    };
  }

  // Currently open
  if (currentMinutes < closingMinutes) {
    return {
      isOpen: true,
      message: `Until ${today.closeText} Today`,
    };
  }

  // Closed for today - find next opening
  const nextOpening = findNextOpening(now);

  if (!nextOpening) {
    return {
      isOpen: false,
      message: "Closed",
    };
  }

  const { date, hours: nextHours, daysAway } = nextOpening;

  if (daysAway === 1) {
    return {
      isOpen: false,
      message: `Opens Tomorrow at ${nextHours.openText}`,
    };
  }

  const dayName = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return {
    isOpen: false,
    message: `Opens ${dayName} at ${nextHours.openText}`,
  };
};

export const getTodayHours = (): string => {
  const day = new Date().getDay();

  // Sunday = 0
  // Monday = 1
  // ...
  // Saturday = 6

  if (day >= 1 && day <= 5) {
    return "9:00 AM - 7:00 PM";
  }

  if (day === 6) {
    return "10:00 AM - 4:00 PM";
  }

  return "Closed";
};

