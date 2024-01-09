import { Button } from "@/components/ui/button";
import Link from "next/link";



export const siteConfig = {
  name: "0X Profiles",
  description: "",
  ogImage: "",
  url: "",
}
export default function Home() {
  return (
    <div className=" relative h-screen w-full flex justify-center items-center">
      <div className="h-fit w-1/2 p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-medium">Welcome to 0x Profiles</h1>
        <h3 className="mt-2 mb-2 text-lg text-center ">
        Create a Profile to showcase all your social media profiles in one place.
        </h3>


        <Button variant={"custom"}>
          <Link
            href={"/createLink"}
            className="h-fit w-fit decoration-transparent"
          >
            Create your Profile
          </Link>
        </Button>
      </div>
    </div>
  );
}
