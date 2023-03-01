import { Product } from "$live/std/commerce/types.ts";
import AddToCart from "../islands/AddToCart.tsx";
import Image from "$live/std/ui/components/Image.tsx";
import {
  bestInstallment,
  installmentToString,
} from "../sections/ProductDetails.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

interface Image {
  src: string;
  alt?: string;
  label?: string;
}

export default function ProductCard({
  url,
  productID,
  name,
  image,
  offers,
  isVariantOf
}: Product) {
  const img = image?.[0];
  const offer = offers?.offers[0];
  const seller = offer?.seller;
  const listPrice = offer?.priceSpecification.find((spec) =>
    spec.priceType === "https://schema.org/ListPrice"
  );
  const price = offer?.price;
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);

  let nameOfProduct = ""

  if(isVariantOf){
    nameOfProduct = isVariantOf?.name! + " " + name
  }

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full px-2 py-6 mb-5 bg-white rounded-[20px]"
    >
      <a href={url} class="block w-full">
        {name && (
            <h3
              class="block overflow-hidden mb-3 text-center font-bold"
              style={{ textOverflow: "ellipsis" }}
              href={url}
            >
              {nameOfProduct.replace(/(.*)(\-).*$/, "$1$2")}
            </h3>
          )}
        {img && img.url && (
          <Picture>
            {/* 2:3 aspect-ratio*/}
            <Source
              media="(max-width: 639px)"
              src={img.url}
              width={180}
              height={180}
              fetchPriority="low"
            />
            <Source
              media="(min-width: 640px)"
              src={img.url}
              width={180}
              height={180}
              fetchPriority="low"
            />
            <Image
              class="w-full max-w-full h-auto"
              src={img.url}
              alt={img.alternateName}
              width={180}
              height={180}
              loading="lazy"
              decoding="async"
            />
          </Picture>
        )}
        <div class="mt-3 text-center">
          <div class="text-[18px] flex justify-center gap-2 mb-1">
            {price && (
              <span class="font-bold">
                R$ {typeof price === "number" ? price.toFixed(2) : price}
              </span>
            )}
          </div>
          {installment && price && (
            <div class="text-xs font-bold text-gray-500">
              ou {installmentToString(installment, price)}
            </div>
          )}
        </div>
      </a>
      {seller && (
        <div class="mt-2 flex justify-center">
          <AddToCart
            class="w-full text-white text-xs uppercase py-2 cursor-pointer"
            skuId={productID}
            sellerId={seller}
          />
        </div>
      )}
    </div>
  );
}
