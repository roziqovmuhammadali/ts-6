import React from "react";
import Navbar from "./components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import NumbersData from "./components/NumbersData";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useState } from "react";

const dataDaily = [100, 300, 150, 400, 200, 700, 500, 902];
const dataWeekly = [100, 250, 200, 500, 150, 600, 550, 980];
const dataYearly = [220, 300, 180, 500, 400, 800, 600, 1000];

const DashboardPage = () => {
  const [ActiveChart, setActiveChart] = useState("kunlik");
  return (
    <div className="flex overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col">
        <h1 className="border-b-[1px] w-screen text-[24px] leading-8 font-semibold py-[11.5px] pl-[32px] border-[#DCE9F9]">
          Dashboard
        </h1>
        <div className="bg-[#DCE9F9] pt-6 pl-9">
          <NumbersData />

          <div className="flex mb-5 gap-[19px]">
            <ul className="flex flex-col gap-5">
              <li className="bg-white p-6 w-[278px] rounded-[6px]">
                <h4 className="text-[#6E8BB7] leading-6 text-[14px] mb-2">
                  Total orders this month
                </h4>

                <div className="flex w-full justify-between items-center">
                  <h3 className="text-[24px] font-bold leading-10 text-[#303940]">
                    1,850
                  </h3>
                  <div className="flex gap-2 text-[#F2271C] items-center mb-4 text-[14px] leading-6 font-semibold py-2 pr-2 pl-3 bg-[#f2271c1a] rounded-[12px]">
                    -5%
                    <span className="w-6 h-6 bg-[#f2271c26] rounded-full flex justify-center items-center">
                      <FaChevronDown className="w-[20px] h-[10px]" />
                    </span>
                  </div>
                </div>
                <Stack sx={{ width: "100%" }}>
                  <LineChart
                    xAxis={[
                      {
                        data: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        scaleType: "point",
                      },
                    ]}
                    series={[
                      {
                        data: [100, 300, 150, 400, 200, 700, 500, 1000],
                        showMark: false,
                        area: true,
                        color: ["#F8C900"],
                        connectNulls: true,
                      },
                    ]}
                    height={105}
                    width={230}
                    leftAxis={null}
                    bottomAxis={null}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  />{" "}
                </Stack>
              </li>

              <li className="bg-white p-6 w-[278px] rounded-[6px]">
                <h4 className="text-[#6E8BB7] leading-6 text-[14px] mb-2">
                  Earning this month
                </h4>

                <div className="flex w-full justify-between items-center">
                  <h3 className="text-[24px] font-bold leading-10 text-[#303940]">
                    $6,250
                  </h3>
                  <div className="flex gap-2 text-[#1AC19D] items-center mb-4 text-[14px] leading-6 font-semibold py-2 pr-2 pl-3 bg-[#1ac19d26] rounded-[12px]">
                    +25%
                    <span className="w-6 h-6 bg-[#1ac19d33] rounded-full flex justify-center items-center">
                      <FaChevronDown className="w-[20px] h-[10px]" />
                    </span>
                  </div>
                </div>
                <Stack sx={{ width: "100%" }}>
                  <LineChart
                    xAxis={[
                      {
                        data: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        scaleType: "point",
                      },
                    ]}
                    series={[
                      {
                        data: [100, 300, 150, 400, 200, 700, 500, 1000],
                        showMark: false,
                        area: true,
                        color: ["#A30Fee"],
                        connectNulls: true,
                      },
                    ]}
                    height={105}
                    width={230}
                    leftAxis={null}
                    bottomAxis={null}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  />{" "}
                </Stack>
              </li>
              <li className="bg-white p-6 w-[278px] rounded-[6px]">
                <h4 className="text-[#6E8BB7] leading-6 text-[14px] mb-2">
                  Total orders this month
                </h4>

                <div className="flex w-full justify-between items-center">
                  <h3 className="text-[24px] font-bold leading-10 text-[#303940]">
                    $12,750
                  </h3>
                  <div
                    className="flex gap-2 text-[
      #1AC19D] items-center mb-4 text-[14px] leading-6 font-semibold py-2 pr-2 pl-3 bg-[#1ac19d26] text-[#1AC19D] rounded-[12px]"
                  >
                    +12%
                    <span className="w-6 h-6 bg-[#1ac19d33] rounded-full flex justify-center items-center">
                      <FaChevronDown className="w-[20px] h-[10px] text-[#1AC19D]" />
                    </span>
                  </div>
                </div>
                <Stack sx={{ width: "100%" }}>
                  <LineChart
                    xAxis={[
                      {
                        data: ["1", "2", "3", "4", "5", "6", "7", "8"],
                        scaleType: "point",
                      },
                    ]}
                    series={[
                      {
                        data: [100, 300, 150, 400, 200, 700, 500, 1000],
                        showMark: false,
                        area: true,
                        color: ["#F77771"],
                        connectNulls: true,
                      },
                    ]}
                    height={105}
                    width={230}
                    leftAxis={null}
                    bottomAxis={null}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  />{" "}
                </Stack>
              </li>
            </ul>

            <div className="">
              <ul className="flex gap-5 mb-[20px]">
                <li className="rounded-[6px] flex items-center gap-[40px] w-[413px] bg-white p-6">
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, md: 3 }}
                  >
                    <Gauge
                      width={175}
                      outerRadius={52}
                      margin={{ bottom: 0, left: -25, right: 0, top: -10 }}
                      height={175}
                      value={75}
                      startAngle={0}
                      endAngle={-360}
                      cornerRadius={50}
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 24,
                          lineHeight: 40,
                          fontWeight: 700,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#1AC19D",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: "#1ac19d1a",
                        },
                      })}
                    />
                  </Stack>
                  <div className="">
                    <p className="text-[14px] leading-6 text-[#6E8BB7] mb-2">
                      Top Order
                    </p>
                    <h3 className="text-[40px] leading-10 text-[#1AC19D] font-bold">
                      75%
                    </h3>
                  </div>
                </li>

                <li className="rounded-[6px] flex items-center gap-[40px] w-[413px] bg-white p-6">
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, md: 3 }}
                  >
                    <Gauge
                      width={175}
                      outerRadius={52}
                      margin={{ bottom: 0, left: -25, right: 0, top: -10 }}
                      height={175}
                      value={40}
                      startAngle={0}
                      endAngle={-360}
                      cornerRadius={50}
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 24,
                          lineHeight: 40,
                          fontWeight: 700,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#A23FEE",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: "#a23fee1a",
                        },
                      })}
                    />
                  </Stack>
                  <div className="">
                    <p className="text-[14px] leading-6 text-[#6E8BB7] mb-2">
                      Average order
                    </p>
                    <h3 className="text-[40px] leading-10 text-[#A23FEE] font-bold">
                      40%
                    </h3>
                  </div>
                </li>
              </ul>

              <div className="w-[846px] bg-white rounded-[6px]">
                <div className="flex w-full px-5 py-4 items-center justify-between">
                  <h3 className="text-[18px] leading-6 font-semibold text-[#5B6871]">
                    Ежемесячная статистика
                  </h3>
                  <select className="outline-none px-4 py-2 w-[160px] h-[40px] border-[1px] border-[#E5E9EB] rounded-lg">
                    <option selected value="iyun">
                      Июнь
                    </option>
                  </select>
                </div>
                <Stack sx={{ width: "100%" }} className="mb-2">
                  <LineChart
                    xAxis={[
                      {
                        data: [
                          `${
                            ActiveChart == "kunlik"
                              ? "Понедельник"
                              : ActiveChart == "oylik"
                              ? "январь"
                              : "2017"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Вторник"
                              : ActiveChart == "oylik"
                              ? "февраль"
                              : "2018"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Среда"
                              : ActiveChart == "oylik"
                              ? "Mарт"
                              : "2019"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Четверг"
                              : ActiveChart == "oylik"
                              ? "апрель"
                              : "2020"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Пятница"
                              : ActiveChart == "oylik"
                              ? "Mай"
                              : "2021"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Суббота"
                              : ActiveChart == "oylik"
                              ? "июнь"
                              : "2022"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? ""
                              : ActiveChart == "oylik"
                              ? "июль"
                              : "2023"
                          }`,
                          `${
                            ActiveChart == "kunlik"
                              ? "Воскрессенье"
                              : ActiveChart == "oylik"
                              ? "Август"
                              : "2024"
                          }`,
                        ],
                        scaleType: "point",
                      },
                    ]}
                    series={[
                      {
                        data:
                          ActiveChart == "kunlik"
                            ? dataDaily
                            : ActiveChart == "oylik"
                            ? dataWeekly
                            : dataYearly,
                        showMark: false,
                        area: true,
                        connectNulls: true,
                      },
                    ]}
                    height={364}
                    width={846}
                    margin={{ top: 10, bottom: 20 }}
                    grid={{ vertical: true, horizontal: true }}
                  />
                </Stack>
                <ul className="flex items-center gap-3 justify-center">
                  <li
                    onClick={() => setActiveChart("kunlik")}
                    className={`py-4 cursor-pointer px-[18px] w-[96px] ${
                      ActiveChart == "kunlik"
                        ? "border-b-4 border-[#3593F9] text-[#4094F7]"
                        : "text-[#6E8BB7]"
                    } font-medium text-[14px leading-6] text-center`}
                  >
                    Неделья
                  </li>
                  <li
                    onClick={() => setActiveChart("oylik")}
                    className={`cursor-pointer py-4 px-[18px] w-[96px] ${
                      ActiveChart == "oylik"
                        ? "border-b-4 border-[#3593F9] text-[#4094F7]"
                        : "text-[#6E8BB7]"
                    } font-medium text-[14px leading-6] text-center`}
                  >
                    Месяц
                  </li>
                  <li
                    onClick={() => setActiveChart("yillik")}
                    className={`cursor-pointer py-4 px-[18px] w-[96px] ${
                      ActiveChart == "yillik"
                        ? "border-b-4 border-[#3593F9] text-[#4094F7]"
                        : "text-[#6E8BB7]"
                    } font-medium text-[14px leading-6] text-center`}
                  >
                    Год
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
