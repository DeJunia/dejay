"use client";
import { Input, CheckboxGroup } from "@/components/ui/FormField";
import { reactIcons } from "@/constant";
import useSignUp from "@/hooks/useSignUp";
import { Button } from "@/components/ui/Button";
import { image } from "@/constant";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { loading, handleChange, handleSubmit, form } = useSignUp();

  const [error, setError] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Name validation
    if (!form.surname) {
      newErrors.surname = "First name is required";
    }

    if (!form.othernames) {
      newErrors.othernames = "Last name is required";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="w-full min-h-svh flex flex-row items-center justify-center p-5">
      <div className="flex-1 h-full">
        <form
          className="mx-auto max-w-lg md:px-5 md:rounded-2xl py-5 bg-white md:shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            if (validateForm()) {
              handleSubmit();
            }
          }}
        >
          <div className="flex items-center justify-center">
            <Image
              src={image.logo}
              alt="keji_logo"
              className="w-20 h-20 object-contain rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center justify-end px-2 mt-5 gap-2">
            <p className="font-bold text-3xl">Register</p>
            <div className="w-full justify-center items-center flex flex-col">
              <p className="text-gray-600  font-bold text-base text-center">
                Dejay
              </p>
              <p className="text-gray-600  text-sm text-center">
                Driving School
              </p>
            </div>
          </div>
          <div className="mt-2 mb-3">
            <Input
              value={form.surname}
              handleChangeText={(e) => {
                handleChange("surname", e.target.value);
              }}
              title="First Name"
              placeholder="First Name"
              type="text"
              max={100}
              isError={error && error.surname ? true : false}
            />
            {error && error.surname && (
              <p className="text-xs text-red-500 ml-3 mt-2">{error.surname}</p>
            )}
          </div>
          <div className="mt-2 mb-3">
            <Input
              value={form.othernames}
              handleChangeText={(e) => {
                handleChange("othernames", e.target.value);
              }}
              title="Last Name"
              placeholder="Last Name"
              type="text"
              max={100}
              isError={error && error.othernames ? true : false}
            />
            {error && error.othernames && (
              <p className="text-xs text-red-500 ml-3 mt-2">
                {error.othernames}
              </p>
            )}
          </div>
          <div className="mt-2 mb-3">
            <Input
              value={form.email}
              handleChangeText={(e) => {
                handleChange("email", e.target.value);
              }}
              title="Email"
              placeholder="Email"
              type="email"
              max={100}
              isError={error && error.email ? true : false}
            />
            {error && error.email && (
              <p className="text-xs text-red-500 ml-3 mt-2">{error.email}</p>
            )}
          </div>
          <div className="mb-3">
            <Input
              value={form.password}
              handleChangeText={(e) => {
                handleChange("password", e.target.value);
              }}
              title="Password"
              placeholder="Password"
              type="password"
              isError={error && error.password ? true : false}
              max={50}
            />
            {error && error.password && (
              <p className="text-xs text-red-500 ml-3 mt-2">{error.password}</p>
            )}
          </div>

          <div className="mb-3">
            <p className="text-gray-800 ml-4 text-sm mb-2">Gender</p>
            <div className="px-5">
              <CheckboxGroup
                options={["male", "female", "others"]}
                value={form.gender}
                onChange={(value) => handleChange("gender", value as string)}
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <Button
              onClick={() => {
                if (validateForm()) {
                  handleSubmit();
                }
              }}
              text="Register"
              style="w-full bg-green-500 px-5 py-2 text-sm text-white rounded-lg font-inter font-semibold flex items-center justify-center"
              loading={loading}
            />
          </div>
          <div className="flex flex-row mt-6 gap-3">
            <p className="text-sm">Already have an account?</p>
            <div
              onClick={() => router.push("/auth/login")}
              className="cursor-pointer"
            >
              <p className="text-sm text-green-500 font-bold underline">
                Sign In
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
