export const vendorUsersData = [
  { email: "contact@zestcatering.ng", business: "Zest Catering Co." },
  {
    email: "hello@lensandlightphoto.ng",
    business: "Lens & Light Photography",
  },
  { email: "bookings@royaldecorstudio.ng", business: "Royal Decor Studio" },
  { email: "dj@mixmasteraze.ng", business: "DJ MixMaster Aze" },
];

export const featuredVendorsData = [
  {
    id: "cb3693a3-745d-4439-b302-6e2e9ab398f6",
    businessName: "Zest Catering Co.",
    description:
      "Premium Nigerian & continental cuisine for weddings, corporate events, and private parties. Known for our jollof rice and live cooking stations.",
    contactName: "Amaka Obi",
    contactEmail: "contact@zestcatering.ng",
    contactPhone: "+2348012345678",
    city: "Lagos",
    categories: ["Catering"],
    priceRangeMin: "250000",
    priceRangeMax: "2500000",
    portfolioImages: [
      "https://images.example.com/zest/hall-setup.jpg",
      "https://images.example.com/zest/jollof-station.jpg",
      "https://images.example.com/zest/dessert-table.jpg",
    ],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.8",
  },
  {
    id: "81b74b88-b356-42d1-940e-5752c3a960c5",
    businessName: "Lens & Light Photography",
    description:
      "Award-winning wedding and event photography/videography studio with a cinematic style. 8+ years shooting across Lagos and Abuja.",
    contactName: "Tunde Bakare",
    contactEmail: "hello@lensandlightphoto.ng",
    contactPhone: "+2348023456789",
    city: "Abuja",
    categories: ["Photography", "Videography"],
    priceRangeMin: "150000",
    priceRangeMax: "1800000",
    portfolioImages: [
      "https://images.example.com/lensandlight/couple-shoot.jpg",
      "https://images.example.com/lensandlight/reception.jpg",
    ],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.9",
  },
  {
    id: "6b6d1592-e7b3-4284-b937-eee0c973d03b",
    businessName: "Royal Decor Studio",
    description:
      "Luxury event decor and floral design — specializing in weddings, owambe parties, and corporate launches with a bold, elegant aesthetic.",
    contactName: "Chiamaka Eze",
    contactEmail: "bookings@royaldecorstudio.ng",
    contactPhone: "+2348034567890",
    city: "Port Harcourt",
    categories: ["Decor", "Floral Design"],
    priceRangeMin: "300000",
    priceRangeMax: "3000000",
    portfolioImages: [
      "https://images.example.com/royaldecor/arch-setup.jpg",
      "https://images.example.com/royaldecor/table-centerpiece.jpg",
    ],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.7",
  },
  {
    id: "6b6d1592-e7b3-4284-b937-eee0c973d03b",
    businessName: "DJ MixMaster Aze",
    description:
      "High-energy DJ and MC services for weddings, birthdays, and corporate events. Full sound system and lighting rig included.",
    contactName: "Azeez Lawal",
    contactEmail: "dj@mixmasteraze.ng",
    contactPhone: "+2348045678901",
    city: "Lagos",
    categories: ["DJ", "MC"],
    priceRangeMin: "100000",
    priceRangeMax: "800000",
    portfolioImages: ["https://images.example.com/djaze/console-setup.jpg"],
    verificationStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.6",
  },
];

// ---------- FEATURED VENUES ----------

export const venueProviderUsersData = [
  { email: "admin@thegrandpavilion.ng" },
  { email: "reservations@oceanviewevents.ng" },
];

export const venueProvidersData = [
  {
    companyName: "Grand Pavilion Events Ltd.",
    contactName: "Ifeoma Nwachukwu",
    contactEmail: "admin@thegrandpavilion.ng",
    contactPhone: "+2348056789012",
    verificationStatus: "approved",
    id: "305fec18-dd5a-46b0-aaae-495ad99e99fe",
  },
  {
    companyName: "Oceanview Events Group",
    contactName: "Segun Adeyemi",
    contactEmail: "reservations@oceanviewevents.ng",
    contactPhone: "+2348067890123",
    verificationStatus: "approved",
    id: "8264a2b0-807b-48dc-afbc-32cee63d5a5f",
  },
];

export const featuredVenuesData = [
  {
    id: "fc4443bf-c843-4689-880f-c7c7af77905d",
    venueProviderProfileId: venueProvidersData[0].id,
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
    pricePerEventMin: "1200000",
    pricePerEventMax: "4500000",
    portfolioImages: [
      "https://images.example.com/grandpavilion/main-hall.jpg",
      "https://images.example.com/grandpavilion/stage-view.jpg",
    ],
    listingStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.9",
  },
  {
    id: "e85ad00b-9405-492e-bd4f-4895c5a9e774",
    venueProviderProfileId: venueProvidersData[0].id,
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
    pricePerEventMin: "600000",
    pricePerEventMax: "1800000",
    portfolioImages: [
      "https://images.example.com/grandpavilion/garden-terrace.jpg",
    ],
    listingStatus: "approved",
    isFeatured: false, // example of a non-featured sibling venue
    ratingAvg: "4.5",
  },
  {
    id: "c91bd6c2-6028-4fd9-b511-9b23646d2d28",
    venueProviderProfileId: venueProvidersData[1].id,
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
    pricePerEventMin: "900000",
    pricePerEventMax: "3200000",
    portfolioImages: [
      "https://images.example.com/oceanview/beachfront-setup.jpg",
      "https://images.example.com/oceanview/sunset-reception.jpg",
    ],
    listingStatus: "approved",
    isFeatured: true,
    featuredUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    ratingAvg: "4.8",
  },
];
