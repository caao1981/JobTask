import axios from "axios";
import { ACCESS_TOKEN, baseUrl } from "../config/constants";

const buildResponse = (error, response) => ({
  error,
  serviceResponse: response,
});

const addToken = (token) => `Bearer ${token}`;

export const sendOtp = async ({ phone }) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/send-otp`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ phone }),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const register = async ({
  phone,
  email,
  fullName,
  address,
  zipCode,
  city,
  requestId,
}) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      phone,
      email,
      fullName,
      address,
      zipCode,
      city,
      requestId,
    }),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const verifyOtp = async ({ phone, otp }) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/verify-otp`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ phone, otp }),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const myEarnings = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/earnings`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const getAllServices = async (payload) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/service`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: JSON.stringify(payload),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const acceptJobHandler = async (jobId) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/job/${jobId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const rejectJobHandler = async (jobId) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/job/${jobId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const addEditService = async (payload) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/service`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: JSON.stringify(payload),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};
export const deleteService = async (name) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/service?name=${name}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const getJobList = async (status) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
     url: `${baseUrl}/job?status=${status}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const rateAndReview = async (jobId, { rating, review }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let data = JSON.stringify({
    rating,
    review,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/job/review/${jobId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const completeAJob = async (jobId) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let data = {
    markedCompleted: true,
  };
  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/job/${jobId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const login = async ({ phone }) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ phone }),
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const uploadProfilePicture = async ({ image }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let data = JSON.stringify({
    profileImage: image,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner/upload-image`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
     return buildResponse(true, err);
  }
};

export const uploadProfileData = async ({
  name,
  contactNumber,
  email,
  location,
}) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let data = JSON.stringify({
    fullName: name,
    location: location,
    email: email,
    phone: contactNumber,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${baseUrl}/owner`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data: data,
  };
  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const getInbox = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/chat/inbox`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };

  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const sendMessage = async ({ body, chatId, recieverId }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let data = JSON.stringify({
    message: body,
    receiver: recieverId,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${baseUrl}/chat/send/${chatId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
    data,
  };

  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};

export const getSingleChatHistory = async ({ chatId }) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/chat/${chatId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: addToken(token),
    },
  };

  try {
    const res = await axios.request(config);
    return buildResponse(false, res);
  } catch (err) {
    return buildResponse(true, err);
  }
};
