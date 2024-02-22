import PopoverComponent from "./index";

export default {
  title: "jobTask/BaseComponents/PopoverComponent",
  component: PopoverComponent,
};

const Template = (args) => <PopoverComponent {...args} />;

export const PopoverComponentSB = Template.bind({});

PopoverComponentSB.args = {
  open: false,
  paperProps: "",
  children: <></>,
  anchorEl: {},
  anchorOrigin: {},
  transformOrigin: {},
  disableRestoreFocus: true,
};
