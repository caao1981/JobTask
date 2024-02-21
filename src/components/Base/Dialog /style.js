import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  mainDiv: {
    display: "flex",
    p: `${relative_height_size_generator(89)} ${relative_width_size_generator(
      140
    )} ${relative_height_size_generator(86)} ${relative_width_size_generator(
      140
    )}`,
    flexDirection: "column",
  },
  headerDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  dialogText: {
    textAlign: "left",
    color: "#313131",
    fontSize: relative_width_size_generator(36),
    whiteSpace: "nowrap",
    fontWeight: 600,
    lineHeight: relative_height_size_generator(54),
  },
  dialogSubtitle: {
    textAlign: "left",
    color: "#2A3249",
    fontSize: relative_width_size_generator(18),
    // whiteSpace: "nowrap",
    fontWeight: 600,
    lineHeight: relative_height_size_generator(18),
  },
  dialogAction: {
    // display: "flex",
    // flexDirection: "column",
    // gap: "16px",
    // alignItems: "flex-start",
    padding: 0,
  },
  saveButton: {
    height: relative_height_size_generator(48),
    // width: relative_width_size_generator(488),
    width: "100%",
    borderRadius: relative_width_size_generator(14),
    // padding: "10px 20px 10px 20px",
    color: "#FFFFFF",
    background: "#92198C",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#92198C",
    },
  },
  buttonBox: { display: "flex", alignSelf: "stretch" },
};
