// JSON-LD Schema Markup for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech Sales Playbook",
  url: "https://techsalesplaybook.com",
  logo: "https://techsalesplaybook.com/logo.png",
  description:
    "The definitive playbook for breaking into tech sales, mastering cold outreach, and accelerating your SaaS sales career.",
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/techsalesplaybook",
    "https://linkedin.com/company/techsalesplaybook",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@techsalesplaybook.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tech Sales Playbook",
  url: "https://techsalesplaybook.com",
  description:
    "Premium guides and coaching for breaking into tech sales and crushing your quota.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://techsalesplaybook.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export function generateProductSchema(product: {
  name: string
  description: string
  price: number
  slug: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image || "https://techsalesplaybook.com/og-image.jpg",
    url: `https://techsalesplaybook.com/playbooks/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "Tech Sales Playbook",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://techsalesplaybook.com/playbooks/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Tech Sales Playbook",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `https://techsalesplaybook.com/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author || "Tech Sales Playbook",
      url: "https://techsalesplaybook.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Tech Sales Playbook",
      logo: {
        "@type": "ImageObject",
        url: "https://techsalesplaybook.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://techsalesplaybook.com/blog/${article.slug}`,
    },
  }
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
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
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export const homePageFAQs = [
  {
    question: "What is Tech Sales Playbook?",
    answer:
      "Tech Sales Playbook provides premium PDF guides and coaching for breaking into tech sales, mastering cold outreach, and advancing your career from SDR to Account Executive. Our playbooks contain proven scripts, frameworks, and strategies used by top performers at leading SaaS companies.",
  },
  {
    question: "Do I need sales experience to use these playbooks?",
    answer:
      "No! Our 'Breaking In' playbook is specifically designed for career changers and new grads with zero sales experience. We cover everything from understanding the SDR role to acing interviews and negotiating your first offer.",
  },
  {
    question: "What format are the playbooks in?",
    answer:
      "All playbooks are delivered as professional PDF documents that you can read on any device. You get instant access after purchase with lifetime updates included.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all playbooks. If you're not satisfied with your purchase, contact us for a full refund—no questions asked.",
  },
  {
    question: "How are these different from free resources online?",
    answer:
      "Our playbooks contain tactical, actionable content built from real-world experience—not theoretical advice. You get word-for-word scripts tested across thousands of calls, frameworks refined over hundreds of deals, and strategies that have helped people land roles at top SaaS companies.",
  },
]

