import {
  Home,
  PendingJobs,
  ActiveJobs,
  Chat,
  Profile,
} from "./../assets/icons/sidebar";

export const NAV_LINKS = [
  {
    to: "/",
    name: "home",
    label: "Home",
    icon: <Home />,
  },
  {
    to: "/chat",
    name: "chat",
    icon: <Chat />,
    label: "Chat",
  },
  {
    to: "/pending-jobs",
    name: "home",
    icon: <PendingJobs />,
    label: "Pending Jobs",
  },
  {
    to: "/active-jobs",
    name: "home",
    icon: <ActiveJobs />,
    label: "Active Jobs",
  },
  {
    to: "/profile",
    name: "home",
    icon: <Profile />,
    label: "Profile",
  },
];
