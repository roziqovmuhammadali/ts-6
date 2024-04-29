import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { RxTable } from "react-icons/rx";
import Navbar from "./components/Navbar";
import image from "../public/image.png";

const MarketingPage = () => {
  const [hasNazvanie, setHasNaznazvanie] = useState(true);
  const [downTable] = useState(false);
  const [delever, setDelever] = useState("aksiya");

  const rowFunctionCall = (aksiya, otziv) => {
    return delever == "aksiya" ? aksiya : otziv;
  };

  const tableFunctionCall = (aksiya, banner, otziv) => {
    return delever == "aksiya" ? aksiya : delever == "banner" ? banner : otziv;
  };
  const setWidth = (aksiya, banner, otziv) => {
    return delever == "aksiya"
      ? aksiya
      : delever == "banner"
      ? banner
      : delever == "otziv"
      ? otziv
      : "";
  };
  const columns = [
    {
      field: "id",
      renderCell: (cellValues) => {
        return (
          <div className="">
            {delever == "banner" ? (
              <div className="flex items-center justify-center">
                <img src={image} className="w-[80px] h-[80px] " alt="" />
              </div>
            ) : (
              cellValues.value
            )}
          </div>
        );
      },
      headerName: tableFunctionCall("Название", "Изображение", "Название"),
      width: setWidth(440, 144, 500),
    },
    {
      field: "firstName",
      headerName: tableFunctionCall(
        "Начало акции",
        "Hазвание на узбекском",
        "Тип"
      ),
      width: setWidth(200, 376, 200),
    },
    {
      field: "lastName",
      headerName: tableFunctionCall("Конец акции", "Hазвание на русском", ""),
      width: setWidth(200, 376, 0),
    },
    {
      field: "age",
      headerName: "Статус",
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#4094F7",
            }}
          >
            <span
              style={{
                padding: "5px 37.5px",
                backgroundColor: "#4095f726",
                lineHeight: "24px",
                borderRadius: "6px",
              }}
            >
              {cellValues.value}
            </span>
          </div>
        );
      },
      width: 200,
    },
  ];

  const rows = [
    {
      id: rowFunctionCall(
        "Vulputate velit lacus, enim viverra quis.",
        "😉 Курьер молодец"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👍"),
      age: "Активный",
    },
    {
      id: rowFunctionCall(
        "Eget vulputate iaculis aliquam vel nulla tristique nec.",
        "⚡️ Быстрая доставка		"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👍"),
      age: "Активный",
    },
    {
      id: rowFunctionCall("Et sed eu volutpat tincidunt.", "😋 Вкусная еда		"),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👍"),
      age: "Активный",
    },
    {
      id: rowFunctionCall(
        "Quam morbi laoreet arcu amet, orci, volutpat.",
        "🤝 Оператор был вежлив и дружелюбен		"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👎"),
      age: "Активный",
    },
    {
      id: rowFunctionCall("Ut ut sem arcu cursus.", "🐌 Долгая доставка		"),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👎"),
      age: "Активный",
    },
    {
      id: rowFunctionCall(
        "Libero neque, et amet elementum diam amet nisl cras.",
        "🙁 Остывшая еда		"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👎"),
      age: "Активный",
    },
    {
      id: rowFunctionCall(
        "Enim, a ipsum mattis est ultrices.",
        "🙁 Проблемы с курьером		"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👎"),
      age: "Активный",
    },
    {
      id: rowFunctionCall(
        "Parturient sit lobortis ultrices dictum quis egestas.",
        "🙁 Проблемы с оператором"
      ),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", "👍"),
      age: "Активный",
    },
    {
      id: rowFunctionCall("Feugiat vitae viverra purus massa iaculis in.", ""),
      lastName: tableFunctionCall("10.06.2021", "Баннер 1", null),
      firstName: tableFunctionCall("10.06.2021", "Баннер 1", ""),
      age: tableFunctionCall("Активный", "Активный"),
    },
  ];

  return (
    <div className="flex overflow-x-hidden">
      <Navbar />

      <div className="px-4 min-w-[216px] border-[1px] border-[#DCE9F9]">
        <h2 className="text-[#0c76ea] font-bold text-[20px] py-5">Delever</h2>
        <ul className="flex flex-col gap-2 w-full">
          <li
            onClick={() => setDelever("aksiya")}
            className={`w-full py-2 pl-4 text-[14px] ${
              delever == "aksiya"
                ? "bg-[#4094F7] text-white"
                : "bg-white text-[#252C32]"
            } leading-6 font-medium cursor-pointer rounded-[6px]`}
          >
            Акции
          </li>
          <li
            className={`w-full py-2 pl-4 text-[14px] ${
              delever == "banner"
                ? "bg-[#4094F7] text-white"
                : "bg-white text-[#252C32]"
            } leading-6 font-medium cursor-pointer  rounded-[6px]`}
          >
            Баннеры
          </li>
          <li
            className={`w-full py-2 pl-4 text-[14px] ${
              delever == "otziv"
                ? "bg-[#4094F7] text-white"
                : "bg-white text-[#252C32]"
            } leading-6 font-medium cursor-pointer  rounded-[6px]`}
          >
            Отзывы
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-full">
        <h1 className="border-b-[1px]  text-[24px] leading-8 font-semibold py-[11.5px] pl-[32px] border-[#DCE9F9]">{`Список ${
          delever == "aksiya"
            ? "акций"
            : delever == "banner"
            ? "баннеров"
            : delever == "otziv"
            ? "отзывов"
            : delever
        }`}</h1>

        <div className="flex relative justify-end pr-2 bg-[#6e8bb70d] py-1 h-[56px] w-full">
          <div
            className={`absolute ${
              !downTable ? "hidden" : ""
            } top-full right-0 w-[200px] bg-white`}
          >
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => setHasNaznazvanie(!hasNazvanie)}
              >
                Название {hasNazvanie ? "On" : "Off"}
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#DCE9F9]  px-5 py-5 h-full">
          <div className="px-5 w-[1200px] space-y-2 pt-5 bg-white h-[550px] rounded-[6px] ">
            {
              <Box>
                {" "}
                <DataGrid
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  rowSelection={false}
                />
              </Box>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
