/* eslint-disable global-require */
import { NextPageContext } from "next";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

const acceptLanguages = ["en"];
const defaultLocale = acceptLanguages[0];

export const getLocale = async (
  ctx: NextPageContext | any
): Promise<string> => {
  try {
    const cookieLocale = nextCookie(ctx).locale;
    let locale = defaultLocale;
    if (cookieLocale) {
      // check if user has set locale
      locale = acceptLanguages.includes(cookieLocale)
        ? cookieLocale
        : defaultLocale;
    } else {
      // check if user has set locale
      const systemLocale =
        ctx.req.headers["accept-language"] ||
        navigator.language ||
        defaultLocale;
      locale = acceptLanguages.includes(systemLocale)
        ? systemLocale
        : defaultLocale;
      cookie.set("locale", locale, { expires: 365 });
    }
    return locale;
  } catch (error) {
    // console.error(error);
    return defaultLocale;
  }
};

export const hasFullICU = (): boolean => {
  try {
    const january = new Date(9e8);
    const english = new Intl.DateTimeFormat("en", { month: "long" });
    return english.format(january) === "January";
  } catch (err) {
    return false;
  }
};

export const getMessages = async (locale: string): Promise<any> => {
  try {
    // eslint-disable-next-line import/no-dynamic-require
    return require(`./translations/${locale}.json`);
  } catch (error) {
    // console.error(error);
    return require(`./translations/en.json`);
  }
};
