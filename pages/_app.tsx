import React, { useState } from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

import { IntlProvider } from "react-intl";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import ThemeContextProvider from "contexts/ThemeContext";
import { getLocale, getMessages } from "i18n";
import { initFirebase } from "platform/initFirebase";
import ThemeProvider from "theme/Provider";
import { initAnalytics } from "../platform/analytics";

const loadSideEffects = () => {
  // firebase initialization
  if (typeof window !== undefined) {
    initFirebase()
      .then(() => {
        initAnalytics();
      })
      .catch((e) => {
        console.warn(e);
      });
  }
};

const queryCache = new QueryCache();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: true,
      // refetchOnMount: false,
      keepPreviousData: true,
      staleTime: Infinity,
    },
  },
  queryCache,
});

class MyApp extends App<{
  locale: string;
  messages: any;
  router: Router;
}> {
  static async getStaticProps({
    Component,
    ctx,
  }: {
    Component: any;
    ctx: any;
  }): Promise<{
    pageProps: any;
    locale: string;
    messages: any;
  }> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const locale = (await getLocale(ctx)) || "en";
    const messages = await getMessages(locale);
    return {
      pageProps,
      locale,
      messages,
    };
  }

  static async getInitialProps(context: AppContext): Promise<any> {
    const fullProps = await App.getInitialProps(context);
    return fullProps;
  }

  componentDidMount(): void {
    loadSideEffects();
  }

  render() {
    const {
      Component,
      pageProps: { session, ...pageProps },
      locale,
      messages,
    } = this.props;

    return (
      <>
        <Head>
          <title>Sample Project</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeContextProvider>
          <ThemeProvider>
            <IntlProvider locale={locale || "en"} messages={messages}>
              <SessionProvider session={session}>
                {/* <AuthContextProvider> */}
                <QueryClientProvider client={queryClient}>
                  <SnackbarProvider
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <Hydrate state={pageProps.dehydratedState}>
                      <Component {...pageProps} />
                    </Hydrate>
                  </SnackbarProvider>
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
                {/* <AuthContextProvider> */}
              </SessionProvider>
            </IntlProvider>
          </ThemeProvider>
        </ThemeContextProvider>
      </>
    );
  }
}

export default MyApp;
