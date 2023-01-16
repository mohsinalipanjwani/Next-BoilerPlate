import { useCallback, useEffect, useState } from "react";

interface useLocalStorageReturn {
  state: any;
  setState: (...args: any) => void;
}

export default function useLocalStorage(key: string): useLocalStorageReturn {
  // pull the initial value from local storage if it is already set
  const [state, setState] = useState(null);
  // save the new value when it changes
  useEffect(() => {
    if (!process?.browser || !localStorage || !state) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  useEffect(() => {
    if (!process?.browser || !localStorage) {
      return;
    }
    async function getInitialState() {
      const exValue = await localStorage.getItem(key);
      if (exValue) {
        setState(JSON.parse(exValue));
      }
    }
    getInitialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // memoize a storage watcher callback back because everything in hooks should be memoized
  const storageWatcher = useCallback(
    (e: StorageEvent) => {
      if (e.key === key && e?.newValue) {
        // update ours if we
        setState((currState) => {
          const newDat = e.newValue ? JSON.parse(e.newValue) : null;
          return newDat === state ? newDat : currState;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, state],
  );

  // install the watcher
  useEffect(() => {
    if (!process?.browser) {
      return () => null;
    }
    window.addEventListener("storage", storageWatcher);
    // stop listening on remove
    return () => {
      window.removeEventListener("storage", storageWatcher);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return { state, setState };
}
