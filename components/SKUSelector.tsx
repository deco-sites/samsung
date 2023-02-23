import type { Product } from "$live/std/commerce/types.ts";

interface Props {
  product: Product;
}

interface properties {
  property?: property[]
}

interface property{
  name?: string;
  values?: string[];
}

// Navigates the user the the choosen sku
const onChange = {
  onchange: "(function(e){  window.location.href = e.target.value; })(event)",
};

export default function SKUSelector(
  { product: { isVariantOf, url: currentUrl } }: Props,
) {

  const allProperties = (isVariantOf?.hasVariant ?? [])
    .flatMap(({ additionalProperty = [], url }) =>
      additionalProperty.map((property) => ({ property, url }))
    );

  const possibilities = allProperties.reduce((acc, { property, url }) => {
    const { name = "", value = "" } = property;

    if (url) {
      acc[name] = {
        ...acc[name],
        [url]: value,
      };
    }

    return acc;
  }, {} as Record<string, Record<string, string>>);

  const selected = allProperties?.map(possibility => {
    console.log(possibility)
  })

  return (
    <div class="flex flex-col justify-between py-2">
      {Object.keys(possibilities).map((name) => (
        <div class="flex flex-col gap-4">
          <label class="font-semibold text-[22px]" for={name}>{name}</label>
          <div class="flex flex-wrap" id={name} {...onChange}>
            {Object.entries(possibilities[name]).map(([url, value]) => {
              return (
                <a key={url} class={`block w-[40%] p-4 text-[14px] rounded-[6px] m-2.5 ${url == currentUrl ? "border-2 border-blue-500" : "shadow-inset"}`} href={url} selected={url === currentUrl}>
                  {value}
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
