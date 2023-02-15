import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

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
            <Image
              width={280}
              height={200}
              src={src}
              alt={alt}
              decoding="async"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 30vw"
              class="w-full rounded-[20px] mb-2"
            />
            <h3 class="text-[20px] font-bold mb-2">{title}</h3>
            <p class="max-w-[350px] text-[14px] min-h-[80px]">{text}</p>
            <Button>{cta}</Button>
          </a>
        ))}
      </div>
    </section>
  );
}
