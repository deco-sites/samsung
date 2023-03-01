import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

import Button from "$components/ui/Button.tsx";

export interface Banner {
  src: LiveImage;
  alt: string;
  href: string;
  title: string;
  text: string;
  cta: string;
}

export interface Props {
  images: Banner[];
  title: string;
}

export default function BannnerGrid({
  images = [],
  title,
}: Props) {
  return (
    <section class="max-w-[1440px] w-full px-4 md:px-8 mx-auto">
      <div class="py-2 md:py-0 md:pb-[40px] flex items-center justify-center mt-6">
        <h2 class={"text-center font-bold mb-8 text-[28px] md:text-[38px]"}>{title}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 text-center">
        {images.map(({ href, src, alt, title, text, cta }) => (
          <a href={href} class="flex flex-col justify-center items-center">
            <Picture class="inset-0" preload>
              <Source
                media="(max-width: 767px)"
                src={src}
                width={456}
                height={325}
                fetchPriority="high"
              />
              <Source
                media="(min-width: 768px)"
                src={src}
                width={680}
                height={485}
                fetchPriority="high"
              />
              <img
                class="object-cover w-full rounded-[20px]"
                src={src}
                alt={alt}
                loading="eager"
              />
            </Picture>

            <h3 class="text-[20px] font-bold mb-2 mt-2">{title}</h3>
            <p class="max-w-[350px] text-[14px] min-h-[80px]">{text}</p>
            <Button>{cta}</Button>
          </a>
        ))}
      </div>
    </section>
  );
}
