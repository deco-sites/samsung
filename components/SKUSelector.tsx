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

  return (
    <div class="flex flex-col justify-between py-2 md:w-1/4">
      {Object.keys(possibilities).map((name) => (
        <div class="flex flex-col gap-4">
          <label class="font-semibold text-[22px]" for={name}>{name}</label>
          <select id={name} {...onChange}>
            {Object.entries(possibilities[name]).map(([url, value]) => {
              return (
                <option key={url} value={url} selected={url === currentUrl}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      ))}
    </div>
  );
}
