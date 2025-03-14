import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const findUser = async (id) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
};
