import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

export type Props = {
  imgSrc: { mobile: LiveImage; desktop: LiveImage };
  alt?: string;
  text?: string;
  title?: string;
  subtitle?: string;
  link?: string;
  CTA?: string;
};

export default function Banner(
  { imgSrc, alt, text, title, subtitle, link, CTA }: Props,
) {
  return (
    <section class="w-full max-w-[1440px] m-auto mb-8">
      <div class="relative">
        <Picture class="inset-0" preload>
          <Source
            media="(max-width: 767px)"
            src={imgSrc.mobile}
            width={414}
            height={621}
            fetchPriority="high"
          />
          <Source
            media="(min-width: 768px)"
            src={imgSrc.desktop}
            width={1920}
            height={726}
            fetchPriority="high"
          />
          <img
            class="object-cover pb-5 w-full"
            src={imgSrc.mobile}
            alt={alt}
            loading="eager"
          />
        </Picture>

        <div class="absolute inset-0 md:flex md:flex-col md:items-start md:justify-center text-white m-[4vh] m-auto md:m-0 md:w-[50vw] md:px-[40px]">
          <a
            href=""
            class="md:flex md:flex-col md:items-start md:justify-center w-[37.68vw] md:w-[17vw] lg:w-auto"
          >
            <h2 class="mb-4 font-bold text-center md:text-left text-[30px] leading-8 md:text-[40px] tracking-wider ">
              {title}
            </h2>
            <div class="text-[18px] md:text-sm md:pt-2.5 text-center md:text-left mb-2.5">
              <span>{subtitle}</span>
            </div>
            <div class="text-[16px] md:text-sm text-center md:text-left">
              <span>{text}</span>
            </div>
          </a>
          <div class="flex justify-center md:justify-items-start mt-3 md:mt-5 text-[10px] md:text-xs">
            <a
              href={link}
              class="uppercase md:pb-2.5 pb-1.5 border-b border-[#4d5b31] md:border-[#f2e9d8] hover:pb-0 transition-all duration-150 ease"
            >
              {CTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
