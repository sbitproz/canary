import { useCallback, useRef } from "react";
import { api } from "../api.conf";
import { ApiResults } from "../api.types";
import { useApiResponse } from "./useApiResponse";

export const useSwapApi = () => {
  const { isLoading, setLoading, error, setError, data, setData } =
    useApiResponse<unknown[]>();

  const cache = useRef("");

  const hasCalled = useCallback(
    (urlString: string) => {
      return cache.current === urlString;
    },
    [cache.current]
  );

  const fetchSwap = useCallback(async () => {
    setLoading(true);
    try {
      const urlString = ``;

      if (hasCalled(urlString)) {
        setLoading(false);
        return;
      }

      cache.current = urlString;

      const { data }: ApiResults<unknown> = await api.get(urlString);

      setData(data);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
      return [];
    }
  }, []);

  return {
    fetchSwap,
    isLoading,
    error,
    data: data ?? [],
  };
};
