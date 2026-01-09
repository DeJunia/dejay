import api from "./api";
import { userRes, RegistrationData, User } from "@/types/userTypes";

const apiService = {
  login: async (userData: {
    email: string;
    password: string;
  }): Promise<userRes> => {
    try {
      const response = await api.post("auth/login", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (user: RegistrationData): Promise<userRes> => {
    try {
      const response = await api.post("auth/signup", user);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  signOut: async (): Promise<void> => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      console.log("Loading user...");
      const res = await api.get("users/me");
      console.log(res.data);
      return res.data.user || null;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  },
};

export default apiService;
