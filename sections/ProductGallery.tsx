import { useRef } from "preact/hooks";

import type { LoaderReturnType } from "$live/std/types.ts";
import type { ProductListingPage } from "$live/std/commerce/types.ts";

import SortSelector from "$components/search/SortSelector.tsx";
import ProductCardGalery from "$components/ProductCardGalery.tsx";

import Filters from "../islands/Filters.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

export default function ProductGallery({ page }: Props) {
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  return (
    <section class="w-full bg-[#f7f7f7]">
      <div class="flex md:mx-auto px-2 max-w-[1440px] m-auto">
        <div class="hidden md:block w-[20%] bg-white mr-[20px] h-[min-content]">
          <Filters filters={filters} />
        </div>
        <div class="relative w-full md:w-[80%]">
          {page?.products?.map((product) => (
            <div class="w-full list-none">
              <ProductCardGalery {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
