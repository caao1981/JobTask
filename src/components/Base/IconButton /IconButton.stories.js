import IconButton from "./index";
import AbcIcon from "@mui/icons-material/Abc";

export default {
  title: "jobTask/BaseComponents/IconButton",
  component: IconButton,
  agrsTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <IconButton {...args} />;

export const Iconbtn = Template.bind({});

Iconbtn.args = {
  children: <AbcIcon size="large" ariaLabel="Label ABC" />,
  color: "error",
  sx: {
    backgroundColor: "redr",
    "& hover": {
      backgroundColor: "red",
    },
  },
  onClick: () => alert(1),
};
