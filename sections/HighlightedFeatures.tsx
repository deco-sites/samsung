import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

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
    <section class="max-w-[1440px] m-auto flex flex-row overflow-auto py-8 justify-between items-center mt-[-54px]">
      {features.map(({ src, title, link }) => (
        <a href={link} key={title} class="p-6 flex flex-col items-center">
          <Picture class="inset-0">
              <Source
                src={src}
                width={456}
                height={325}
                fetchPriority="low"
              />
              <img
                class="object-cover w-full rounded-[20px]"
                src={src}
                alt={title}
                loading="lazy"
                decoding="async"
              />
            </Picture>
          <span class="font-bold uppercase text-center mt-3">{title}</span>
        </a>
      ))}
    </section>
  );
}
