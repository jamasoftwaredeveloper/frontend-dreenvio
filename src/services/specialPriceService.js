import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

export const getAllSpecialPrices = async () => {
  const response = await axios.get(`${API_URL}/special-prices`);
  return response.data;
};

export const createSpecialPrice = async (specialPriceData) => {
  const response = await axios.post(`${API_URL}/special-prices/create`, specialPriceData);
  return response.data;
};

export const updateSpecialPrice = async (id, specialPriceData) => {
  const response = await axios.put(`${API_URL}/special-prices/update/${id}`, specialPriceData);
  return response.data;
};

export const deleteSpecialPrice = async (id) => {
  const response = await axios.delete(`${API_URL}/special-prices/delete/${id}`);
  return response.data;
};

export const validateSpecialPrice = async (id) => {
  const response = await axios.get(`${API_URL}/special-prices/validate-special-price/${id}`);
  return response.data;
};
