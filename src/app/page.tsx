"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, startTransition, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [value, setValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    router.push(`/users/${value}`);
  };

  return (
    <main className="mx-auto container h-screen">
      <div className="h-full flex items-center justify-center flex-col gap-8">
        <h1 className="text-4xl md:text-7xl">gitstats</h1>
        <form method="post" onSubmit={handleSubmit} className="w-full px-4">
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setValue(e.target.value)}
            className="bg-zinc-800 md:text-2xl w-full text-center rounded-md md:py-4"
            placeholder="github username e.g. prateeksonii"
          />
          <input type="hidden" />
        </form>
      </div>
    </main>
  );
}
