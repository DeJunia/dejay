"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import apiService from "../services/apiService";
import { User } from "../types/userTypes";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  signOut: () => Promise<void>;
  loadUser: () => Promise<void>;
  appInitialized: () => Promise<void>;
  isLoading: boolean;
  isInitialized: boolean | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState<boolean | null>(null);
  useEffect(() => {
    const value = localStorage.getItem("initialized");
    setIsInitialized(value === "true");
  }, []);

  const appInitialized = async () => {
    localStorage.setItem("initialized", "true");
    setIsInitialized(true);
  };

  useEffect(() => {
    const loadAuthData = async () => {
      setIsLoading(true);
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
          await loadUser();
        } else {
          console.log("No token found in localStorage.");
        }
      } catch (err) {
        console.error("Error loading auth data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadAuthData();
  }, []);

  const loadUser = async () => {
    try {
      console.log("Fetching user...");
      const userData = await apiService.getCurrentUser();
      if (userData) {
        setUser(userData);
        console.log("User data:", userData);
      } else {
        console.log("No user found.");
      }
    } catch (err) {
      console.error("Error loading user data:", err);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await apiService.signOut();
      setUser(null);
      setToken(null);
      router.push("/home");
    } catch (err) {
      console.error("Error signing out:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        signOut,
        loadUser,
        appInitialized,
        isLoading,
        isInitialized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
