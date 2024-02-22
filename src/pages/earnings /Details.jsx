import React from "react";
import CardComponent from "../../components/Base/CardComponent";
import StackComponent from "../../components/Base/StackComponent";
import TypographyComponent from "../../components/Base/TypographyComponent";
import { CURRENCY_SYMBOL } from "../../config/constants";

const Details = ({ earningsArr }) => {
  return (
    <StackComponent sx={{ flexGrow: 1 }} direction="column" spacing="40px">
      {earningsArr ? (
        <>
          {earningsArr.length > 0 ? (
            <>
              {earningsArr.map((eachEarningInst) => (
                <CardComponent
                  key={eachEarningInst._id}
                  styleOverrides={{ color: "23496B", padding: "1rem" }}
                >
                  <StackComponent>
                    <StackComponent direction="column" sx={{ flexGrow: 1 }}>
                      <TypographyComponent
                        sx={{ textTransform: "capitalize", fontWeight: 800 }}
                        color="primary.main"
                      >
                        {eachEarningInst.name.split("-").join(" ")}
                      </TypographyComponent>
                      <TypographyComponent sx={{ textTransform: "capitalize" }}>
                        {eachEarningInst.user.fullName}
                      </TypographyComponent>
                    </StackComponent>
                    <TypographyComponent>
                      {CURRENCY_SYMBOL}
                      {eachEarningInst.amount}
                    </TypographyComponent>
                  </StackComponent>
                </CardComponent>
              ))}
            </>
          ) : (
            <>No earnings found!</>
          )}
        </>
      ) : null}
    </StackComponent>
  );
};

export default Details;
