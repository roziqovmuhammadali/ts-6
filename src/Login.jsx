import { VscAccount } from "react-icons/vsc";
import { IoMdLock } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value.trim();
    let code = e.target.code.value.trim();
    let userInfo = {
      name,
      code,
    };
    console.log(name.length > 3 && code.length > 6);

    if (name.length > 3 && code.length >= 6) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/");
    } else {
      console.log("dcvsd");
    }
  };
  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex justify-center items-center  bg-[#3687F8]">
        <h1 className="absolute text-white font-semibold text-5xl top-[5%] left-[5%]">
          Delever
        </h1>
      </div>

      <div className="pt-[146px] pb-10 w-1/2 h-screen flex flex-col items-center">
        <div className="h-full flex flex-col">
          <h1 className="text-[36px] text-[#001A49] font-bold mb-[40px]">
            Вход в платформу
          </h1>
          <form onSubmit={handleSubmit} className="w-[592px]">
            <h4
              className="text-[16px] text-[
      #48535B] font-semibold mb-[8px]"
            >
              Имя пользователья*
            </h4>
            <div className="flex px-[12px] mb-4 border-[#6E8BB74D] border-[1px] border-solid rounded-[8px] items-center w-full h-[48px]">
              <label htmlFor="name">
                <VscAccount className="w-6 h-6 mr-3 text-gray-500" />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="h-full text-[14px] leading-6 focus:outline-none flex-grow"
                placeholder="Введите имя"
              />
            </div>

            <h4
              className="text-[16px] text-[
        #48535B] font-semibold mb-[8px]"
            >
              Пароль*
            </h4>
            <div className="flex px-[12px] mb-6 border-[#6E8BB74D] border-[1px] border-solid rounded-[8px] items-center w-full h-[48px]">
              <label htmlFor="code">
                <IoMdLock className="w-6 h-6 mr-3 text-gray-500" />
              </label>
              <input
                id="code"
                type="number"
                name="code"
                className="h-full text-[14px] leading-6 focus:outline-none flex-grow"
                placeholder="Введите имя"
              />
              <IoEye className="w-6 h-6 text-gray-500 ml-3" />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="remember"
                name="checker"
                className="w-6 h-6 mr-4"
                type="checkbox"
              />
              <label
                htmlFor="remember"
                className="leading-6 font-medium text-[#6E8BB7]"
              >
                Запомнить меня
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[52px] bg-[#0067F4] text-white rounded-lg leading-[32px] font-semibold"
            >
              Войти
            </button>
          </form>
          <p className="mt-auto text-[#6E8BB7] leading-6 font-medium">
            Copyright ©Girgitton. Все права защищены
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
