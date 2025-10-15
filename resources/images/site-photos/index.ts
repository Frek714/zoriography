import type { StaticImageData } from "next/image";

import photo1 from "@/resources/images/site-photos/photo1.webp";
import photo2 from "@/resources/images/site-photos/photo2.webp";
import photo3 from "@/resources/images/site-photos/photo3.webp";
import photo4 from "@/resources/images/site-photos/photo4.webp";
import photo5 from "@/resources/images/site-photos/photo5.webp";
import photo6 from "@/resources/images/site-photos/photo6.webp";
import photo7 from "@/resources/images/site-photos/photo7.webp";
import photo8 from "@/resources/images/site-photos/photo8.webp";
import photo9 from "@/resources/images/site-photos/photo9.webp";
import photo10 from "@/resources/images/site-photos/photo10.webp";
import photo11 from "@/resources/images/site-photos/photo11.webp";
import photo12 from "@/resources/images/site-photos/photo12.webp";
import photo13 from "@/resources/images/site-photos/photo13.webp";
import photo14 from "@/resources/images/site-photos/photo14.webp";
import photo15 from "@/resources/images/site-photos/photo15.webp";
import photo16 from "@/resources/images/site-photos/photo16.webp";
import photo17 from "@/resources/images/site-photos/photo17.webp";
import photo18 from "@/resources/images/site-photos/photo18.webp";
import photo19 from "@/resources/images/site-photos/photo19.webp";
import photo20 from "@/resources/images/site-photos/photo20.webp";
import photo21 from "@/resources/images/site-photos/photo21.webp";
import photo22 from "@/resources/images/site-photos/photo22.webp";
import photo23 from "@/resources/images/site-photos/photo23.webp";
import photo24 from "@/resources/images/site-photos/photo24.webp";
import photo25 from "@/resources/images/site-photos/photo25.webp";
import photo26 from "@/resources/images/site-photos/photo26.webp";
import photo27 from "@/resources/images/site-photos/photo27.webp";
import photo28 from "@/resources/images/site-photos/photo28.webp";
import photo29 from "@/resources/images/site-photos/photo29.webp";
import photo30 from "@/resources/images/site-photos/photo30.webp";
import photo31 from "@/resources/images/site-photos/photo31.webp";
import photo32 from "@/resources/images/site-photos/photo32.webp";
import photo33 from "@/resources/images/site-photos/photo33.webp";
import photo34 from "@/resources/images/site-photos/photo34.webp";
import photo35 from "@/resources/images/site-photos/photo35.webp";
import photo36 from "@/resources/images/site-photos/photo36.webp";
import photo37 from "@/resources/images/site-photos/photo37.webp";
import photo38 from "@/resources/images/site-photos/photo38.webp";
import photo39 from "@/resources/images/site-photos/photo39.webp";
import photo40 from "@/resources/images/site-photos/photo40.webp";
import photo41 from "@/resources/images/site-photos/photo41.webp";
import photo42 from "@/resources/images/site-photos/photo42.webp";
import photo43 from "@/resources/images/site-photos/photo43.webp";
import photo44 from "@/resources/images/site-photos/photo44.webp";
import photo45 from "@/resources/images/site-photos/photo45.webp";
import photo46 from "@/resources/images/site-photos/photo46.webp";
import photo47 from "@/resources/images/site-photos/photo47.webp";
import photo48 from "@/resources/images/site-photos/photo48.webp";
import photo49 from "@/resources/images/site-photos/photo49.webp";
import photo50 from "@/resources/images/site-photos/photo50.webp";
import photo51 from "@/resources/images/site-photos/photo51.webp";
import photo52 from "@/resources/images/site-photos/photo52.webp";
import photo53 from "@/resources/images/site-photos/photo53.webp";
import photo54 from "@/resources/images/site-photos/photo54.webp";
import photo55 from "@/resources/images/site-photos/photo55.webp";
import photo56 from "@/resources/images/site-photos/photo56.webp";
import photo57 from "@/resources/images/site-photos/photo57.webp";
import photo58 from "@/resources/images/site-photos/photo58.webp";
import photo59 from "@/resources/images/site-photos/photo59.webp";
import photo60 from "@/resources/images/site-photos/photo60.webp";
import photo61 from "@/resources/images/site-photos/photo61.webp";
import photo62 from "@/resources/images/site-photos/photo62.webp";
import photo63 from "@/resources/images/site-photos/photo63.webp";

export type SitePhoto = {
  id: string;
  image: StaticImageData;
  title: string;
  alt: string;
};

const rawPhotos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo40,
  photo41,
  photo42,
  photo43,
  photo44,
  photo45,
  photo46,
  photo47,
  photo48,
  photo49,
  photo50,
  photo51,
  photo52,
  photo53,
  photo54,
  photo55,
  photo56,
  photo57,
  photo58,
  photo59,
  photo60,
  photo61,
  photo62,
  photo63,
] as const;

export const sitePhotos: SitePhoto[] = rawPhotos.map((image, index) => {
  const id = `photo${index + 1}`;
  const title = `Scatto ${index + 1}`;

  return {
    id,
    image,
    title,
    alt: `Scatto personale numero ${index + 1}`,
  };
});

export const SITE_MAIN_PHOTO_ID = "photo11";

