import React, { useState } from "react";
import StackComponent from "./../../Base/StackComponent";
import TypographyComponent from "./../../Base/TypographyComponent";
import PhoneInputComponent from "../../Base/PhoneInput";
import TextFieldComponent from "../../Base/TextFieldComponent";
import User from "./icons/User";
import Email from "./icons/Email";
import Pin from "./icons/Pin";
import LinkComponent from "./../../Base/LinkComponent";
import ButtonComponent from "./../../Base/ButtonComponent";
import { useTheme } from "@emotion/react";
import { useEffect } from "react";

const RegisterComponent = ({ defaultPhone, handleFormSubmission }) => {
  const theme = useTheme();
  const [phoneInput, setPhoneInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (defaultPhone) {
      setPhoneInput(defaultPhone);
    }
  }, []);

  return (
    <StackComponent
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmission({
          email,
          fullName: name,
          address,
          phone: phoneInput,
          zipCode,
          city,
        });
      }}
      direction="column"
      alignItems="center"
      sx={{ pt: "40px", width: "319px", margin: "0 auto" }}
    >
      <TypographyComponent
        sx={{ mb: "12px", textAlign: "center" }}
        variant="authPageHeading"
        component="h1"
      >
        Create an account
      </TypographyComponent>
      <TypographyComponent
        component="p"
        sx={{
          color: "rgba(146, 158, 186, 1)",
          mb: "20px",
          textAlign: "center",
        }}
        variant="body"
      >
        Welcome to JobTask! We’re so glad you’re here. Fill out the info below
        to get started.
      </TypographyComponent>
      <StackComponent sx={{ mb: "30px" }} direction="column" spacing="20px">
        <TextFieldComponent
          value={name}
          onInputChange={setName}
          icon={<User />}
          placeholder="Name"
        />
        <TextFieldComponent
          value={email}
          onInputChange={setEmail}
          icon={<Email />}
          placeholder="Email Address"
        />
        <PhoneInputComponent
          // styleOverrides={{ marginBottom: "70px", marginTop: "30px" }}
          value={phoneInput}
          onInputChange={(e) => setPhoneInput(e)}
        />
        <TextFieldComponent
          value={address}
          onInputChange={setAddress}
          icon={<Pin />}
          placeholder="Address"
        />
        <TextFieldComponent
          value={city}
          onInputChange={setCity}
          icon={<Pin />}
          placeholder="City"
        />
        <TextFieldComponent
          value={zipCode}
          onInputChange={setZipCode}
          icon={<Pin />}
          placeholder="Zip Code"
        />
      </StackComponent>
      <TypographyComponent
        component="p"
        sx={{
          color: "rgba(146, 158, 186, 1)",
          mb: "30px",
          textAlign: "center",
        }}
        variant="body"
      >
        By clicking the Sign Up button you accept our{" "}
        <LinkComponent to="/terms-and-conditions">
          terms and conditions.
        </LinkComponent>
      </TypographyComponent>
      <ButtonComponent
        type="submit"
        fullWidth={true}
        styleOverrides={{ mb: "27px" }}
      >
        Create Profile
      </ButtonComponent>
      <TypographyComponent sx={{ mb: "27px" }} component="p">
        Already have an account?{" "}
        <LinkComponent color={theme.palette.primary.main} to="/login">
          Login Now
        </LinkComponent>
      </TypographyComponent>
    </StackComponent>
  );
};

export default RegisterComponent;
