import { useMemo } from "preact/hooks";
import { ProductListingPage } from "$live/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

export default function Filters({ filters }: Props) {
  return (
    <div class="flex flex-col">
      <div class="flex flex-col flex-1">
        {filters.map((filter) => {
          if (filter["@type"] !== "FilterToggle") {
            return null;
          }

          const selectedFacetsQuantity = filter.values.reduce(
            (acc, { selected }) => selected ? acc + 1 : acc,
            0,
          );

          return (
            <details class="flex flex-col w-full">
              <summary class="flex justify-between block cursor-pointer text-[16px] uppercase p-[20px] border-b-1 border-[#dedede]">
                <span class="font-medium mt-2">{filter.label}</span>
                <span>+</span>
              </summary>
              <div
                style={filter.values.length > 7
                  ? { boxShadow: "inset 0 -10px 10px -10px #b2b2b2" }
                  : undefined}
              >
                {filter.values.map((value) => (
                  <div class="flex flex-row p-[20px] border-b-1 border-[#dedede]">
                    <input
                      id={`${filter.key}:${value.value}`}
                      class="mr-2"
                      type="checkbox"
                      checked={value.selected}
                      onInput={() => window.location.href = value.url}
                    />
                    <label
                      for={`${filter.key}:${value.value}`}
                      class="cursor-pointer text-[#9e9e9e] font-semibold"
                    >
                      <span>{value.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
