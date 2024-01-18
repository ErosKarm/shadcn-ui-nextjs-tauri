import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex flex-col">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <span className="text-3xl"> + </span>

      <span>shadcn/ui & TailwindCSS & Tauri</span>
    </div>
  );
}
