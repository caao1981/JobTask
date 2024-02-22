import React from "react";
import StackComponent from "../../Base/StackComponent";
import CardComponent from "../../Base/CardComponent";
import TypographyComponent from "../../Base/TypographyComponent";
import ImageComponent from "../../Base/ImageComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import IconButton from "../../Base/IconButton";
import Menu from "../../Base/Menu";
import ThreeDotIcon from "./../../../assets/icons/common/Menu.png";
import { useCustomColors, useNotification } from "../../../hooks";
import { CURRENCY_SYMBOL, ERROR, SUCCESS } from "../../../config/constants";
import EditDeleteMenu from "../../Advance/EditDeleteMenu/EditDeleteMenu";
import { useNavigate } from "react-router";
import { deleteService } from "../../../services";

const TAGS = [
  {
    value: "first-tag",
    label: "First Tag",
  },
  {
    value: "second-tag",
    label: "Second Tag",
  },
];

const SingleService = ({ eachService, serviceId, resetApi }) => {
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const getCustomColors = useCustomColors();
  return (
    <CardComponent styleOverrides={{ p: "20px" }}>
      <StackComponent direction="column">
        <StackComponent
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <TypographyComponent
            sx={{ textTransform: "capitalize" }}
            variant="cardHeading"
            component="h3"
          >
            {eachService.name}
          </TypographyComponent>
          <EditDeleteMenu
            customMenuItemComponent
            editHandler={() => {
              navigate(`/my-services/${serviceId}`);
            }}
            deleteHandler={() => {
              deleteService(eachService.name)
                .then((res) => {
                  if (res.error) {
                    console.error(res);
                    return showNotification("Something went wrong", ERROR);
                  }
                  showNotification("Service Deleted!", SUCCESS);
                  resetApi();
                })
                .catch((err) => {
                  console.error(err.message);
                  return showNotification("Something went wrong", ERROR);
                });
            }}
            isIcon
            icon={
              <ImageComponent
                containerStyles={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                }}
                width="26px"
                height="26px"
                source={ThreeDotIcon}
              />
            }
          />
        </StackComponent>
        <StackComponent
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          sx={{
            "& > *": {
              color: "primary.main",
            },
            mb: "9px",
          }}
        >
          <StackComponent
            sx={{
              maxWidth: "300px",
              overflow: "hidden",
              textOverflow: "ellipses",
            }}
            gap="5px"
            justifyContent="flex-start"
            alignItems="center"
          >
            {eachService.tags && eachService.tags?.length > 0
              ? eachService.tags?.map((eachTag, index) => (
                  <React.Fragment key={eachTag.value}>
                    <TypographyComponent variant="body" component="h6">
                      {eachTag.label}
                    </TypographyComponent>
                    {eachService.tags?.length === index + 1 ? null : <>|</>}
                  </React.Fragment>
                ))
              : null}
          </StackComponent>
          {/* <TypographyComponent variant="cardHeading" component="h6">
            {CURRENCY_SYMBOL} {eachService.price}
          </TypographyComponent> */}
        </StackComponent>
        <TypographyComponent
          sx={{
            color: getCustomColors("lightText"),
          }}
          component="p"
        >
          {eachService.description}
        </TypographyComponent>
      </StackComponent>
    </CardComponent>
  );
};

export default SingleService;
