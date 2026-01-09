"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/types/userTypes";
import apiService from "@/services/apiService";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ErrorResponse } from "@/types/type";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const { setUser, setToken } = useAuth();
  const router = useRouter();

  // ✅ Handle form field changes
  const handleChange = (field: keyof typeof form, value: string) => {
    if (field === "password" || field === "email") {
      setForm((prevForm) => ({ ...prevForm, [field]: value }));
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!form.email || !form.password) {
        toast.error("Please fill in all fields.");
        return;
      }

      const response = await apiService.login({
        email: form.email,
        password: form.password,
      });

      if (!response) {
        toast.error("Sign-up failed. Please try again.");
        return;
      }

      const user = response.user as User;
      const token = response.token as string;

      // ✅ Store token in browser localStorage
      localStorage.setItem("token", token);
      setToken(token);
      setUser(user);

      toast.success("Sign-up successful!");

      // ✅ Redirect based on profile completion
      //   if (!user?.profile || !user.profile?.username) {
      //     router.replace("/auth/authprofile");
      //   } else {
      //     router.push("/tabs");
      //   }

      router.replace("/tabs");
    } catch (error) {
      console.error("Sign-in Error:", error);
      const message =
        (error as AxiosError<ErrorResponse>)?.response?.data?.message ||
        "Error signing in. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, form, handleChange, handleSubmit };
};

export default useSignUp;
