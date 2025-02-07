import { useState, useEffect } from "react";


type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}


export const useFetch = <T>(URL: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)


  useEffect(() => {
    const controller = new AbortController()

    setLoading(true);

    const getFetch = async () => {
      try {
        const response = await fetch(URL, controller);
        console.log(response)
        if (!response.ok) {
          throw new Error("ocurrió algo " + response.status);
        }
        const json = await response.json();
        setData(json);
        setError(null)
        console.log(json);
      }
      catch (err) {
        setError(err as Error);
        console.error(err);
      }
      finally {
        setLoading(false)
      }
    };

    getFetch();

    return () => {
      controller.abort()
    }
  }, [URL]);

  return { data, loading, error };
};
