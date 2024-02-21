import ImageComponent from "./index";

export default {
  title: "jobTask/BaseComponents/ImageComponent",
  component: ImageComponent,
  //   agrsTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <ImageComponent {...args} />;

export const Image = Template.bind({});

Image.args = {
  source: "/home-page-images/sell.svg",
  alt: "img text",
  fill: true,
  width: "151px",
  height: "98px",
  style: {
    objectFit: "contain",
  },
};
