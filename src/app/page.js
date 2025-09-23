import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <div className="w-16">
        <img src="/image/logo.png" />
      </div>
      <div>
        <img src="/image/coffee-and-cake.png" />
      </div>
      <div className="p-4">
        <a href="/drink" className="bg-red-300 p-6 flex justify-center">
          주문하기
        </a>
      </div>
    </main>
  );
}
