import { Analytics, getAnalytics } from "firebase/analytics";
import { NEXT_PUBLIC_MODE_ENV } from "configs";

export async function initFirebaseAnalytics(): Promise<Analytics | undefined> {
  if (NEXT_PUBLIC_MODE_ENV) {
    return;
  }
  // return getAnalytics();
}
