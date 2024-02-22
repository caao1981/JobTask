import StackComponent from "../../Base/StackComponent";
import TypographyComponent from "../../Base/TypographyComponent";
import CardComponent from "../../Base/CardComponent";
import { USER_NAME } from "./../../../config/temp";
import { CARDS_ARRAY } from "../../UseCase/HomeComponent/constants";
import ImageComponent from "../../Base/ImageComponent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const HomeComponent = () => {
  const userFirstName = useSelector(
    (state) => state.user.fullName.split(" ")[0]
  );
  const navigate = useNavigate();
  return (
    <StackComponent
      direction="column"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
    >
      {userFirstName ? (
        <TypographyComponent
          sx={{
            opacity: "0.6000000238418579",
            mt: "100px",
            mb: "8px",
            textTransform: "capitalize",
          }}
          component="h1"
          variant="lightHeading"
        >
          Hello {userFirstName},
        </TypographyComponent>
      ) : null}

      <TypographyComponent
        sx={{ mb: "60px" }}
        component="h2"
        variant="pageSubHeading"
      >
        What service do you need ?
      </TypographyComponent>
      <StackComponent spacing="15px">
        {CARDS_ARRAY.map((eachCard) => (
          <CardComponent styleOverrides={{ width: "130px", height: "130px" }}>
            <CardActionArea
              onClick={(e) => {
                navigate(eachCard.to);
              }}
              sx={{ width: "100%", height: "100%" }}
            >
              <StackComponent
                direction="column"
                sx={{ height: "100%" }}
                alignItems="center"
                justifyContent="center"
                spacing="20px"
              >
                <ImageComponent
                  width="40px"
                  height="40px"
                  source={eachCard.img}
                  alt="Card"
                />
                <TypographyComponent variant="bodyFocused" component="p">
                  {eachCard.label}
                </TypographyComponent>
              </StackComponent>
            </CardActionArea>
          </CardComponent>
        ))}
      </StackComponent>
    </StackComponent>
  );
};

export default HomeComponent;
