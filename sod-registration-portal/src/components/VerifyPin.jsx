import logo from "../assets/Logo.png";
import { useState } from "react";

const VerifyPin = ({ handleVerify, setTData }) => {
  const [token, setToken] = useState("");

  return (
    <div className="w-screeen h-screen bg-white px-7 py-20 flex-col items-center">
      <div className="flex items-center flex-col">
        <div className="bg-white min-h-full rounded drop-shadow-lg flex justify-center px-4 py-4 md:w-4/12">
          <div className="container bg-inherit flex flex-col items-center pt-2">
            <img
              src={logo}
              alt="Fcs-Logo"
              className="h-10 md:h-14 w-auto mb-3"
            />

            <h3 className="font-workSans uppercase text-xs font-bold md:text-base">
              His Dwelling Place
            </h3>
            <p className="font-slabo text-sm md:text-sm">
              School of Destiny (SOD) '22
            </p>

            <div className="mt-12">
              <p className="p-2 m-2 font-slabo text-xs md:text-xs md:text-sm rounded-sm font-light bg-slate-100 w-fit">
                Are you ready to Experience God's Glory?
              </p>
              <p className="font-slabo text-sm md:text-sm  p-2 text-justify">
                For two weekends, In ten departments, and over 150
                life-transforming courses you are invited to explore the riches
                of Gods glory. God's glory will be seen, lives will be
                transformed, and history will be made
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                handleVerify(token);
              }}
              className="mt-10 w-full p-2"
            >
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter your Token/Pin here"
                className="px-4 py-3 md:py-4 rounded-sm text-xs md:text-sm font-workSans border outline-transparent font-thin w-full"
                required
                pattern="\S(.*\S)?"
              />

              <input
                type="submit"
                className="bg-blue-400 text-white w-full mt-3 p-2 md:p-3 rounded-sm font-workSans uppercase text-sm cursor-pointer"
              />
            </form>
          </div>
        </div>

        <p className="text-sm font-slabo mt-8 text-slate-500">
          &copy; FCS FUTMinna, 2022.
        </p>
      </div>
    </div>
  );
};

export default VerifyPin;
