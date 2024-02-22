import { io } from "socket.io-client";
import { socketUrl } from "../config/constants";

export const socket = (token) => {
  return io(`${socketUrl}`, { auth: { token } });
};
