import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[calc(100dvh-70px)] relative">
        <Image
          src="/hero.jpg"
          alt=""
          width={1000}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-10"></div>
      </div>
    </main>
  );
}
