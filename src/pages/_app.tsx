import { type AppType } from "next/app";

import { api } from "t3-starter-app/utils/api";

import "t3-starter-app/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ClerkProvider {...pageProps}>
    <Component {...pageProps} />
  </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
