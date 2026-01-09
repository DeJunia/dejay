"use client";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { image } from "@/constant";
import { Spinner } from "@/components/ui/spinner";

export default function RootPage() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="flex-1 min-h-svh w-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <Spinner className="size-6 text-green-500" />
        </div>

        <div className="p-5 flex-col items-center justify-center">
          <p className="text-sm text-center">Dejay Driving School</p>
          <div className="flex flex-row items-center justify-center gap-3">
            <Image
              src={image.logo}
              className="size-8 object-contain rounded-lg"
              alt="keji_logo"
            />
            <p className="font-bold text-center text-2xl mt-2">Dejay</p>
          </div>
        </div>
      </div>
    );
  }

  return redirect("/tabs");
}
