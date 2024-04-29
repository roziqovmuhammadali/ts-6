import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import computer from "../../public/Group 1078.svg";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your login logic here
  };

  const isFormValid = () => {
    return formData.username.trim() !== "" && formData.password.trim() !== "";
  };

  return (
    <div className="flex min-h-screen w-[100%] items-center justify-center">
      <div className="h-screen w-[50%] bg-[#3184F6]">
        <div>
          <h1 className="pb-20 pl-10 pt-14 text-[35px] font-bold text-white">
            Developer
          </h1>
        </div>
        <div className=" flex items-center justify-center">
          <img src={computer} alt="logo" />
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex h-screen w-full flex-col items-center justify-center rounded bg-white">
          <h2 className="mb-4 flex items-center text-[50px] font-bold">
            Вход в платформу
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex items-center text-lg font-bold text-gray-700"
              >
                Имя пользователья*
              </label>
              <div className="sm:text-md mt-1 flex w-[450px] items-center rounded-md border border-gray-300 px-3 py-2  shadow-sm focus:border-indigo-500 focus:font-semibold">
                <HiOutlineUser className="mr-2" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Арина Соколова"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full focus:outline-none "
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="flex items-center text-lg font-bold text-gray-700"
              >
                Пароль *
              </label>
              <div className="sm:text-md relative mt-1 flex w-full  items-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500">
                <HiOutlineLockClosed className="mr-2" />

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={handleChange}
                  className=" w-full focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="rememberMe" className="ml-2 flex items-center">
                <span className="text-md font-medium text-[#8AA1C5]">
                  Запомнить меня
                </span>
              </label>
            </div>
            <NavLink to="/dashboard">
              <button
                type="submit"
                className={`w-full rounded-md bg-[#0067F4] px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
                  !isFormValid() && "cursor-not-allowed opacity-50"
                }`}
                disabled={!isFormValid()}
              >
                Войти
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
