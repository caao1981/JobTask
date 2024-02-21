import DividerComponent from "./index";
export default {
  title: "jobTask/BaseComponents/Divider",
  component: DividerComponent,
  argTypes: {},
};

const content = (
  <div>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
  </div>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <DividerComponent {...args}>left</DividerComponent>
    {content}
    <DividerComponent {...{ textAlign: "center" }}>center</DividerComponent>
    {content}
    <DividerComponent {...{ textAlign: "right" }}>right</DividerComponent>
  </>
);

export const ContentDivider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContentDivider.args = {
  textAlign: "left",
};
