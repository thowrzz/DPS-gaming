import { SITE_CONFIG } from "@/constants/site";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo-circle.jpg`,
    image: `${SITE_CONFIG.url}/hero-bg.png`,
    description: SITE_CONFIG.metaDescription,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.streetAddress,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.geoCoordinates.latitude,
      longitude: SITE_CONFIG.location.geoCoordinates.longitude,
    },
    hasMap: SITE_CONFIG.location.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "24/7 Access (Pre-Booking Only)", value: true },
      { "@type": "LocationFeatureSpecification", name: "PlayStation 5 Console Gaming", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ultra High-Definition Displays", value: true },
      { "@type": "LocationFeatureSpecification", name: "DualSense Edge Controllers", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioned Lounge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Vehicle Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "High Speed Fiber Internet", value: true },
    ],
    sameAs: [
      SITE_CONFIG.contact.instagramUrl,
      SITE_CONFIG.contact.facebookUrl,
      SITE_CONFIG.contact.twitterUrl,
      SITE_CONFIG.contact.youtubeUrl,
      SITE_CONFIG.contact.linkedinUrl,
      "https://digitalproductsolutions.in",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.parentCompany,
      url: "https://digitalproductsolutions.in",
    },
  };
}


export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_CONFIG.url}${item.item}`,
    })),
  };
}

export function getRentalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electronics & Gaming Equipment Rental Service",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.contact.phone,
      url: SITE_CONFIG.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.location.streetAddress,
        addressLocality: SITE_CONFIG.location.city,
        addressRegion: SITE_CONFIG.location.state,
        postalCode: SITE_CONFIG.location.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Thiruvananthapuram District, Kerala, India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "TV & Console Rentals Trivandrum",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "PS5 Console Rental",
            description: "PlayStation 5 console rental with pre-installed games, DualSense controller, doorstep delivery across Trivandrum.",
          },
          price: "949",
          priceCurrency: "INR",
          eligibleDuration: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "DAY",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "43\" QLED TV Rental with Tripod Stand",
            description: "43 inch QLED TV rental with heavy-duty tripod stand, transport, and installation for weddings, birthdays, corporate events, trade shows.",
          },
          price: "3000",
          priceCurrency: "INR",
          eligibleDuration: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "DAY",
          },
        },
      ],
    },
  };
}

