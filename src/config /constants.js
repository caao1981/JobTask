import {
  CarTransport,
  Cleaning,
  Deliveries,
  FurnitureAssembly,
  ManAndVan,
  MobileBarbers,
  MobileHairDressers,
  MobileNailTechnicians,
  Removals,
  ShopAndDeliver,
} from "./../assets/images/new-jobs-cards/index";
const {
  REACT_APP_GOOGLE_MAPS_API_KEY,
  REACT_APP_BASE_URL,
  REACT_APP_ENCRYPT_KEY,
} = process.env;

export const ACCESS_TOKEN = "accessToken";
export const SUCCESS = "success";
export const DEFAULT = "default";
export const ERROR = "error";
export const WARNING = "warning";
export const INFO = "info";
export const LOG = "log";

export const baseUrl = `${REACT_APP_BASE_URL}/api`;
export const socketUrl = `${REACT_APP_BASE_URL}`;
export const encryptionKey = REACT_APP_ENCRYPT_KEY;
export const googleMapsApiKey = REACT_APP_GOOGLE_MAPS_API_KEY;
export const OTPAllowedKey = "allowed=true";

export const RESPONSE_USER_NOT_FOUND = "User not found";

export const CURRENCY_SYMBOL = <>&pound;</>;
export const SECTION_MARGIN = "118px";
export const ALLOWED_SNACKBAR_VARIANTS = [
  DEFAULT,
  ERROR,
  SUCCESS,
  WARNING,
  INFO,
];

export const SOURCE_LOGIN = "login";
export const SOURCE_REGISTER = "register";

export const SERVICES = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "car-transport",
    to: "/car-transport",
    label: "Car Transport",
    img: href=https://img.freepik.com/free-psd/psd-side-view-realistic-box-truck_1409-3699.jpg,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "cleaning",
    to: "/cleaning",
    label: "Cleaning",
    img: Cleaning,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "deliveries",
    to: "/deliveries",
    label: "Deliveries",
    img: Deliveries,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "furniture-assembly",
    to: "/furniture-assembly",
    label: "Furniture Assembly",
    img: FurnitureAssembly,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "man-and-van",
    to: "/man-and-van",
    label: "Man And Van",
    img: ManAndVan,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "mobile-barbers",
    to: "/mobile-barbers",
    label: "Mobile Barbers",
    img: MobileBarbers,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "mobile-hair-dressers",
    to: "/mobile-hair-dressers",
    label: "Mobile Hair Dressers",
    img: MobileHairDressers,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "mobile-nail-technicians",
     to: "/mobile-nail-technicians",
    label: "Mobile Nail Technicians",
    img: MobileNailTechnicians,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "removals",
    to: "/removals",
    label: "Removals",
    img: Removals,
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    name: "shop-and-deliver",
    to: "/shop-and-deliver",
    label: "Shop And Deliver",
    img: ShopAndDeliver,
  },
];

export const FOOTER_URLS = [
  {
    title: "Menu",
    urlsArr: [
      {
        to: "/home",
        name: "home",
        label: "Home",
      },
      {
        tittle:"Our Services",
        urlsArr:[
          {
        to: /CarTransport,
        to: /Cleaning,
        to: /Deliveries,
        to: /FurnitureAssembly,
  ManAndVan,
  MobileBarbers,
  MobileHairDressers,
  MobileNailTechnicians,
  Removals,
  ShopAndDeliver,
      {
        to: "/about-us",
        name: "about-us",
        label: "About Us",
      },
      {
        to: "/services",
        name: "services",
        label: "Services",
      },
      {
        to: "/contact-us",
        name: "contact-us",
        label: "Contact Us",
      },
    ],
  },
  {
    title: "Services",
    urlsArr: [
      {
        to: "/public/new-job/removals",
        name: "removals",
        label: "Removals",
      },
      {
        to: "/public/new-job/deliveries",
        name: "deliveries",
        label: "Deliveries",
      },
      {
        to: "/public/new-job/man-and-van",
        name: "man-and-van",
        label: "Man & Van",
      },
      {
        to: "/public/new-job/furniture-assembly",
        name: "furniture-assembly",
        label: "Furniture Assembly",
      },
    ],
  },
  {
    title: "Company",
    urlsArr: [
      {
        name: "site-map",
        label: "Site Map",
      },
      {
        name: "terms-and-conditions",
        label: "Terms & Conditions",
        to: "/terms-and-conditions",
         },
      {
        name: "privacy-policy",
        label: "Privacy Policy",
        to: "/privacy-policy",
      },
      {
        name: "cookies",
        label: "Cookies",
      },
    ],
  },
];
