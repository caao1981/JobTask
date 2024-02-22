import React from "react";
import StackComponent from "../../components/Base/StackComponent";
import SelectComponent from "../../components/Base/SelectComponent";
import { FORM_PREFERENCES } from "./config";
import TextFieldComponent from "../../components/Base/TextFieldComponent";
import RadioGroupComponent from "../../components/Base/RadioGroupComponent";
import CheckboxGroup from "./../../components/Advance/CheckboxGroup";

const buildObj = (name) => {
  const capitalizedLabel = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    value: name,
    label: capitalizedLabel,
  };
};

const MainForm = ({ formData, updateFormData }) => {
  const fields = FORM_PREFERENCES()[formData.selectedServiceType];
  return (
    <StackComponent spacing="1rem" direction="column" sx={{ width: "100%" }}>
      <SelectComponent
        defaultValue={"cleaning"}
        fullWidth
        label="Select Service"
        options={[
          buildObj("car-transport"),
          buildObj("cleaning"),
          buildObj("deliveries"),
          buildObj("furniture-assembly"),
          buildObj("man-and-van"),
          buildObj("mobile-barbers"),
          buildObj("mobile-hair-dressers"),
          buildObj("mobile-nail-technicians"),
          buildObj("removals"),
          buildObj("shop-and-deliver"),
        ]}
        onSelectionChange={(e) => updateFormData("selectedServiceType", e)}
      />
      {fields.length > 0
        ? fields.map((eachField) => {
            const { field } = eachField;
            switch (field) {
              case "input":
                return (
                  <TextFieldComponent
                    value={formData[eachField.id]}
                    onInputChange={(e) => updateFormData(eachField.id, e)}
                    key={eachField.id}
                    {...eachField.props}
                  />
                );
              case "checkbox":
                return (
                  <CheckboxGroup
                    key={eachField.id}
                    heading={eachField.label}
                    groupArr={[
                      ...eachField.options.map((eachOption) => {
                        return {
                          id: eachOption.name,
                          props: {
                            checked: formData.typeOfCleaning.includes(
                              eachOption.name
                            ),
                            onChangeCheckbox: () =>
                              updateFormData(eachField.id, eachOption.name),
                            label: eachOption.label,
                          },
                        };
                      }),
                    ]}
                  />
                );
              case "radio":
                return (
                  <RadioGroupComponent
                    direction="column"
                    options={eachField.props.options}
                    groupLabel={eachField.props.label}
                    value={formData[eachField.id]}
                    setValue={(e) => updateFormData(eachField.id, e)}
                  />
                );
              default:
                return null;
            }
          })
        : null}
    </StackComponent>
  );
};

export default MainForm;
