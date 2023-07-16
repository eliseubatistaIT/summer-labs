import React from "react";

type useFetchOptions = Record<string, any>;

interface useFetchProps {
  endpointUrl: string;
  options?: useFetchOptions;
}

export const useFetch = <InputType, OutputType>({
  endpointUrl,
  options,
}: useFetchProps) => {
  const buildUrl = (baseUrl: string, options?: useFetchOptions) => {
    let optionsCount = 0;
    let finalUrl = `${endpointUrl}?`;

    for (const key in options) {
      const value = options[key];

      //If this is not the first option param, add an &
      if (optionsCount > 0) {
        finalUrl = `${finalUrl}&`;
      }

      //add the key and the value
      finalUrl = `${finalUrl}${key}=${value}`;
      //Count one more option
      optionsCount++;
    }

    return finalUrl;
  };

  const runFetch = React.useCallback(async (): Promise<OutputType> => {
    const fetchUrl = buildUrl(endpointUrl, options);

    const result = await fetch(endpointUrl);
    const jsonResult = await result.json();

    return jsonResult as OutputType;
  }, [endpointUrl, options]);

  return runFetch();
};
