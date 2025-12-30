import localFont from "next/font/local";

export const monaSans = localFont({
  src: [
    {
      path: "../../public/fonts/mona-sans/Mona-Sans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/mona-sans/Mona-Sans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-mona",
});
