import { useEffect, useState } from "react";
import { formatCustom } from "../utils/calcAverage";
import axios from "axios";
import calcDMYavg, { getDateDiff } from "../utils/calcAverage";
import { useSearchParams } from "react-router-dom";
const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams, __] = useSearchParams();
  useEffect(() => {
    console.log(url);
    if (url) {
      axios
        .get(url)
        .then((object) => {
          const value = searchParams.get("dmy");
          if (value === "day")
            setData(calcDMYavg(object.data.data[0], getDateDiff()));
          else if (value === "month")
            setData(calcDMYavg(object.data.data[0], getDateDiff() / 30.417));
          else if (value === "year")
            setData(calcDMYavg(object.data.data[0], getDateDiff() / 365));
          else setData(formatCustom(object.data.data[0]));
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      setError(true);
    }
    setLoading(false);
  }, [url, searchParams]);
  console.log(data);
  return { data, loading, error };
};

export default useFetch;
