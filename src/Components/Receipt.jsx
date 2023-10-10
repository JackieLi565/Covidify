import React, { useRef } from "react";
import ReceiptData from "./ReceiptData";
import { toPng } from "html-to-image";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "./Button";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import mask from "../assets/mask.png";
import { LoadingOutlined } from "@ant-design/icons";
const Receipt = ({ url, handleReset }) => {
  const date = new Date().toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const ref = useRef(null);
  const [__, setSearchParams] = useSearchParams();
  const { data, error, loading } = useFetch(url);

  const htmlToImageConvert = async () => {
    try {
      if (ref.current) {
        const dataURL = await toPng(ref.current, { cacheBust: false });
        const link = document.createElement("a");
        link.download = `covidify-${date}.png`;
        link.href = dataURL;
        link.click();
      } else {
        throw new Error("Receipt Reference Error");
      }
    } catch (e) {
      console.log(typeof e);
    }
  };

  const reset = () => {
    setSearchParams({});
  };
  return (
    <>
      {!loading ? (
        <div className="flex flex-col items-center gap-4">
          <Button onClick={reset}>New Receipt</Button>
          <ReceiptData data={data} ref={ref} />

          <button
            className="flex bg-darkGreen px-6 py-0.5 rounded justify-center items-center gap-3"
            onClick={htmlToImageConvert}
          >
            <h1 className="text-pale text-xl">Download</h1>{" "}
            <DownloadOutlined className="text-pale text-lg flex" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col py-2  items-center gap-3 text-center max-w-lg m-auto">
          <div>
            <h1 className="text-xl">
              Please wait while we are printing your receipt
            </h1>
            <LoadingOutlined />
          </div>

          <div className="border-b border-darkGreen w-3/4 my-3"></div>

          <h1 className="text-2xl">Stop the Spread</h1>
          <p className="text-base">
            One simple tip to help stop the spread of COVID-19 is to wash your
            hands frequently and thoroughly with soap and water for at least 20
            seconds, or use an alcohol-based hand sanitizer. This can help
            remove any virus particles that may be on your hands and prevent you
            from infecting yourself or others.
          </p>

          <h1 className="text-2xl">Protect Yourself</h1>
          <p className="text-base">
            tip to protect yourself from COVID-19 is to wear a mask when you're
            in public spaces, especially when you're in close contact with other
            people. Masks can help reduce the spread of respiratory droplets,
            which are the primary way that the virus spreads from person to
            person.
          </p>
          <img
            src={mask}
            alt="Person with Mask"
            className="w-48 md:w-48 lg:w-64"
          />
        </div>
      )}
    </>
  );
};

export default Receipt;
