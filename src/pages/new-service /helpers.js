import moment from "moment";

export const buildPayloadObj = (inputVals) => {
  const name = inputVals.selectedServiceType;
  let toSendObj = {
    name,
    schedule: inputVals.workingHours,
  };
  switch (name) {
    case "cleaning": {
      toSendObj.menAvailable = inputVals.numberOfMenAvailable;
      toSendObj.typeOfCleaning = inputVals.typeOfCleaning;

      return toSendObj;
    }
    case "removals": {
      toSendObj.lutonVansAvailable = inputVals.lutonVansAvailable;
      toSendObj.provideFurniture = inputVals.provideFurnitureAndDismantling;
      return toSendObj;
    }
    case "mobile-nail-technician": {
      return toSendObj;
    }
    case "car-transport": {
      toSendObj.lutonVansAvailable = inputVals.lutonVansAvailable;
      return toSendObj;
    }
    case "man-and-van": {
      toSendObj.lutonVansAvailable = inputVals.lutonVansAvailable;
      toSendObj.provideFurnitureAssembly =
        inputVals.provideFurnitureAndDismantling;
      return toSendObj;
    }
    case "mobile-barber": {
      return toSendObj;
    }
    case "mobile-hair-dresser": {
      return toSendObj;
    }
    case "shop-and-deliver": {
      return toSendObj;
    }
    case "deliveries": {
      toSendObj.lutonVansAvailable = inputVals.lutonVansAvailable;
      toSendObj.provideFurniture = inputVals.provideFurnitureAndDismantling;
      toSendObj.menAvailable = inputVals.numberOfMenAvailable;
      return toSendObj;
    }
    case "furniture-assemblly": {
      toSendObj.lutonVansAvailable = inputVals.lutonVansAvailable;
      return toSendObj;
    }
    default: {
      throw new Error("INVALID NAME PROVIDED.");
    }
  }
};

export const IsoToHHmm = (iso) => {
  return moment(iso).format("HH:mm");
};
