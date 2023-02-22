import { useRef } from "preact/hooks";
import Filters from "$components/search/Filters.tsx";
import SortSelector from "$components/search/SortSelector.tsx";
import Modal from "$components/ui/Modal.tsx";
import type { ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/std/types.ts";
import HeadingSearch from "$components/HeadingSearch.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function SearchControls({ page }: Props) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  // TODO: Standardize max-width (1400px)
  return (
    <div class="w-full bg-[#f7f7f7]">
      <div class="md:flex flex-col justify-center hidden bg-white">
        <div class="max-w-[1440px] m-auto">
          <HeadingSearch />
        </div>
      </div>
      <div class="justify-around md:justify-between items-center px-2 py-4 max-w-[1440px] m-auto flex-1">
        <div class="flex justify-between w-full">
          <h2 class="hidden md:block uppercase font-medium text-[16px] self-end pl-5">Filtros</h2>
          <div class="block md:hidden self-center uppercase text-[18px]">
            <button
              onClick={() => modalRef.current!.showModal()}
              type="button"
              class="inline-flex items-center px-4 py-2 font-medium rounded-md shadow-sm text-black"
            >
              Filtros
            </button>
          </div>
          <div class="flex flex-row justify-end">
            <SortSelector />
          </div>
        </div>
      </div>
      <Modal
        title="Selecione os filtros"
        mode="sidebar-left"
        ref={modalRef}
        onClose={() => modalRef.current?.close()}
      >
        <Filters filters={filters} />
      </Modal>
    </div>
  );
}

export default SearchControls;
