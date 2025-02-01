import axiosInstance from "../services/axios";

export const getPenjualan = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Error getPenjualan Data: " + error);
    throw error;
  }
};
