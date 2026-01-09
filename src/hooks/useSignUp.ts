"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { User, RegistrationData } from "@/types/userTypes";
import apiService from "@/services/apiService";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ErrorResponse } from "@/types/type";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<RegistrationData>({
    email: "",
    password: "",
    gender: "male",
    othernames: "",
    surname: "",
  });

  const { setUser, setToken } = useAuth();
  const router = useRouter();

  // ✅ Handle form field changes
  const handleChange = (field: keyof RegistrationData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!form.email || !form.password) {
        toast.error("Please fill in all fields.");
        return;
      }

      const response = await apiService.register({
        email: form.email,
        password: form.password,
        gender: form.gender,
        othernames: form.othernames,
        surname: form.surname,
      });

      if (!response) {
        toast.error("Sign-in failed. Please try again.");
        return;
      }

      const user = response.user as User;
      const token = response.token as string;

      // ✅ Store token in browser localStorage
      localStorage.setItem("token", token);
      setToken(token);
      setUser(user);

      // ✅ Redirect based on profile completion
      //   if (!user?.profile || !user.profile?.username) {
      //     router.replace("/auth/authprofile");
      //     return;
      //   }

      toast.success("Sign-in successful!");
      router.push("/tabs");
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

  return {
    form,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useSignIn;
