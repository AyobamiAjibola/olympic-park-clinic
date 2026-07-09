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
export const sundayHrs = "Sunday: 10:00 AM — 2:00 PM"
export const saturdayHrs = "Saturday: 10:00 AM — 4:00 PM"
export const BOOKING_LINK = "https://calendar.app.google/7gFJ3sWD1gccBtr38";

export const doctors = [
  {
    name: "Dr. Jacob Eze",
    role: "Family Doctor",
    status: "Accepting New Patients",
    qualification: "(MD, MRCGP, LMCC, CCFP)",
    image: "",
    gender: "male"
  },
  {
    name: "Dr. Moses Nwofor",
    role: "Family Doctor",
    status: "Accepting New Patients",
    qualification: "(MBBS, MRCGP, LMCC)",
    image: "",
    gender: "male"
  },
  {
    name: "Dr. Jane Doe",
    role: "Family Doctor",
    status: "Accepting New Patients",
    qualification: "(MBBS, MRCGP, LMCC)",
    image: "",
    gender: "female"
  }
];

