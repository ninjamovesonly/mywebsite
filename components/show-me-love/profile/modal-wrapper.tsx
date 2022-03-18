import type { AppProps } from "next/app";

export default function ModalWrapper({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
