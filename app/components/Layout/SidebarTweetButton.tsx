"use client";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SidebarTweetButton = () => {
    const router = useRouter();
    return (
        onclick={() => router.push("/tweet")}
        <div className="
        mt-6
        lg:hidden
        round
        hover:bg-slate-800
        hover:bg-opacity-10
        cursor-pointer
        transition
        "
        >
            <FaFeather size={24} color="white" />
            <p className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
                Tweet
            </p>

        </div> 
      );
}
 
export default SidebarTweetButton ;