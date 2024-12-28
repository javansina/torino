import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../../app/api/api";
import toast from "react-hot-toast";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onError = (error) => toast.error(error.message);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
  };
  return useMutation({ mutationFn, onError, onSuccess });
};

const usePutUserData = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put(`user/profile`, data);
  const onError = (error) => toast.error(error.message);
  const onSuccess = () =>
    queryClient.invalidateQueries({ queryKey: ["user-profile"] });
  return useMutation({ mutationFn, onError, onSuccess });
};

const usePostOrder = () => {
  const mutationFn = (data) => api.post(`order`, data);
  const onError = (error) => toast.error(error.message);

  return useMutation({ mutationFn, onError });
};

const usePutTourInBasket = () => {
  const mutationFn = (tourId) => api.put(`basket/${tourId.id}`);
  const onError = (error) => toast.error(error.message);

  return useMutation({ mutationFn, onError });
};

export {
  useSendOtp,
  useCheckOtp,
  usePutUserData,
  usePutTourInBasket,
  usePostOrder,
};
