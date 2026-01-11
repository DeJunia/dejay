"use client";

import axios, { AxiosInstance } from "axios";

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// ✅ Ensure production URL starts with https:// 192.168.133.253 // 192.168.1.156
const BASE_URL =
  mode === "development"
    ? "http://192.168.217.253:5050/api/v1/"
    : `https://${apiUrl}`;

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
