import MapComponent from "../IconButton/index";
import AbcIcon from "@mui/icons-material/Abc";
export default {
  title: "jobTask/BaseComponents/MapComponent",
  component: MapComponent,
  agrsTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <MapComponent {...args} />;

export const MapComponentSB = Template.bind({});

MapComponentSB.args = {
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
