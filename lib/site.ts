export const SITE_URL = "https://anupamatech.com";

export const company = {
  name: "Anupama Technologies",
  legalName: "Anupama Technologies Private Limited",
  cin: "U62099HR2026PTC149355",
  incorporated: "18 August 2026",
  email: "bharat@anupamatech.com",
  location: "Gurgaon, Haryana, India",
  tagline: "Building technology products people love to use.",
  description:
    "Anupama Technologies builds thoughtful digital products that bring people, technology and real-world experiences together.",
  address: [
    "213 & 214, 2nd Floor,",
    "Welldone Tech Park,",
    "Gurugram, Haryana 122001",
  ],
} as const;

/**
 * Carnival links are hidden unless NEXT_PUBLIC_CARNIVAL_URL is set
 * (e.g. "https://carnival.social"). Read at build time.
 */
const carnivalUrl = process.env.NEXT_PUBLIC_CARNIVAL_URL?.trim() || undefined;

export const carnival = {
  name: "Carnival",
  url: carnivalUrl,
  host: carnivalUrl ? new URL(carnivalUrl).host : undefined,
} as const;

export const carnivalScreenshot = {
  src: "/carnival/screen-1.jpeg",
  alt: "Carnival app home screen with a spin wheel, a Join the Wheel button and Wheel, Messages and Profile tabs",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

export const routes = ["/", "/about", "/products", "/contact", "/privacy", "/terms"] as const;
