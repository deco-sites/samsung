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
  faviconUrl: "/faviconsamsung.ico",
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
        <link rel="stylesheet" href={asset(styleUrl)} media="print" onLoad="this.media='all'"></link>
      ))}

<style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: SamsungOne;
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url(/fonts/SamsungOne-400.woff2)
        }
        @font-face {
            font-family: SamsungOne;
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: url(/fonts/SamsungOne-700.woff2)
        }
        
      `,
        }}
      >
      </style>
    </Head>
  );
}
