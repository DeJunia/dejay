"use client";

import { Input } from "@/components/ui/FormField";
import useSignIn from "@/hooks/useSignIn";
import { Button } from "@/components/ui/Button";
import { image } from "@/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { loading, handleChange, handleSubmit, form } = useSignIn();

  const router = useRouter();

  return (
    <div className="w-full min-h-svh flex flex-row items-center justify-center">
      <div className="flex-1 h-full p-5">
        <form
          className="mx-auto max-w-lg md:px-5 md:rounded-2xl py-5 bg-white md:shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
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
            <p className="font-bold text-3xl">Welcome Back</p>
            <div className="w-full justify-center items-center flex flex-col">
              <p className="text-gray-600  font-bold text-base text-center">
                Dejay
              </p>
              <p className="text-gray-600  text-sm text-center">
                Driving School
              </p>
            </div>
          </div>
          <div className="mt-2 mb-5">
            <Input
              value={form.email}
              handleChangeText={(e) => {
                handleChange("email", e.target.value);
              }}
              title="Email"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mb-5">
            <Input
              value={form.password}
              handleChangeText={(e) => {
                handleChange("password", e.target.value);
              }}
              title="Password"
              placeholder="Password"
              type="password"
            />
          </div>

          <div className="w-full mt-5">
            <Button
              onClick={handleSubmit}
              text="Log In"
              style="w-full bg-green-500 px-5 py-2 text-sm text-white rounded-lg font-inter font-semibold flex items-center justify-center"
              loading={loading}
            />
          </div>
          <div className="flex flex-row px-5 mt-6 gap-3">
            <p className="text-sm">Don&apos;t have an account?</p>
            <div
              onClick={() => router.push("/auth/signup")}
              className="cursor-pointer"
            >
              <p className="text-sm text-primary font-bold underline">
                Sign Up
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
