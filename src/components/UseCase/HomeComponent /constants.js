import {
  PendingJobs,
  ActiveJobs,
  CompletedWork,
  MyServices,
  Profile,
} from "../../../assets/images/home-cards";

export const CARDS_ARRAY = [
  {
    name: "pending-jobs",
    to: "/pending-jobs",
    label: "Pending Jobs",
    img: PendingJobs,
  },
  {
    name: "active-jobs",
    to: "/active-jobs",
    label: "Active Jobs",
    img: ActiveJobs,
  },
  {
    name: "completed-jobs",
    to: "/completed-jobs",
    label: "Completed Work",
    img: CompletedWork,
  },
  {
    name: "my-services",
    to: "/my-services",
    label: "My Services",
    img: MyServices,
  },
  {
    name: "profile",
    to: "/profile",
    label: "Profile",
    img: Profile,
  },
