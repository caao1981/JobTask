import React from "react";
import BoxComponent from "../../components/Base/BoxComponent";
import StackComponent from "../../components/Base/StackComponent";
import IconButton from "../../components/Base/IconButton";
import Menu from "../../components/Base/Menu";
import { useCustomColors } from "../../hooks";
import { NAV_LINKS } from "../../config/nav-links";
import { useLocation, useNavigate } from "react-router";
import TypographyComponent from "../../components/Base/TypographyComponent";
import MainPageArrowBtn from "../../components/Advance/MainPageArrowBtn";
import ArrowLeft from "./assets/ArrowLeft";
import userImage from "./../../assets/images/temp/Vector (3).png";
import ImageComponent from "../../components/Base/ImageComponent";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const MainPage = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getCustomColors = useCustomColors();
  const navigate = useNavigate();
  const MAIN_PAGE_PADDING = "40px";
  const PAGE_CONTENT_PADDING = "30px";
  const IS_CHAT_PAGE = location.pathname.includes("chat");
  return (
    <StackComponent
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
      }}
    >
      <StackComponent
        direction="column"
        sx={{ mt: "60px", p: "0 30px" }}
        spacing="60px"
        alignItems="center"
      >
        {NAV_LINKS.map((eachUrl) => (
          // try icon button here
          <IconButton
            onClick={() => {
              navigate(eachUrl.to);
            }}
            key={eachUrl.name}
          >
            {eachUrl.icon}
          </IconButton>
        ))}
      </StackComponent>
      <StackComponent
        sx={{
          borderTopLeftRadius: "60px",
          borderBottomLeftRadius: "60px",
          backgroundColor: getCustomColors("mainAppBehindBackground"),
          flexGrow: 1,
          p: MAIN_PAGE_PADDING,
          maxHeight: "100vh",
        }}
        direction="column"
      >
        <StackComponent alignItems="center" sx={{ pb: PAGE_CONTENT_PADDING }}>
          <MainPageArrowBtn
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            icon={<ArrowLeft />}
          />
          <TypographyComponent
            component="h1"
            variant="mainPageHeading"
            sx={{ ml: PAGE_CONTENT_PADDING, flexGrow: 1 }}
          >
            {
              NAV_LINKS.find((eachUrl) => eachUrl.to === location.pathname)
                ?.label
            }
          </TypographyComponent>
          {/* user icon and logout */}
          <Menu
            menuOptions={[
              {
                label: "Logout",
                name: "logout",
                clickSideEffects: () => {
                  dispatch(authActions.logout());
                },
              },
            ]}
            isIcon
            icon={
              <ImageComponent
                width={MAIN_PAGE_PADDING}
                height={MAIN_PAGE_PADDING}
                source={userImage}
              />
            }
          />
        </StackComponent>
        <BoxComponent
          component="main"
          sx={{
            backgroundColor: getCustomColors("mainAppFacingBackground"),
            borderRadius: "60px",
            p: IS_CHAT_PAGE ? "0px" : PAGE_CONTENT_PADDING,
            boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.10)",
            height: `calc(100% - ${PAGE_CONTENT_PADDING} - ${MAIN_PAGE_PADDING})`,
          }}
        >
          <BoxComponent
            sx={{
              height: "100%",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "8px",
                backgroundColor: "#e7e7e7",
                border: "1px solid #cacaca",
                boxShadow: "inset 0 0 6px rgba(0, 0, 0, .3)",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "8px",
                backgroundColor: "primary.light",
              },
            }}
          >
            {children}
          </BoxComponent>
        </BoxComponent>
      </StackComponent>
    </StackComponent>
  );
};

export default MainPage;
