import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

const baseURL: string = "https://playingwithdata-and.github.io/portfolio";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": false,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const protectedRoutes: ProtectedRoutesConfig = {};

import { Playfair_Display, Outfit, JetBrains_Mono } from "next/font/google";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const label = Outfit({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const style: StyleConfig = {
  theme: "system",
  neutral: "gray",
  brand: "cyan",
  accent: "emerald",
  solid: "contrast",
  solidStyle: "plastic",
  border: "rounded",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: false,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: true,
    opacity: 30,
    color: "neutral-alpha-medium",
    width: "2rem",
    height: "2rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "",
  effects: effects,
};

const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Andre Afrillian",
  description: home.description,
  email: "andre@example.com",
};

const sameAs: SameAsConfig = {
  linkedin: "https://linkedin.com/in/andreafrillian",
  threads: "",
  discord: "",
};

const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
