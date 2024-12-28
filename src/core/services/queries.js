import { useQuery } from "@tanstack/react-query";

import api from "../../app/api/api";
import queryString from "query-string";
const useGetTours = (query) => {
  const url = "tour?" + queryString.stringify(query);

  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};
const useGetAllProducts = (page) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10`);
  const queryKey = ["all-products", page];

  return useQuery({ queryFn, queryKey });
};

const useGetUserProfile = () => {
  const queryFn = () => api.get(`user/profile`);
  const queryKey = ["user-profile"];

  return useQuery({ queryFn, queryKey });
};
const useGetUserTours = () => {
  const queryFn = () => api.get(`user/tours`);
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
const useGetUserBasket = () => {
  const queryFn = () => api.get(`basket`);
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};

const useGetTourById = (tourId) => {
  const queryFn = () => api.get(`tour/${tourId}`);
  const queryKey = ["tour", tourId];
  return useQuery({ queryFn, queryKey });
};

const GetTours = (destinationId, originId, startDate, endDate) => {
  const queryFn = () =>
    api.get(
      `tour
      ${destinationId && `?destinationId=${destinationId}`}
      ${originId && `?originId=${originId}`}
      ${startDate && `?startDate=${startDate}`}
      ${endDate && `?endDate=${endDate}`}`,
    );
  const queryKey = ["tours", tourId];
  return useQuery({ queryFn, queryKey });
};

const useGetUserTransactions = () => {
  const queryFn = () => api.get(`user/transactions`);
  const queryKey = ["user-transactions"];
  return useQuery({ queryFn, queryKey });
};

export {
  useGetAllProducts,
  useGetUserProfile,
  useGetTourById,
  GetTours,
  useGetUserBasket,
  useGetUserTours,
  useGetTours,
  useGetUserTransactions,
};
