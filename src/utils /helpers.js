import { encryptionKey } from "../config/constants";
import crypto from "crypto-js";

export function adjustFontColor(backgroundColor) {
  // Convert the background color to RGB
  const rgb = backgroundColor.match(/\d+/g);
  const red = parseInt(rgb[0]);
  const green = parseInt(rgb[1]);
  const blue = parseInt(rgb[2]);

  // Calculate the relative luminance of the background color
  const relativeLuminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

  // Define the breaking point for darkness (adjust as needed)
  const darknessThreshold = 0.5;

  // Determine the font color based on the background darkness
  const fontColor =
    relativeLuminance <= darknessThreshold ? "#FFFFFF" : "#000000";

  return fontColor;
}

export async function getMutation(payload, mutationInstance) {
  try {
    // Call the API using the mutation
    const response = await mutationInstance.mutateAsync(payload);
    // Handle the response if needed (e.g., show success message, update state, etc.)
    return response;
  } catch (error) {
    // Handle errors if needed (e.g., show error message, etc.)
    return error;
  }
}
export const encrypt = (message) => {
  const encrypted = crypto.AES.encrypt(message, encryptionKey).toString();

  return encrypted;
};

export const decrypt = (code) => {
  const decrypted = crypto.AES.decrypt(code, encryptionKey).toString(
    crypto.enc.Utf8
  );
  return decrypted;
};

export const formatDateNeatly = (dateISO) => {
  return dateISO.split("T").join(" | ").slice(0, -8);
};
