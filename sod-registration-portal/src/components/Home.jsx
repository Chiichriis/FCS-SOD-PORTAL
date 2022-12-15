import { useState } from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/alice-donovan-rouse-UweNcthlmDc-unsplash.jpg";
import arrow from "../assets/free-arrow-down-icon-3101-thumb-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(true);
  const [open6, setOpen6] = useState(true);
  const [open7, setOpen7] = useState(true);
  const [open8, setOpen8] = useState(true);
  const [open9, setOpen9] = useState(true);

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
            className="w-auto h-full md:h-96 rounded-xs backdrop-blur-sm md:backdrop-blur-none "
          />
          <div className="absolute top-50 flex flex-col items-center md:relative ">
            <p className="font-slabo font-medium text-base md:text-lg md:xl uppercase">
              Are you ready to experience Glory?
            </p>
            <p className="font-slabo text-sm md:text-sm  p-2 text-center mx-6">
              For two weekends, In ten departments, and over 150
              life-transforming courses you are invited to explore the riches of
              God's glory. In SOD '22 God's glory will be seen, lives will be
              transformed, and history will be made.
            </p>
            <div className="mt-2 flex flex-1">
              <button
                className="bg-blue-400 text-white px-4 md:px-8 md:py-2 py-1 rounded-xs mr-1 text-sm font-workSans"
                onClick={initForm}
              >
                REGISTER
              </button>
              <button className="ml-1 border border-white md:border-slate-300 px-4 py-1 md:px-8 md:py-2 rounded-xs text-sms font-workSans text-white md:text-black">
                <a href="#dept">EXPLORE</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mx-20" id="dept">
          <h3 className="font-workSans uppercase font-bold mb-2 mx-6 border-b border-slate-300 py-2 md:text-xl">
            Departments
          </h3>

          <div className="md:flex md:justify-between">
            <div className="">
              <div
                className={`${
                  open ? "h-10" : "h-86"
                } duration-300 mt-8 mx-6 relative md:w-96 `}
              >
                <div
                  className="flex bg-purple-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Biblical Theology and Ecumenism (BTE)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open && "rotate-180"
                    }`}
                  />
                </div>

                <div className={`${open && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    You have probably had issues understanding church doctrines
                    and beliefs, how they might have caused differences between
                    believers in the body of Christ. Aren't we all ONE in
                    Christ? You also have those questions abi? Well, this might
                    just be the class for you. Get your answers and build a
                    solid foundation of the Word of God for your life and the
                    church.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Ephesians 4:11-16, 2 Timothy 2:15, 2
                    Peter 1:2-3
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> "Custodians of verity"
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 111 Introduction to subject matter of class ( Biblical
                    theology and ecumenism).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE112 Introduction to theology I (generally, To capture the
                    classification of theology).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE121 Introduction to theology II (Biblical theology i.e
                    specific).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE122 Christology (in the light of Biblical theology).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE131 Soteriology (in the light of Biblical theology).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE132 Ecumenism ( establishment of the idea).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE211 Church history and historians.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE212 Prominent men/ women in church history and their
                    works e.g Polycarp, Origen, St. Augustine.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE221 Christianity and culture i.e the church in the world
                    ( It's non-conformity and its relevance, church and
                    politics).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE222 Biblical Hermeneutics.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE231 Common doctrines and tensions I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE232 Common doctrines and tensions II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE311 Monotheism and Trinitarianism.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE312 Question and answer session.
                  </p>
                  <p className="font-slabo text-sm md:text-base">Examination</p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>

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
                <div
                  className="flex bg-blue-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen1(!open1)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Erudition and Academic Exploits (EAE)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open1 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open1 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    We know "School na scam" is the trending academic slang
                    everywhere but do you know it's better to build a mindset of
                    excellence and gain mastery than reaching out there to say
                    "Balabablu"? Truth is there's more to getting skills and
                    "sabificates". Academic excellence gives you an edge. What's
                    wrong in having it all when God can actually give it all to
                    you? I mean look at Daniel. This class is your next power
                    boost to sharpening yourself academically. You have fears?
                    You can come in here and build on your academic weaknesses
                    and sharpen your strengths too. Fear not, God dey for you
                    too.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> (2 Timothy 2:15, Daniel 1:17, Exodus
                    31:1-5, 3 John 1:2, Acts 7:22)
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “Kingdom Erudites”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 111: Education and Erudition
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 112: Knowledge, Wisdom, and Understanding
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 121: Excellence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 122: The supernatural mentality and mental excellence.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 131: Inner brilliance, Outer Glory 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 132: Inner brilliance, Outer Glory 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 211: Academic Success
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 212: -Study Skills, Tips & Tools
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 221 & 222: Profitable Schooling
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 311: Examination and Impartation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 312: Exclusive session
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
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
                <div
                  className="flex bg-slate-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen2(!open2)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Wealth and Influence (WIN)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open2 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open2 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Need we say more? The name says it all. Above getting money,
                    wealth and influence is your edge in God's kingdom.
                    Mindsets, belief systems, disciplines. You probably lack
                    that with making money. Dear believer, don't you think it's
                    time to change your ways, I mean your money ways. Think
                    about it
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Genesis 26:12-15 Deuteronomy 8:18
                    Zachariah 1:17 3John 1:2
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> "Wealth Magnates"
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 111 Introduction to the terms wealth and Influence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 112 Wealth and influence (kingdom perspective)
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 121 Wealth creation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 122 Multiple streams of income
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 131 Business development and strategic planning I
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 132 Idea monetizing
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 211 Digital wealth creation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 212 Creativity
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 221 Financial intelligence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 222 Business development and strategic planning II
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    WIN 311 Examination and Impartation
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
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
                <div
                  className="flex bg-red-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen3(!open3)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Family Life and Relationship (FLR)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open3 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open3 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    All other mountains of influence are greatly influenced by
                    the smallest unit and like the Pareto's principle, the
                    family and relationship aspect of our lives gives us the 80%
                    result in every other sphere. If you don't know how
                    important relationships are? Maybe you should asked the guy
                    who was brought by his friends through the roof to receive
                    his healing from Jesus. There's a treasure for you in this
                    class. Come Explore.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Gen 1:26-28, Gen 2:24, Mark 10:8,
                    Matt 19:8.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “Love Pacesetters”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 101- Introduction to family life and relationship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 111- God's original intention
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 121- Understanding male and female
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 121- Singleness
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 122- God's idea of love
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 131- Friendship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 132- Dating and Courtship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 201- Sex and sexuality
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 211- Tools for effective marriage
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 221- contemporary issues 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 221- contemporary issues 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 231- Examination and impartation.
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
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
                <div
                  className="flex bg-green-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen4(!open4)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Identity and Dominion (IDO)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open4 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open4 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Your understanding of your identity in Christ is more
                    important than your self identification. If you're quick to
                    lose sight of who you are in Christ because of the chaos
                    around you, this is the train for you. Hop in!
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Gen 1:26-28, 1 Pet 2:9-10, Psa
                    49:20, Psa 139: 14-16.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “The Governors”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 111 Salvation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 112 The Man in Christ
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 113 The Holy Spirit
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 211 Purpose Discovery
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 212 Purpose Fulfillment
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 213 Dominion
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 311 Tools for Dominion
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 312 The Governors Summit
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 211- Tools for effective marriage
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    IDE 313 Examination
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
                  <button
                    className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                    onClick={initForm}
                  >
                    JOIN CLASS
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className={`${
                  open5 ? "h-10" : "h-86"
                } duration-300 mt-8 mx-6 relative md:w-96 `}
              >
                <div
                  className="flex bg-yellow-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen5(!open5)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Leadership and Culture (LCU)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open5 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open5 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    "Servant-Leadership" has always been God's way to keep us on
                    the right track and mind of true leadership. We serve to
                    lead, more so, we lead to serve. Both explanations are two
                    sides of the same coin. This class is here to preach the
                    true tenets of leadership God's way and to stir your life
                    into notable excellence and relevance in this present world.
                    Join in!
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Genesis 1:26-28, Psalm 78:70-72,
                    Acts 20:17-34, 1 Peter 2:9.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “ God's Executives”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU111 & LCU112 - Introduction to Leadership.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU121 & LCU122 - Culture of Leadership
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU131 - Leadership and Family Life I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU132 - Leadership and Family Life II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU211 - Leadership and Business I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU212 - Leadership and Business II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU221 - Leadership and Politics I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU222 - Leadership and Politics II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU311 & LCU312 - Leadership and Protégé.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU321 & LCU322 - Questions and Answers.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    Impartation and Examination
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
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
                  open6 ? "h-10" : "h-86"
                } duration-300 mt-3 mx-6 relative md:w-96`}
              >
                <div
                  className="flex bg-pink-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen6(!open6)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Arts and Entertainment (ARTS)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open6 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open6 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    "We are the creator's creatives, His masterpieces that
                    master pieces in art." Entertainment is a mountain that
                    greatly needs the Lord's army to step in. So are you part of
                    the Lord's army? Say yes please!
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Exodus 36:1, psalms 68:11,
                    Colossians 3:16, 1 Corinthians 1:5
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “The Creative Heralds”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART111 Panoramic view of Arts and entertainment
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART112 The Church in relations to Arts and entertainment
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART121 The Spirit-filled Artist
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART122 ENTERTAINMENT
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART131 PROPHETIC ART
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART132 Arts as an expression of Worship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART211 The Minister of Christ
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART212 POETRY
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART221 Expressing God to the world through Arts
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART222 Creativity and Skill
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART231 performance improvement [Practical Class
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART232 Moderation, Media, and its Effects
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART311 Exclusive Session
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    {" "}
                    Impartation and Examination
                  </p>
                  <p className="font-slabo text-sm md:text-base"> Graduation</p>
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
                  open7 ? "h-10" : "h-86"
                } duration-300 mt-3 mx-6 relative md:w-96`}
              >
                <div
                  className="flex bg-cyan-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen7(!open7)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Missions and Apologetics (MSA)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open7 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open7 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Are you a fervent listener of Gideon Odoma or passed time
                    with Ravi Zacharias? Being a Christian apologetist requires
                    more than just following apologetics online. Wisdom calls
                    the city top and the marketplace to come and drink from her
                    wells." You'll need more than just a thousand tapes, you'll
                    need a basic but solid foundation to not just speak but to
                    speak spirit and life.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> 1 Peter 3:15, Matthew 24:14, Rom
                    10:10-14, 1 Peter 4:11.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “Kingdom Oracles”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 111 : General Introduction
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 112 : Introduction To Missions
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 121 : Introduction To Apologetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 122 : Missions And Apologetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 131: The Concept Of Salvation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 132: The Holy Spirit
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 211: The Holy Spirit In Missions And Apologetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 212: Apologetics I
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 221: Apologetics II
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 222: Effective Evangelism I
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 231: Effective Evangelism II
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 232 : Koinonia
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 311 : The Anointing
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    {" "}
                    MSA 311 : The Anointing
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    {" "}
                    MSA 312 : Practicals
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    {" "}
                    MSA 321: The Word And Prayer
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    {" "}
                    MSA 322 : Impartation.
                  </p>
                  <p className="font-slabo text-sm md:text-base"> Graduation</p>
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
                  open8 ? "h-10" : "h-86"
                } duration-300 mt-3 mx-6 relative md:w-96`}
              >
                <div
                  className="flex bg-orange-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen8(!open8)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Faith and the Supernatural (FAS)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open8 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open8 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Crazy Faith is what we call it these days. "Faith cometh by
                    hearing and hearing the Word of God." You'll need faith to
                    access the unseen, the hoped for, and the supernatural. Are
                    you ready to experience the supernatural firsthand, don't
                    worry it's not Sid Roth's "it's supernatural" but it could
                    be. Let's get you registered abeg, there's no
                    time to spend time.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Heb 11:6, Mark 16:15, Heb 11:3, Acts
                    4:33, 2 Pet 1:1-4.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “God’s Generals”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 111: FAITH 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 112: FAITH 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 121: FAITH AND THE HOLY SPIRIT 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 122: FAITH AND THE HOLY SPIRIT 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 211: The Supernatural 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 212: The Supernatural 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 221: The Supernatural and Priesthood 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 222: The Supernatural and Priesthood 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 311: Examination and Impartation
                  </p>
                  <p className="font-slabo text-sm md:text-base">Graduation</p>
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
                  open9 ? "h-10" : "h-86"
                } duration-300 mt-3 mx-6 relative md:w-96`}
              >
                <div
                  className="flex bg-teal-300 rounded-sm md:w-fit cursor-pointer"
                  onClick={() => setOpen9(!open9)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    General Life Talk (GLT)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer md:relative w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open9 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open9 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    As a generation of glory the world must reckon with the
                    essence of God that flows in and through our lives. We are
                    beacons in the night, living examples of life's core truths
                    and holiness (2 Peter 1:4). The world looks up to us as role
                    models who live lives guided by God's ideals and
                    characterized by strong character. The purpose of this
                    course is to examine basic living ethics and etiquettes as
                    they apply to everyday life. Don't worry when you choose any
                    course above, this one will be added for free. Welcome in
                    anticipation.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> Genesis 1:26-28, 2 Peter 1:3-4, 1
                    John 4:4-6.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “Breeds of Glory”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 111 Bearers of the Kingdom and His Glory
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 112 Your mission and ministry
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 113 Christian Ethics and Etiquettes
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 211 Temperaments/ Spiritual gift
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 221 The Hallmark of a Christian
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 222 Interpersonal and Social Skills
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 311 Sphere of Influence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 312 Hygiene and Appearance
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 313 Health and Development
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 321 Questions and Answers
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 322 Examination
                  </p>
                  <p className="font-slabo text-sm md:text-base"> Graduation</p>
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
