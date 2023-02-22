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

export default function ProductCardGalery({
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
      class="w-full flex p-4 mb-5 bg-white"
    >
        <div id="image" class="max-w-[150px] p-2.5">
        {img && img.url && (
            <Picture>
                {/* 2:3 aspect-ratio*/}
                <Source
                media="(max-width: 639px)"
                src={img.url}
                width={143}
                height={91}
                />
                <Source
                media="(min-width: 640px)"
                src={img.url}
                width={143}
                height={143}
                />
                <Image
                class="w-full max-w-full h-auto"
                src={img.url}
                alt={img.alternateName}
                width={143}
                height={143}
                loading="lazy"
                decoding="async"
                />
            </Picture>
        )}
      </div>
        <div>
            <div>
                <a href={url}>
                    {name && (
                        <div
                        class="block text-left mb-3 font-bold"
                        style={{ textOverflow: "ellipsis" }}
                        href={url}
                        >
                        {nameOfProduct.replace(/(.*)(\-).*$/, "$1$2")}
                        </div>
                    )}
                </a>
                <a href={url} class="underline hover:text-[#0071c5]">
                    <p>Saiba mais</p>
                </a>    
            </div>
        </div>
    </div>
  );
}
