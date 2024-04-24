"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Upload adapter integrated on SSR and CSR for Next.JS.
        </p>
        <div className="fixed bottom-0 hover:rotate-180 ease-in-out transition-all left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/logo.svg"
            alt="arg0WAK Logo"
            className="dark:invert"
            width={50}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="text-black">
        <Editor
          value="Click ImageUpload button and enjoy it! </br/></br/>
          <i>If you don't want to, you can remove or edit sharp's automatic conversion feature via pipeline.</i>
          Check <b>/service/backend/api/upload/route.jsx for this.</b>"
          width={100}
        />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <p>
          This adapter performs buffered loading with pipeline. It can also be
          used directly for TinyMCE.{" "}
          <span className="italic text-xs mt-2">
            (Compabilitied with Sharp.)
          </span>
        </p>

        <Link
          className="ms-auto mt-auto opacity-[.5] select-none"
          target="_blank"
          href="https://github.com/arg0WAK"
        >
          <code>Powered by arg0WAK</code>
        </Link>
      </div>
    </main>
  );
}
