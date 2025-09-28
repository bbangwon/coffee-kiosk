import { BasketItem } from "@/component/BasketItem";
import { Header } from "@/component/Header";

import { SaleItem } from "@/component/SaleItem";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Header />
      <div>
        <img src="/image/ad/ad.png" />
      </div>
      <div className="flex p-2">
        <div className="p-2 bg-gray-200">마실것</div>
        <div className="p-2">디저트</div>
      </div>
      <div className="grid grid-cols-5 p-2 gap-8">
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
        <SaleItem />
      </div>
      <div className="flex p-2">
        <div className="flex flex-col w-full p-2">
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />

          <div className="flex justify-between">
            <div>합계: 0 개</div>
            <div>0 원</div>
          </div>
        </div>

        <div className="bg-red-300 w-56 h-48 flex justify-center items-center text-3xl text-gray-300">
          <div>결재하기</div>
        </div>
      </div>
    </main>
  );
}
