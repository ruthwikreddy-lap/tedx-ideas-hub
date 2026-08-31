/**
 * CENTRAL EVENT CONFIGURATION
 * ---------------------------------------------------------------
 * Everything the organizers need to update lives in this file.
 * Replace placeholder values (wrapped in [ ]) as details are confirmed.
 */

export const event = {
  name: "TEDx",
  school: "P. Obul Reddy Public School",
  /** Edit the year here — used by the countdown and all date labels. */
  year: 2026,
  /** Month is 1-indexed. Event day: 21 November. */
  month: 11,
  day: 21,
  dateLabel: "21 November",
  theme: "[EVENT THEME]",
  themeTagline: "One theme. Many perspectives.",
  themeDescription:
    "[The official explanation of the theme will be published here. This space is reserved for the curatorial note describing what the theme means, why it was chosen, and how the talks of the day will explore it from different angles.]",
  heroSupport: "A day of ideas, conversations and perspectives worth spreading.",
  /** TEDx license disclaimer — show only if the event holds a TEDx license. */
  hasTedxLicense: true,
  /** Flip to true later to reveal a REGISTER / BOOK YOUR SPOT button. */
  bookingEnabled: false,
  bookingLabel: "REGISTER / BOOK YOUR SPOT",
} as const;

export const eventDate = new Date(
  Date.UTC(event.year, event.month - 1, event.day, 3, 30, 0), // 09:00 IST
);

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Theme", id: "theme" },
  { label: "Speakers", id: "speakers" },
  { label: "Schedule", id: "schedule" },
  { label: "Experience", id: "experience" },
  { label: "Organizers", id: "organizers" },
  { label: "Partners", id: "partners" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export const aboutBlocks = [
  { no: "01", title: "IDEAS", text: "Thought-provoking perspectives and stories." },
  {
    no: "02",
    title: "PEOPLE",
    text: "Students, educators, creators and changemakers coming together.",
  },
  { no: "03", title: "CONVERSATIONS", text: "Ideas that continue beyond the stage." },
  {
    no: "04",
    title: "EXPERIENCE",
    text: "A memorable day built around curiosity and discovery.",
  },
];

export type Speaker = {
  id: string;
  slot: string;
  name: string;
  profession: string;
  short: string;
  talkTitle: string;
  bio: string;
  whyItMatters: string;
  category: string;
  socials: { label: string; url: string }[];
};

/** Add or remove entries freely — the grid adapts. */
export const speakers: Speaker[] = Array.from({ length: 8 }, (_, i) => {
  const slot = String(i + 1).padStart(2, "0");
  return {
    id: `speaker-${slot}`,
    slot: `SPEAKER ${slot}`,
    name: "Name Coming Soon",
    profession: "[Profession / Designation]",
    short: "[A short line about this speaker will appear here once announced.]",
    talkTitle: "[Talk Title To Be Announced]",
    bio: "[Speaker biography placeholder. Replace this text with the official biography once the speaker line-up is confirmed.]",
    whyItMatters:
      "[Why this idea matters — a short curatorial note explaining the relevance of this talk to the theme of the event.]",
    category: "[Talk Category]",
    socials: [
      { label: "Instagram", url: "#" },
      { label: "LinkedIn", url: "#" },
    ],
  };
});

/** All timings are placeholders until official timings are confirmed. */
export const schedule = [
  { time: "09:00 AM", title: "Doors Open", note: "Registration desk and welcome" },
  { time: "10:00 AM", title: "Opening Ceremony", note: "Curator's welcome" },
  { time: "10:15 AM", title: "Session I", note: "Talks" },
  { time: "11:00 AM", title: "Talk", note: "Main stage" },
  { time: "11:30 AM", title: "Session II", note: "Talks" },
  { time: "12:30 PM", title: "Break", note: "Refreshments and conversations" },
  { time: "01:30 PM", title: "Talks & Conversations", note: "Main stage" },
  { time: "03:00 PM", title: "Session III", note: "Talks" },
  { time: "04:30 PM", title: "Closing", note: "Reflections and thank you" },
];

export const experience = [
  {
    title: "Ideas",
    text: "Discover perspectives that challenge how you think.",
  },
  { title: "Conversations", text: "Meet people who see the world differently." },
  { title: "Creativity", text: "Experience student creativity and expression." },
  { title: "Community", text: "Connect with a community built around curiosity." },
  { title: "Inspiration", text: "Leave with an idea worth carrying forward." },
];

export const venue = {
  name: "P. Obul Reddy Public School",
  address: "[Venue address placeholder]",
  description:
    "[A short description of the venue and how to reach it will be added here.]",
  mapUrl: "",
};

export const organizerGroups = [
  {
    group: "TEDx Organizing Team",
    roles: ["Organizer", "Curator", "Event Director"],
  },
  { group: "Operations & Production", roles: ["Operations", "Production"] },
  { group: "Creative & Outreach", roles: ["Design", "Marketing", "Communications"] },
  { group: "Student Team", roles: ["Student Lead", "Student Team", "Student Team"] },
];

export const partnerTiers = [
  { tier: "Title Partner", partners: ["PARTNER 01"] },
  { tier: "Event Partners", partners: ["PARTNER 02", "PARTNER 03"] },
  { tier: "Community Partners", partners: ["PARTNER 04", "PARTNER 05"] },
  { tier: "Supporting Partners", partners: ["PARTNER 06", "PARTNER 07", "PARTNER 08"] },
];

export const faqs = [
  {
    q: "What is TEDx?",
    a: "TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx P. Obul Reddy Public School, where x = independently organized TED event.",
  },
  { q: "When is the event?", a: `${event.dateLabel}. Exact timings will be announced.` },
  {
    q: "Where is the event being held?",
    a: "At P. Obul Reddy Public School. The full venue details will be shared closer to the date.",
  },
  {
    q: "Who can attend?",
    a: "[Attendance details are being finalized and will be published here.]",
  },
  {
    q: "Who are the speakers?",
    a: "[The speaker line-up has not been announced yet. Speakers will be revealed on this website.]",
  },
  {
    q: "What is this year's theme?",
    a: "[The theme will be revealed here — see the Theme section for updates.]",
  },
  {
    q: "What should I expect at the event?",
    a: "A day of talks, conversations and student-led creative experiences built around the theme.",
  },
  {
    q: "Will there be a livestream?",
    a: "[Livestream details have not been confirmed yet.]",
  },
];

export const gallery = [
  { label: "School", caption: "[Image placeholder]" },
  { label: "Previous Events", caption: "[Image placeholder]" },
  { label: "Speakers", caption: "[Image placeholder]" },
  { label: "Students", caption: "[Image placeholder]" },
  { label: "Behind the Scenes", caption: "[Image placeholder]" },
  { label: "The Stage", caption: "[Image placeholder]" },
  { label: "Audience", caption: "[Image placeholder]" },
  { label: "Campus", caption: "[Image placeholder]" },
];

export const updates = [
  { tag: "Announcement", title: "Announcement", text: "Coming soon." },
  { tag: "Speakers", title: "Speaker Reveal", text: "Coming soon." },
  { tag: "Studio", title: "Behind the Scenes", text: "Coming soon." },
];

export const contact = {
  email: "[OFFICIAL EMAIL]",
  instagram: "[INSTAGRAM HANDLE]",
  socials: ["[SOCIAL LINK]", "[SOCIAL LINK]", "[SOCIAL LINK]"],
};
