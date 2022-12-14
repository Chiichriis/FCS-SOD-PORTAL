import { useState } from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.jpg";
import arrow from "../assets/free-arrow-down-icon-3101-thumb-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(true);

  const nav = useNavigate()
  const initForm = () =>{
    nav("/verify")
  }

  return (
    <>
      <div>
        <div className="flex m-2 md:mx-20 md:pl-8 p-2 items-center">
          <img src={logo} alt="logo" className="w-fit h-20 md:h-28" />
          <div className="ml-2">
            <h3 className="font-workSans uppercase text-base md:text-xl font-bold md:text-base">
              His Dwelling Place
            </h3>
            <p className="font-slabo text-base md:text-lg border-b border-slate-300 pb-1">
              School of Destiny (SOD) '22
            </p>
          </div>
        </div>

        <div className=" h-full mt-5 relative flex items-center justify-center md:justify-evenly">
          <img src={bg} alt="background" className="w-auto h-full md:h-96 rounded-xs" />
          <div className="absolute top-50 flex flex-col items-center md:relative">
            <p className="font-slabo font-medium text-lg md:xl">
              Are you ready to experience Glory?
            </p>
            <div className="mt-2 flex flex-1">
              <button className="bg-blue-400 text-white px-4 md:px-8 md:py-2 py-1 rounded-xs mr-1 text-sm font-workSans">
                EXPLORE
              </button>
              <button className="ml-1 border border-slate-300 px-4 py-1 md:px-8 md:py-2 rounded-xs text-sms font-workSans" onClick={initForm}>
                REGISTER
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mx-20">
          <h3 className="font-workSans uppercase font-bold mb-2 mx-6 border-b border-slate-300 py-2 md:text-xl">
            Departments
          </h3>

          <div
            className={`${
              open ? "h-10" : "h-96"
            } duration-300 mt-8 mx-6 relative md:w-96`}
          >
            <div className="flex bg-slate-300 rounded-sm md:w-fit">
              <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                Biblical Theology and Ecumenism (BTE)
              </p>
              <img
                src={arrow}
                alt=""
                className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${!open && "rotate-180"}`} //work on this line
                onClick={() => setOpen(!open)}
              />
              
            </div>

            <div className={`${open && "scale-0"} mt-3`}>
              <p className="text-sm font-slabo md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae obcaecati consectetur dolor mollitia sapiente iusto fugiat, repellat, soluta dolorum voluptas voluptatem consequuntur hic nemo rerum tenetur aliquid aspernatur deserunt reiciendis.
              </p>
              <button className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2" onClick={initForm}>JOIN CLASS</button>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-center m-2 mb-4">
          <p className="text-sm font-slabo mt-8 text-slate-500">
            &copy; FCS FUTMinna, 2022.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
