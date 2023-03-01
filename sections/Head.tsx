import { asset, Head } from "$fresh/runtime.ts";

export interface Props {
  title?: string;
  description?: string;
  url: string;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

export const initialProps: Props = {
  title: "Fashion | 70% Off",
  description: "70% Off",
  url: "https://fashion.deco.page",
  imageUrl: "https://fashion.deco.page/android-chrome-384x384.png?v=1",
  faviconUrl: "https://fashion.deco.page/favicon-32x32.png?v=1",
  styleUrls: [],
  themeColor: "#221E1F",
};

export default function HeadComponent(props: Props) {
  let {
    title,
    description,
    url,
    imageUrl,
    faviconUrl,
    styleUrls,
    themeColor,
  } = props?.title ? props : initialProps;
  if (!imageUrl) {
    imageUrl = initialProps.imageUrl;
  }
  if (!faviconUrl) {
    faviconUrl = initialProps.faviconUrl;
  }
  return (
    <Head>
      {
        title != " " && <title>{title}</title>
      }
      
      <meta name="theme-color" content={themeColor}></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <link rel="shortcut icon" href={faviconUrl} type="image/x-icon"></link>

      <link rel="manifest" href="/site.webmanifest"></link>

      <meta name="theme-color" content="#221E1F"></meta>
      <meta name="msapplication-TileColor" content="#221E1F"></meta>
      {styleUrls?.map((styleUrl: string) => (
        <link rel="stylesheet" href={asset(styleUrl)}></link>
      ))}

<style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: SamsungOne;
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-400___6d3e20551338d043a1bee670df8e7406.woff2),url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-400___d6736f5c1706226ea7631028edab6a8e.woff),url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-400___c6b0ffc5071f7f2604895d469533b097.ttf)
        }
        @font-face {
            font-family: SamsungOne;
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-700___d4d24334ce273547d7065a226338b0c0.woff2),url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-700___0b6a93dd43391de7a858ac1ac173b2b1.woff),url(https://samsungbr.vtexassets.com/assets/vtex/assets-builder/samsungbr.store-front/1.3.0-beta.4/fonts/SamsungOne-700___ebc5248764129cad0ef43293728df3bd.ttf)
        }
        
      `,
        }}
      >
      </style>
    </Head>
  );
}
