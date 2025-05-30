"use client";
import { BsX } from "react-icons/bs";
import { useRouter } from "next/navigation";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="
        relative rounded-full w-14 h-14 flex items-center justify-center p-4 hover:bg-slate-800 hover:bg-opacity-10 cursor-pointer transition lg-hidden
        "
    >
      <BsX size={28} color="white" className="text-white" />
    </div>
  );
};

export default SidebarLogo;
