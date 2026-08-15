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
          "@type": "Product",
          name: "PS5 Console Rental",
          description: "PlayStation 5 console rental with pre-installed games, DualSense controller, doorstep delivery across Trivandrum.",
          image: [
            `${SITE_CONFIG.url}/ps5-controller.png`,
            `${SITE_CONFIG.url}/hero-bg.png`,
          ],
          brand: {
            "@type": "Brand",
            name: SITE_CONFIG.name,
          },
          offers: {
            "@type": "Offer",
            url: `${SITE_CONFIG.url}/rentals`,
            price: "949",
            priceCurrency: "INR",
            priceValidUntil: "2027-12-31",
            validFrom: "2025-01-01",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
            },
            eligibleDuration: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "DAY",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "INR",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "IN",
                addressRegion: "KL",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "IN",
              returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
              merchantReturnDays: 0,
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          },
        },
        {
          "@type": "Product",
          name: "43\" QLED TV Rental with Tripod Stand",
          description: "43 inch QLED TV rental with heavy-duty tripod stand, transport, and installation for weddings, birthdays, corporate events, trade shows.",
          image: [
            `${SITE_CONFIG.url}/lounge-setup.png`,
            `${SITE_CONFIG.url}/hero-bg.png`,
          ],
          brand: {
            "@type": "Brand",
            name: SITE_CONFIG.name,
          },
          offers: {
            "@type": "Offer",
            url: `${SITE_CONFIG.url}/rentals`,
            price: "3000",
            priceCurrency: "INR",
            priceValidUntil: "2027-12-31",
            validFrom: "2025-01-01",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
            },
            eligibleDuration: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "DAY",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "INR",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "IN",
                addressRegion: "KL",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
              },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "IN",
              returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
              merchantReturnDays: 0,
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "85",
            bestRating: "5",
            worstRating: "1",
          },
        },
      ],
    },
  };
}

