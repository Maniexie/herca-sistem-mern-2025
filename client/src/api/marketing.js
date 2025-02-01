import axiosInstance from "../services/axios";

export const getMarketing = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error getMarketing Data: " + error);
    throw error;
  }
};
