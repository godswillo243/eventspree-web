import grandPavilionHall1 from "./images/grand-pavilion-hall-1.jpeg";
import grandPavilionHall2 from "./images/grand-pavilion-hall-2.jpeg";
import grandPavilionTerrace from "./images/grand-pavilion-terrace.jpeg";
import capitalConferenceHall from "./images/capital-conference-hall.jpg";
import djMasterAze from "./images/dj-mixmaster-aze.jpg";
import sweetCrumbsBakery from "./images/sweet-crumbs-bakery.jpg";
import lensAndLightPhotography1 from "./images/lens-and-light-photography-1.jpg";
import lensAndLightPhotography2 from "./images/lens-and-light-photography-2.jpg";
import oceanviewBeachResort1 from "./images/oceanview-beach-resort-1.jpg";
import oceanviewBeachResort2 from "./images/oceanview-beach-resort-2.jpg";
import royalDecorStudio1 from "./images/royal-decor-studio-1.jpg";
import royalDecorStudio2 from "./images/royal-decor-studio-2.jpg";
import zestCatering1 from "./images/zest-catering-1.jpg";
import zestCatering2 from "./images/zest-catering-2.jpg";
import zestCatering3 from "./images/zest-catering-3.jpg";

export type VendorProfile = {
  id: string;
  businessName: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  categories: string[];
  priceRangeMin: number;
  priceRangeMax: number;
  portfolioImages: string[];
  verificationStatus: "pending" | "approved" | "rejected";
  isFeatured: boolean;
  featuredUntil: string | null;
  ratingAvg: number;
};

export type Venue = {
  id: string;
  venueProviderProfileId: string;
  providerName: string; // denormalized for display convenience in mock
  name: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  city: string;
  capacityMin: number;
  capacityMax: number;
  amenities: string[];
  pricePerEventMin: number;
  pricePerEventMax: number;
  portfolioImages: string[];
  listingStatus: "pending" | "approved" | "rejected";
  isFeatured: boolean;
  featuredUntil: string | null;
  ratingAvg: number;
};

export type Review = {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type Event = {
  id: string;
  title: string;
  eventDate: string;
  city: string;
  guestCount: number;
  status: "active" | "completed" | "cancelled";
};

export type Inquiry = {
  id: string;
  eventId: string;
  eventTitle: string;
  targetName: string;
  targetType: "vendor" | "venue";
  category: string;
  description: string;
  budgetMin: number;
  budgetMax: number;
  status: "pending" | "quoted" | "accepted" | "declined" | "expired";
  createdAt: string;
};

export type Message = {
  id: string;
  inquiryId: string;
  senderName: string;
  senderIsMe: boolean;
  type: "text" | "quote" | "counter_quote" | "system";
  body?: string;
  quoteAmount?: number;
  quoteStatus?: "sent" | "accepted" | "rejected";
  createdAt: string;
};

export type Booking = {
  id: string;
  eventTitle: string;
  targetName: string;
  targetType: "vendor" | "venue";
  totalAmount: number;
  depositAmount: number;
  balanceAmount: number;
  depositPaidAt: string | null;
  balanceDueDate: string;
  balancePaidAt: string | null;
  status:
    | "pending_deposit"
    | "confirmed"
    | "completed"
    | "cancelled"
    | "disputed";
  refundEligible: boolean;
};

// ---------- CATEGORIES (shared constant, used in selects) ----------

export const VENDOR_CATEGORIES = [
  "Catering",
  "Photography",
  "Videography",
  "Decor",
  "Floral Design",
  "DJ",
  "MC",
  "Makeup Artist",
  "Event Planning",
  "Cake & Pastries",
];

// ---------- FEATURED VENDORS ----------

export const vendors: VendorProfile[] = [
  {
    id: "vendor-1",
    businessName: "Zest Catering Co.",
    description:
      "Premium Nigerian & continental cuisine for weddings, corporate events, and private parties. Known for our jollof rice and live cooking stations.",
    contactName: "Amaka Obi",
    contactEmail: "contact@zestcatering.ng",
    contactPhone: "+2348012345678",
    city: "Lagos",
    categories: ["Catering"],
    priceRangeMin: 250000,
    priceRangeMax: 2500000,
    portfolioImages: [zestCatering1, zestCatering2, zestCatering3],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(30),
    ratingAvg: 4.8,
  },
  {
    id: "vendor-2",
    businessName: "Lens & Light Photography",
    description:
      "Award-winning wedding and event photography/videography studio with a cinematic style. 8+ years shooting across Lagos and Abuja.",
    contactName: "Tunde Bakare",
    contactEmail: "hello@lensandlightphoto.ng",
    contactPhone: "+2348023456789",
    city: "Abuja",
    categories: ["Photography", "Videography"],
    priceRangeMin: 150000,
    priceRangeMax: 1800000,
    portfolioImages: [lensAndLightPhotography1, lensAndLightPhotography2],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(14),
    ratingAvg: 4.9,
  },
  {
    id: "vendor-3",
    businessName: "Royal Decor Studio",
    description:
      "Luxury event decor and floral design — specializing in weddings, owambe parties, and corporate launches with a bold, elegant aesthetic.",
    contactName: "Chiamaka Eze",
    contactEmail: "bookings@royaldecorstudio.ng",
    contactPhone: "+2348034567890",
    city: "Port Harcourt",
    categories: ["Decor", "Floral Design"],
    priceRangeMin: 300000,
    priceRangeMax: 3000000,
    portfolioImages: [royalDecorStudio1, royalDecorStudio2],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(7),
    ratingAvg: 4.7,
  },
  {
    id: "vendor-4",
    businessName: "DJ MixMaster Aze",
    description:
      "High-energy DJ and MC services for weddings, birthdays, and corporate events. Full sound system and lighting rig included.",
    contactName: "Azeez Lawal",
    contactEmail: "dj@mixmasteraze.ng",
    contactPhone: "+2348045678901",
    city: "Lagos",
    categories: ["DJ", "MC"],
    priceRangeMin: 100000,
    priceRangeMax: 800000,
    portfolioImages: [djMasterAze],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(21),
    ratingAvg: 4.6,
  },
  {
    id: "vendor-5",
    businessName: "Sweet Crumbs Bakery",
    description:
      "Custom wedding cakes and dessert tables. Specializing in multi-tier designs and Nigerian flavor fusions.",
    contactName: "Blessing Udo",
    contactEmail: "orders@sweetcrumbs.ng",
    contactPhone: "+2348078901234",
    city: "Lagos",
    categories: ["Cake & Pastries"],
    priceRangeMin: 80000,
    priceRangeMax: 600000,
    portfolioImages: [sweetCrumbsBakery],
    verificationStatus: "approved",
    isFeatured: false, // not featured — good for testing featured vs regular sort order
    featuredUntil: null,
    ratingAvg: 4.4,
  },
];

// ---------- FEATURED VENUES ----------

export const venues: Venue[] = [
  {
    id: "venue-1",
    venueProviderProfileId: "venue-provider-1",
    providerName: "Grand Pavilion Events Ltd.",
    name: "The Grand Pavilion Hall",
    description:
      "A 1,000-capacity indoor event hall with crystal chandeliers, built-in stage, and dedicated bridal suite. Ideal for weddings and large galas.",
    contactName: "Ifeoma Nwachukwu",
    contactEmail: "admin@thegrandpavilion.ng",
    contactPhone: "+2348056789012",
    address: "14 Admiralty Way, Lekki Phase 1",
    city: "Lagos",
    capacityMin: 200,
    capacityMax: 1000,
    amenities: [
      "Parking",
      "Sound System",
      "Air Conditioning",
      "Bridal Suite",
      "Catering Allowed",
    ],
    pricePerEventMin: 1200000,
    pricePerEventMax: 4500000,
    portfolioImages: [grandPavilionHall1, grandPavilionHall2],
    listingStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(30),
    ratingAvg: 4.9,
  },
  {
    id: "venue-2",
    venueProviderProfileId: "venue-provider-1",
    providerName: "Grand Pavilion Events Ltd.",
    name: "The Grand Pavilion Garden Terrace",
    description:
      "Outdoor garden terrace attached to the main pavilion — perfect for cocktail receptions and intimate ceremonies under string lighting.",
    contactName: "Ifeoma Nwachukwu",
    contactEmail: "admin@thegrandpavilion.ng",
    contactPhone: "+2348056789012",
    address: "14 Admiralty Way, Lekki Phase 1",
    city: "Lagos",
    capacityMin: 50,
    capacityMax: 300,
    amenities: ["Outdoor Lighting", "Generator Backup", "Catering Allowed"],
    pricePerEventMin: 600000,
    pricePerEventMax: 1800000,
    portfolioImages: [grandPavilionTerrace],
    listingStatus: "approved",
    isFeatured: false,
    featuredUntil: null,
    ratingAvg: 4.5,
  },
  {
    id: "venue-3",
    venueProviderProfileId: "venue-provider-2",
    providerName: "Oceanview Events Group",
    name: "Oceanview Beach Resort Hall",
    description:
      "Beachfront event venue with panoramic ocean views, perfect for destination weddings and sunset receptions.",
    contactName: "Segun Adeyemi",
    contactEmail: "reservations@oceanviewevents.ng",
    contactPhone: "+2348067890123",
    address: "Km 18, Lekki-Epe Expressway",
    city: "Lagos",
    capacityMin: 100,
    capacityMax: 600,
    amenities: ["Beachfront", "Parking", "Sound System", "Generator Backup"],
    pricePerEventMin: 900000,
    pricePerEventMax: 3200000,
    portfolioImages: [oceanviewBeachResort1, oceanviewBeachResort1],
    listingStatus: "approved",
    isFeatured: true,
    featuredUntil: addDays(14),
    ratingAvg: 4.8,
  },
  {
    id: "venue-4",
    venueProviderProfileId: "venue-provider-3",
    providerName: "Capital Events Nigeria",
    name: "Capital Conference & Events Centre",
    description:
      "Modern multi-purpose hall suited for corporate events, conferences, and product launches with full AV equipment.",
    contactName: "Ngozi Chukwu",
    contactEmail: "bookings@capitalevents.ng",
    contactPhone: "+2348089012345",
    address: "Plot 22, Central Business District",
    city: "Abuja",
    capacityMin: 50,
    capacityMax: 500,
    amenities: [
      "Projector",
      "Sound System",
      "Air Conditioning",
      "Parking",
      "Wi-Fi",
    ],
    pricePerEventMin: 500000,
    pricePerEventMax: 2000000,
    portfolioImages: [capitalConferenceHall],
    listingStatus: "approved",
    isFeatured: false,
    featuredUntil: null,
    ratingAvg: 4.3,
  },
];

// ---------- REVIEWS (attach to any provider for profile page mockups) ----------

export const reviews: Review[] = [
  {
    id: "rev-1",
    reviewerName: "Funmi A.",
    rating: 5,
    comment:
      "Zest Catering made our wedding unforgettable. The jollof station was a huge hit!",
    createdAt: daysAgo(10),
  },
  {
    id: "rev-2",
    reviewerName: "Chidi O.",
    rating: 4,
    comment: "Great food, slightly late setup but service recovered quickly.",
    createdAt: daysAgo(25),
  },
  {
    id: "rev-3",
    reviewerName: "Zainab M.",
    rating: 5,
    comment:
      "Lens & Light captured every moment beautifully. Highly recommend!",
    createdAt: daysAgo(5),
  },
];

// ---------- EVENTS (organizer dashboard mockups) ----------

export const events: Event[] = [
  {
    id: "event-1",
    title: "Amara's Wedding",
    eventDate: addDays(45),
    city: "Lagos",
    guestCount: 350,
    status: "active",
  },
  {
    id: "event-2",
    title: "TechCorp Annual Gala",
    eventDate: addDays(60),
    city: "Abuja",
    guestCount: 150,
    status: "active",
  },
  {
    id: "event-3",
    title: "Zainab's 30th Birthday",
    eventDate: daysAgo(20),
    city: "Lagos",
    guestCount: 80,
    status: "completed",
  },
];

// ---------- INQUIRIES (organizer + vendor inbox mockups) ----------

export const inquiries: Inquiry[] = [
  {
    id: "inq-1",
    eventId: "event-1",
    eventTitle: "Amara's Wedding",
    targetName: "Zest Catering Co.",
    targetType: "vendor",
    category: "Catering",
    description:
      "Need full catering for 350 guests, Nigerian + continental menu.",
    budgetMin: 1500000,
    budgetMax: 2200000,
    status: "quoted",
    createdAt: daysAgo(3),
  },
  {
    id: "inq-2",
    eventId: "event-1",
    eventTitle: "Amara's Wedding",
    targetName: "The Grand Pavilion Hall",
    targetType: "venue",
    category: "Venue",
    description:
      "Looking for an indoor hall for 350 guests, Lagos, with parking.",
    budgetMin: 2000000,
    budgetMax: 3500000,
    status: "pending",
    createdAt: daysAgo(2),
  },
  {
    id: "inq-3",
    eventId: "event-2",
    eventTitle: "TechCorp Annual Gala",
    targetName: "DJ MixMaster Aze",
    targetType: "vendor",
    category: "DJ",
    description: "Need a DJ + MC for a 150-person corporate gala.",
    budgetMin: 200000,
    budgetMax: 400000,
    status: "accepted",
    createdAt: daysAgo(10),
  },
];

// ---------- MESSAGES (conversation screen mockup, for inq-1) ----------

export const messages: Message[] = [
  {
    id: "msg-1",
    inquiryId: "inq-1",
    senderName: "Amara (Organizer)",
    senderIsMe: true,
    type: "text",
    body: "Hi! We love your portfolio. Can you cater our wedding for 350 guests?",
    createdAt: daysAgo(3),
  },
  {
    id: "msg-2",
    inquiryId: "inq-1",
    senderName: "Zest Catering Co.",
    senderIsMe: false,
    type: "text",
    body: "Thank you! Yes, we can. Let us know your budget range and menu preferences.",
    createdAt: daysAgo(3),
  },
  {
    id: "msg-3",
    inquiryId: "inq-1",
    senderName: "Amara (Organizer)",
    senderIsMe: true,
    type: "text",
    body: "Budget is around ₦1.5M–₦2.2M, mix of Nigerian and continental dishes.",
    createdAt: daysAgo(2),
  },
  {
    id: "msg-4",
    inquiryId: "inq-1",
    senderName: "Zest Catering Co.",
    senderIsMe: false,
    type: "quote",
    quoteAmount: 2000000,
    quoteStatus: "sent",
    createdAt: daysAgo(2),
  },
  {
    id: "msg-5",
    inquiryId: "inq-1",
    senderName: "Amara (Organizer)",
    senderIsMe: true,
    type: "text",
    body: "Can you do ₦1.8M if we reduce to 3 courses?",
    createdAt: daysAgo(1),
  },
  {
    id: "msg-6",
    inquiryId: "inq-1",
    senderName: "Zest Catering Co.",
    senderIsMe: false,
    type: "counter_quote",
    quoteAmount: 1900000,
    quoteStatus: "sent",
    createdAt: daysAgo(1),
  },
];

// ---------- BOOKINGS (booking detail + payment screen mockups) ----------

export const bookings: Booking[] = [
  {
    id: "booking-1",
    eventTitle: "TechCorp Annual Gala",
    targetName: "DJ MixMaster Aze",
    targetType: "vendor",
    totalAmount: 350000,
    depositAmount: 70000,
    balanceAmount: 280000,
    depositPaidAt: daysAgo(8),
    balanceDueDate: addDays(53),
    balancePaidAt: null,
    status: "confirmed",
    refundEligible: true,
  },
  {
    id: "booking-2",
    eventTitle: "Zainab's 30th Birthday",
    targetName: "Sweet Crumbs Bakery",
    targetType: "vendor",
    totalAmount: 180000,
    depositAmount: 36000,
    balanceAmount: 144000,
    depositPaidAt: daysAgo(30),
    balanceDueDate: daysAgo(21),
    balancePaidAt: daysAgo(22),
    status: "completed",
    refundEligible: false,
  },
];

// ---------- HELPERS ----------

function addDays(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString();
}

function daysAgo(n: number): string {
  return addDays(-n);
}

// ---------- CONVENIENCE GETTERS (mimic future API query shapes) ----------

export function getFeaturedVendors() {
  return vendors.filter((v) => v.isFeatured);
}

export function getFeaturedVenues() {
  return venues.filter((v) => v.isFeatured);
}

export function getVendorById(id: string) {
  return vendors.find((v) => v.id === id);
}

export function getVenueById(id: string) {
  return venues.find((v) => v.id === id);
}

export function getMessagesByInquiryId(inquiryId: string) {
  return messages.filter((m) => m.inquiryId === inquiryId);
}
