import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amirhosein Arabhaji — Backend Software Engineer",
    short_name: "Amirhosein Arabhaji",
    description:
      "Personal site of Amirhosein Arabhaji, a backend software engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#bd4520",
    icons: [
      {
        src: "/avatar.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
