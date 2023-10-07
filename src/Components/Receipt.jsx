import React, { useRef } from "react";
import ReceiptData from "./ReceiptData";
import { toPng } from "html-to-image";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "./Button";
const Receipt = ({ child, tog }) => {
  const date = new Date().toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const ref = useRef(null);

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

  return (
    <div className="flex flex-col items-center gap-4 max-h-full">
      <Button onClick={() => tog(false)}>New Receipt</Button>
      <ReceiptData data={child} ref={ref} />
      <button
        className="flex bg-darkGreen px-6 py-0.5 rounded justify-center items-center gap-3"
        onClick={htmlToImageConvert}
      >
        <h1 className="text-pale text-xl">Download</h1>{" "}
        <DownloadOutlined className="text-pale text-lg flex" />
      </button>
    </div>
  );
};

export default Receipt;
