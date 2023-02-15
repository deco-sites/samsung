import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <section class="max-w-[1440px] w-full p-6 md:p-0 md:pt-6 mx-auto bg-[#f7f7f7] mt-[-54px]">
      {title && <h2 class="text-center font-bold mb-8 text-lg md:text-[38px]">{title}</h2>}
      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
