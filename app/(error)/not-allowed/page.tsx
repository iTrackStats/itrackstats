import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1>Oops... You&apos;re not supposed to be here!</h1>
        <Link
          className="w-fit rounded-full bg-white p-2 text-black hover:underline"
          href={"/"}
        >
          Click here to return
        </Link>
      </div>
    </>
  );
};

export default page;
