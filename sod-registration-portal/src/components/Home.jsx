import { useState } from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.jpg";
import arrow from "../assets/free-arrow-down-icon-3101-thumb-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);

  const nav = useNavigate();
  const initForm = () => {
    nav("/verify");
  };

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

        <div className=" h-full mt-5 relative flex items-center justify-center md:justify-around md:mx-20">
          <img
            src={bg}
            alt="background"
            className="w-auto h-full md:h-96 rounded-xs "
          />
          <div className="absolute top-50 flex flex-col items-center md:relative">
            <p className="font-slabo font-medium text-base md:text-lg md:xl uppercase">
              Are you ready to experience Glory?
            </p>
            <p className="font-slabo text-sm md:text-sm  p-2 text-center mx-6">
              For two weekends, In ten departments, and over 150
              life-transforming courses you are invited to explore the riches of
              God's glory. In SOD '23 God's glory will be seen, lives will be
              transformed, and history will be made.
            </p>
            <div className="mt-2 flex flex-1">
              <button
                className="bg-blue-400 text-white px-4 md:px-8 md:py-2 py-1 rounded-xs mr-1 text-sm font-workSans"
                onClick={initForm}
              >
                REGISTER
              </button>
              <button className="ml-1 border border-slate-300 px-4 py-1 md:px-8 md:py-2 rounded-xs text-sms font-workSans">
                <a href="#dept">EXPLORE</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mx-20" id="dept">
          <h3 className="font-workSans uppercase font-bold mb-2 mx-6 border-b border-slate-300 py-2 md:text-xl">
            Departments
          </h3>

          <div className="">

            <div
              className={`${
                open ? "h-10" : "h-86"
              } duration-300 mt-8 mx-6 relative md:w-96 `}
            >
              <div className="flex bg-slate-300 rounded-sm md:w-fit">
                <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                  Biblical Theology and Ecumenism (BTE)
                </p>
                <img
                  src={arrow}
                  alt=""
                  className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                    !open && "rotate-180"
                  }`} //work on this line
                  onClick={() => setOpen(!open)}
                />
              </div>

              <div className={`${open && "scale-0"} mt-3`}>
                <p className="text-sm font-slabo md:text-base">
                  You have probably had issues understanding church doctrines
                  and beliefs, how they might have caused differences between
                  believers in the body of Christ. Aren't we all ONE in Christ?
                  You also have those questions abi? Well, this might just be
                  the class for you. Get your answers and build a solid
                  foundation of The Word of God above doctrines.
                </p>
                <button
                  className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                  onClick={initForm}
                >
                  JOIN CLASS
                </button>
              </div>
            </div>

            <div
              className={`${
                open1 ? "h-10" : "h-86"
              } duration-300 mt-3 mx-6 relative md:w-96`}
            >
              <div className="flex bg-slate-300 rounded-sm md:w-fit">
                <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                  Erudition and Academic Exploits (EAE)
                </p>
                <img
                  src={arrow}
                  alt=""
                  className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                    !open1 && "rotate-180"
                  }`} //work on this line
                  onClick={() => setOpen1(!open1)}
                />
              </div>

              <div className={`${open1 && "scale-0"} mt-3`}>
                <p className="text-sm font-slabo md:text-base">
                  We know "School na scam" is the trending academic slang
                  everywhere but do you know it's better to build a mindset of
                  excellence and gain mastery than reaching out there to say
                  "Balabablu"? Truth is there's more to getting skills and
                  sabificates. Academic excellence gives you an edge. What's
                  wrong in having it all when God can actually give it all to
                  you? I mean look at Daniel. This class is your next power
                  boost to sharpening yourself academically. You have fears? You
                  can come in here and build on your academic weaknesses and
                  sharpen your strengths too. Fear not, God dey for you too.
                </p>
                <button
                  className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                  onClick={initForm}
                >
                  JOIN CLASS
                </button>
              </div>
            </div>

            <div
              className={`${
                open2 ? "h-10" : "h-86"
              } duration-300 mt-3 mx-6 relative md:w-96`}
            >
              <div className="flex bg-slate-300 rounded-sm md:w-fit">
                <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                  Wealth and Influence (WIN)
                </p>
                <img
                  src={arrow}
                  alt=""
                  className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                    !open2 && "rotate-180"
                  }`} //work on this line
                  onClick={() => setOpen2(!open2)}
                />
              </div>

              <div className={`${open2 && "scale-0"} mt-3`}>
                <p className="text-sm font-slabo md:text-base">
                  Need we say more? The name says it all. Above getting money,
                  wealth and influence is your edge in God's kingdom. Mindsets,
                  belief systems, disciplines. You probably lack that with
                  making money. Dear believer, don't you think it's time to
                  change your ways, i mean your money ways. Think about it
                </p>
                <button
                  className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                  onClick={initForm}
                >
                  JOIN CLASS
                </button>
              </div>
            </div>

            <div
              className={`${
                open3 ? "h-10" : "h-86"
              } duration-300 mt-3 mx-6 relative md:w-96`}
            >
              <div className="flex bg-slate-300 rounded-sm md:w-fit">
                <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                  Family Life and Relationship (FLR)
                </p>
                <img
                  src={arrow}
                  alt=""
                  className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                    !open3 && "rotate-180"
                  }`} //work on this line
                  onClick={() => setOpen3(!open3)}
                />
              </div>

              <div className={`${open3 && "scale-0"} mt-3`}>
                <p className="text-sm font-slabo md:text-base">
                  All other mountains of influence are greatly influenced by the
                  smallest unit and like the Pareto's principle, the family and
                  relationship aspect of our lives gives us the 80% result in
                  every other sphere. You didn't know how important
                  relationships were? Maybe you should asked the guy who was
                  brought by his friends through the roof to receive his
                  healing. There's more for you to know dears.
                </p>
                <button
                  className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                  onClick={initForm}
                >
                  JOIN CLASS
                </button>
              </div>
            </div>

            <div
              className={`${
                open4 ? "h-10" : "h-86"
              } duration-300 mt-3 mx-6 relative md:w-96`}
            >
              <div className="flex bg-slate-300 rounded-sm md:w-fit">
                <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                  Identity and Dominion (IDO)
                </p>
                <img
                  src={arrow}
                  alt=""
                  className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                    !open4 && "rotate-180"
                  }`} //work on this line
                  onClick={() => setOpen4(!open4)}
                />
              </div>

              <div className={`${open4 && "scale-0"} mt-3`}>
                <p className="text-sm font-slabo md:text-base">
                  Your understanding of your identity in Christ is more
                  important than your self identification. If you're quick to
                  lose sight of who you are in Christ because of the chaos
                  around you, this is the train for you. Come receive
                  enlightenment.
                </p>
                <button
                  className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                  onClick={initForm}
                >
                  JOIN CLASS
                </button>
              </div>
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
