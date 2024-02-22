// Button.stories.js|jsx

import React from "react";

import InputLabelComponent from "./index";

export default {
  title: "jobTask/BaseComponents/InputLabel",
  component: InputLabelComponent,
  argTypes: {
    sx: {
      options: ["mb", "ml"],
      control: { type: "select" },
    },
    children: {
      control: "text",
    },
  },
  //   agrsTypes: { onClick: { action: 'clicked' } },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InputLabelComponent {...args} />;

// 👇 Each story then reuses that template
export const Label = Template.bind({});
Label.args = {
  children: "Add Keyword",
  sx: {},
};
