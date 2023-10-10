import React from "react";
import "../styles/App.css";
import { forwardRef } from "react";
const ReceiptData = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-paper space-y-3 bg-cover rounded-xl shadow-lg px-12 py-6 w-96"
    >
      <Header />
      <div className="space-y-1">
        <Body left="01" middle="Cases" right={data?.cases} />
        <Body left="02" middle="Test-Completed" right={data?.testComplete} />
        <Body left="03" middle="Deaths" right={data?.deaths} />
        <Body
          left="04"
          middle="Hosplitalizations"
          right={data?.hosplitalizations}
        />
        <Body left="05" middle="ICU" right={data?.icu} />
      </div>
      <Divider left="ITEM #" title="Vaccine Coverage" amount="%" />
      <div className="space-y-1">
        <Body left="SC" middle="Vaccine Dose 1" right={data?.vc1} />
        <Body left="BT" middle="Vaccine Dose 2" right={data?.vc2} />
        <Body left="C2" middle="Vaccine Dose 3" right={data?.vc3} />
        <Body left="MR" middle="Vaccine Dose 4" right={data?.vc4} />
      </div>
      <Divider left="ITEM #" title="Vaccine Administration" amount="Amount" />

      <div className="space-y-1">
        <Body left="SC.1" middle="Dose 1" right={data?.va1} />
        <Body left="BT.3" middle="Dose 2" right={data?.va2} />
        <Body left="C2.B" middle="Dose 3" right={data?.va3} />
        <Body left="MR.A" middle="Dose 4" right={data?.va4} />
      </div>
    </div>
  );
});

export default ReceiptData;

const Divider = ({ left, title, amount }) => {
  return (
    <div className="border-dashed flex items-center border-y w-full">
      <p className="text-left flex-1">{left}</p>
      <p className="text-center flex-1">{title}</p>
      <p className="text-right flex-1">{amount}</p>
    </div>
  );
};

const Body = ({ left, middle, right }) => {
  return (
    <li className="flex">
      <p className="flex-1 text-left">{left}</p>
      <p className="flex-1 text-center">{middle}</p>
      <p className="flex-1 text-right">{right}</p>
    </li>
  );
};

const Header = ({}) => {
  function showPosition(position) {
    console.log(position);
  }
  return (
    <>
      <header className="flex flex-col items-center text-base">
        <h1 className="text-xl">Covidify</h1>
        <p>Address: 170 Elizabeth St</p>
        <p>Telephone: 416 123-1234</p>
      </header>
    </>
  );
};

const Footer = () => {
  return <footer>Test</footer>;
};
