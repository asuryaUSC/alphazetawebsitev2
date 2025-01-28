import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
  <Analytics />

}
