import axiosInstance from "../services/axios";

export const getPembayaran = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Error getPembayaran Data: " + error);
    throw error;
  }
};
