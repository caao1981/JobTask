import React from "react";
import CardComponent from "../../components/Base/CardComponent";
import StackComponent from "../../components/Base/StackComponent";
import TypographyComponent from "../../components/Base/TypographyComponent";
import { CURRENCY_SYMBOL } from "../../config/constants";
import BoxComponent from "../../components/Base/BoxComponent";

const Summary = ({ balance, totalEarnings, withdrawan }) => {
  return (
    <BoxComponent sx={{ flexGrow: 0.4 }}>
      {!balance && !totalEarnings && !withdrawan ? (
        <>Loading...</>
      ) : (
        <CardComponent styleOverrides={{ color: "23496B", padding: "1rem" }}>
          <StackComponent spacing="10px" direction="column">
            <TypographyComponent variant="boldHeading">
              Earning Summary
            </TypographyComponent>
            <StackComponent alignItems="center" justifyContent="space-between">
              <TypographyComponent sx={{ fontWeight: "400" }}>
                Total Earnings
              </TypographyComponent>
              <TypographyComponent sx={{ fontWeight: "400" }}>
                {totalEarnings > 0 ? (
                  <>
                    {CURRENCY_SYMBOL}
                    {totalEarnings}
                  </>
                ) : (
                  <>{CURRENCY_SYMBOL}0</>
                )}
              </TypographyComponent>
            </StackComponent>
            <StackComponent alignItems="center" justifyContent="space-between">
              <TypographyComponent sx={{ fontWeight: "400" }}>
                Withdrawen
              </TypographyComponent>
              <TypographyComponent sx={{ fontWeight: "400" }}>
                {withdrawan > 0 ? (
                  <>
                    {CURRENCY_SYMBOL}
                    {withdrawan}
                  </>
                ) : (
                  <>{CURRENCY_SYMBOL}0</>
                )}
              </TypographyComponent>
            </StackComponent>
            <StackComponent alignItems="center" justifyContent="space-between">
              <TypographyComponent sx={{ fontWeight: "400" }}>
                Account Balance
              </TypographyComponent>
              <TypographyComponent sx={{ fontWeight: 800 }}>
                {balance > 0 ? (
                  <>
                    {CURRENCY_SYMBOL}
                    {balance}
                  </>
                ) : (
                  <>{CURRENCY_SYMBOL}0</>
                )}
              </TypographyComponent>
            </StackComponent>
          </StackComponent>
        </CardComponent>
      )}
    </BoxComponent>
  );
};

export default Summary;
