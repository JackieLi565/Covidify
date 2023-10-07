import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
function Portal() {
  const naviagte = useNavigate();
  return (
    <div className=" bg-darkGreen md:bg-cover h-screen flex flex-col justify-center items-center gap-2 p-4">
      <a
        href="https://github.com/JackieLi565/Covidify"
        rel="Repository"
        target="_blank"
      >
        <GithubOutlined className="text-4xl flex absolute top-6 right-8 text-pale hover:cursor-pointer" />
      </a>
      <h1 className="text-6xl md:text-9xl text-pale">Covidify</h1>
      <h2 className="text-center text-opacity-75 text-pale text-3xl">
        A receipt for the pandemic
      </h2>
      <p className=" text-center md:max-w-4xl text-pale text-lg">
        Covidify is a web-based application which prints the receipt on reported
        Covid-19 related information. Users can choose specific dates or print
        out the average daily, month, or yearly data. If you would like to learn
        more about the data Covidify uses click{" "}
        <a
          target={"_blank"}
          className="link"
          href="https://github.com/ccodwg/CovidTimelineCanada"
        >
          HERE.
        </a>
      </p>
      <button
        className="bg-pale text-darkGreen px-4 py-1.5 rounded"
        onClick={() => naviagte("/Receipt")}
      >
        Try Covidify
      </button>
    </div>
  );
}

export default Portal;
