export const FORM_PREFERENCES = () => {
  return {
    cleaning: [
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
          inputProps: {
            min: 2,
          },
        },
      },
      {
        id: "typeOfCleaning",
        field: "checkbox",
        label: "Type of Cleaning You provide",
        options: [
          {
            name: "regular",
            label: "Regular Clean",
            subText:
              "mirror, counters, floor, fixtures, vacuuming, surface, dusting, tidying, wipe down appliances",
          },
          {
            name: "deep",
            label: "Deep Clean",
            subText:
              "all regular clean plus walls and baseboards, windows, inside of appliances, stove top, tile grout, baseboards",
          },
        ],
      },
    ],
    removals: [
      {
        id: "lutonVansAvailable",
        field: "input",
        props: {
          label: "Number of Luton Vans Available",
          type: "number",
        },
      },
      {
        id: "provideFurnitureAndDismantling",
        field: "radio",
        props: {
          label: "Do you Provide Furniture Assembly or Dismantling",
          options: [
            {
              value: true,
              label: "Yes",
            },
            {
              value: false,
              label: "No",
            },
          ],
        },
      },
    ],
    deliveries: [
      {
        id: "lutonVansAvailable",
        field: "input",
        props: {
          label: "Number of Luton Vans Available",
          type: "number",
        },
      },
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
        },
      },
      {
        id: "provideFurnitureAndDismantling",
        field: "radio",
        props: {
          label: "Do you Provide Furniture Assembly or Dismantling",
          options: [
            {
              value: true,
              label: "Yes",
            },
            {
              value: false,
              label: "No",
            },
          ],
        },
      },
    ],
    "man-and-van": [
      {
         id: "lutonVansAvailable",
        field: "input",
        props: {
          label: "Number of Luton Vans Available",
          type: "number",
        },
      },
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
        },
      },
      {
        id: "provideFurnitureAndDismantling",
        field: "radio",
        props: {
          label: "Do you Provide Furniture Assembly or Dismantling",
          options: [
            {
              value: true,
              label: "Yes",
            },
            {
              value: false,
              label: "No",
            },
          ],
        },
      },
    ],
    "furniture-assembly": [
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
        },
      },
    ],
    "shop-and-deliver": [
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
        },
      },
    ],
    "car-transport": [
      {
        id: "numberOfMenAvailable",
        field: "input",
        props: {
          label: "Number of Men Available",
          type: "number",
          min: 2,
        },
      },
    ],
    "mobile-barbers": [],
    "mobile-nail-technicians": [],
    "mobile-hair-dresser": [],
  };
};
