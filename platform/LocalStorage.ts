import { LOCAL_STORAGE_KEY } from "constants/index";

const checkTTL = (ttl: string): boolean => {
  return parseInt(ttl, 10) > new Date().getTime();
};

/**
 * Contractor Id Flow
 */

export const setContractor = (contractorId: number): void => {
  // console.log({ code, ttl: new Date().getTime() + 86400000 });
  if (contractorId) {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ contractorId, ttl: new Date().getTime() + 86400000 }),
    );
  }
};

export const deleteContractor = (): void => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const getContractor = async (): Promise<string | null> => {
  const data: string | null = await window.localStorage.getItem(
    LOCAL_STORAGE_KEY,
  );
  if (data) {
    const json = JSON.parse(data);
    if (checkTTL(json.ttl)) {
      return json?.contractorId;
    }
    deleteContractor();
  }
  return null;
};
