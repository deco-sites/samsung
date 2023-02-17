import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Feature {
  src: LiveImage;
  link: string;
  title: string;
}

export interface Props {
  features: Feature[];
}

export default function HighlightedFeatures(
  { features }: Props,
) {
  return (
    <section class="max-w-[1440px] m-auto flex flex-row flex-wrap py-8 justify-between items-center mt-[-54px]">
      {features.map(({ src, title, link }) => (
        <a href={link} key={title} class="p-6 flex flex-col items-center">
          <Image
            sizes="(min-width: 59px) 59px, 100vw"
            data-main-image=""
            style="object-fit:cover;opacity:1"
            width={100}
            height={100}
            src={src}
            alt={title}
            class=""
            decoding="async"
            loading="lazy"
          />
          <span class="font-bold uppercase text-center mt-3">{title}</span>
        </a>
      ))}
    </section>
  );
}
