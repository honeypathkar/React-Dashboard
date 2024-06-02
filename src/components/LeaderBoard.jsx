import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import image from "../assets/image.png";
import HelpIcon from "@mui/icons-material/Help";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PaymentIcon from "@mui/icons-material/Payment";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import details from "./details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Profit OverView",
      data: [300, 200, 303.5, 480, 295, 365, 407],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Profit OverView",
    },
  },
};

const LeaderBoard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(details.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    setPage(page - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    setPage(page + 1);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = details.slice(offset, offset + itemsPerPage);

  const handleClick = (value) => {
    toast.info(`Want to ${value} visit site ${"www.unfluke.in"}`);
  };

  return (
    <div>
      <div className="container">
        <div>
          <ToastContainer position="top-center" autoClose={1000} />
        </div>
        <div>
          <h1 className="text-3xl pt-5 font-serif underline">Dash Board</h1>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="md:mt-0 w-full md:w-1/2 px-[40px] pt-[20px] mb-10 border mt-4 border-gray-500 rounded-lg shadow-md">
              <div className="p-2 border-b-2">
                <h1 className="font-bold">Profit Overview</h1>
              </div>
              <Bar data={data} options={options} />
            </div>
            <div className="mt-4 border border-gray-500 rounded-lg shadow-md mb-10">
              <div className="p-3 border-b-2">
                <h1 className="font-bold ">Action center</h1>
              </div>
              <div className="pb-3 border-b-2 flex justify-between">
                <div>
                  <h1 className="p-3">
                    {" "}
                    <PaymentIcon />{" "}
                    <span className="pl-2 text-gray-600">
                      Pending Buy / Sell Order
                    </span>
                  </h1>
                  <p className="pr-10 pl-14 text-gray-400">
                    We have still 40 buy orders and 12 sell orders to review and
                    take neccessary action
                  </p>
                </div>
                <div className="pt-[30px] pr-[10px] cursor-pointer hover:scale-125">
                  <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
                </div>
              </div>
              <div className="pb-3 border-b-2 flex justify-between pt-3">
                <div>
                  <h1 className="p-3">
                    <HelpIcon />
                    <span className="pl-2 text-gray-600">Help</span>
                  </h1>
                  <p className="pr-10 pl-12  text-gray-400">
                    If you need any help and support just contact
                  </p>
                </div>
                <div className="pt-[30px] pr-[10px] cursor-pointer hover:scale-125">
                  <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
                </div>
              </div>
              <div className="flex justify-between pt-3">
                <div>
                  <h1 className="p-3">
                    <UpcomingIcon />
                    <span className="pl-2 text-gray-600">Upcoming Deposit</span>
                  </h1>
                  <p className="pr-10 pl-12  text-gray-400">
                    Here is 7 upcoming deposit need to review
                  </p>
                </div>
                <div className="pt-[30px] pr-[10px] cursor-pointer hover:scale-125">
                  <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border border-gray-500 shadow-lg">
              <thead className="bg-gray-50 border-b-2">
                <tr>
                  <th className="px-6 py-2 text-gray-500">Rank</th>
                  <th className="px-6 py-2 text-gray-500">Name</th>
                  <th className="px-6 py-2 text-gray-500">Calmar Ratio</th>
                  <th className="px-6 py-2 text-gray-500">Overall Profit</th>
                  <th className="px-6 py-2 text-gray-500">Avg. Daily Profit</th>
                  <th className="px-6 py-2 text-gray-500">Win % (Day)</th>
                  <th className="px-6 py-2 text-gray-500">Price</th>
                  <th className="px-6 py-2 text-gray-500">View</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((element, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-gray-900">{element.rank}</td>
                    <td className="px-6 py-4 text-gray-900">
                      {" "}
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXp_XYjFlGdFX0QIESgFVLpZyMITnWeqPFuIIkWotJw&s"
                      />{" "}
                      <span className="pl-2 text-gray-600">{element.name}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <img
                        className="inline-block h-6 w-10 rounded-full ring-2 ring-white"
                        src={image}
                      />
                      {element.ratio}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {element.profit}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {element.dailyProfit}
                    </td>
                    <td className="px-6 py-4 text-green-400">
                      {element.winPerc}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {element.price || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      <a
                        href="#"
                        className="text-blue-500"
                        onClick={() => handleClick(element.action)}
                      >
                        {element.action}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination-controls mt-4 flex justify-center space-x-4 mb-12">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                <ArrowBackIosIcon />
              </button>
              <span className="p-[10px] text-xl">
                {page} / {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
