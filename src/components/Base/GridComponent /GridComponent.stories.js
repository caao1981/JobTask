import GridComponent from "./index";
export default {
  title: "jobTask/BaseComponents/GridComponent",
  component: GridComponent,
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GridComponent {...args} />;

// export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const GridComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GridComp.args = {
  children: <div> grid children</div>,
  key: 1,
};
