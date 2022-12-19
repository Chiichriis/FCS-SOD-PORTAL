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
          <img src={logo} alt="logo" className="w-fit h-20 md:h-26" />
          <div className="ml-2">
            <h3 className="font-workSans uppercase text-base md:text-lg font-bold md:text-base">
              His Dwelling Place
            </h3>
            <p className="font-slabo text-base md:text-base border-b border-slate-300 pb-1">
              School of Destiny (SOD) '22
            </p>
          </div>
          <div>
                
          </div>
        </div>

        <div className=" h-full mt-5 md:mt-8 relative flex items-center justify-center md:justify-around md:mx-20">
          <img
            src={bg}
            alt="background"
            className="w-auto h-full md:h-96 rounded-xs backdrop-blur-sm md:backdrop-blur-none "
          />
          <div className="absolute top-50 flex flex-col items-left md:relative md:ml-10">
            <p className="font-slabo text-sm md:text-base p-2 text-left md:text-left mx-6">
                <b className="font-slabo text-sm md:text-base">Are you Ready to experience Glory?<br></br></b>
              For two weekends, In ten departments, and over 150
              life-transforming courses you are invited to explore the riches of
              God's glory. In SOD '22 God's glory will be seen, lives will be
              transformed, and history will be made.
            </p>
            <div className="mt-2 flex flex-1 content-center mx-8">
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
                  className="flex bg-purple-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Biblical Theology and Ecumenism (BTE)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    <b>Class AKA:</b> "Advocates of verity"
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 111 Introduction to subject matter of class (Biblical
                    theology and ecumenism).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 112 Christology & Ecumenism (in the light of Biblical theology).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 121 Ecumenism.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 122 Prominent Men / Women in Church history and their work (Plycarp, Origen, St. Augustine etc).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 131 Christianity and culture (The church in the world, It's non-conformity and its relevance, church and politics).
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 132 Biblical Hermeneutics.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 211 Common doctrines and tensions I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 212 Common doctrines and tensions II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 221 Monotheism and Trinitarianism.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    BTE 222 Question and answer session.
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
                  className="flex bg-blue-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen1(!open1)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Erudition and Academic Exploits (EAE)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    you? I mean look at Daniel. This class is designed to provoke a culture of excellence and brilliance in you academics and quest for knowledge that will culminate in world-class ideas and innovations that will radically expand the frontiers of God's kingdom in the world.
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Bible Reference:</b> (2 Timothy 2:15, Daniel 1:17, Exodus
                    31:1-6, 3 John 1:2, Acts 7:22)
                  </p>
                  <p className="font-slabo text-sm md:text-base mt-2">
                    <b>Class AKA:</b> “Kingdom Erudites”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 111 Education and Erudition
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 112 Knowledge, Wisdom, and Understanding
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 113 Excellence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 211 Academic Success.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 212 Profitable Schooling
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    EAE 213 Examination & Impartation
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
                  className="flex bg-slate-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen2(!open2)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Wealth and Influence (WIN)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                  className="flex bg-red-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen3(!open3)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Family Life and Relationship (FLR)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    <b>Class AKA:</b> “Love Pace setters”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 111 Introduction to Family life and realtionship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 112 God's original intent for relationship and family life
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 122 Singleness
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 131 Friendship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 132 Relationship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 211 Courtship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 212 Sex and sexuality
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 221 Marriage
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FLR 222- contemporary issues
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
                  className="flex bg-green-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen4(!open4)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Identity and Dominion (IDO)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open4 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open4 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Your understanding of your identity in Christ is more
                    important than your self identification. understanding your purpose and pursuing it is the most fulfilled way to live. If you're quick to loose sight of who you are in Christ because of the chaos around you, if ou need clarity on matters of purpose discovery and fulfilment, this is the train for you. Hop in!
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
                  className="flex bg-yellow-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen5(!open5)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Leadership and Culture (LCU)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
                      !open5 && "rotate-180"
                    }`} //work on this line
                  />
                </div>

                <div className={`${open5 && "scale-0"} mt-3`}>
                  <p className="text-sm font-slabo md:text-base">
                    Leadership has always been a key instrument God uses to bring about the the execution of his agenda in every institutions of the world (family, Business, Government, Education, Religion, Finance, Military, Science and Technology etc.). Hence, He is constantly raising men and women to champion His course on this earth.  This class is here to preach the true tenets of leadership God's way and to stir you life into notable excellence and relevance in this present world. Join in!
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
                    LCU111 & LCU112  Introduction to Leadership.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU121 & LCU122  Culture of Leadership
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU131  Leadership and Family Life I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU132  Leadership and Family Life II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU211  Leadership and Business I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU212  Leadership and Business II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU221  Leadership and Politics I.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU222  Leadership and Politics II.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU311 & LCU312  Leadership and Protégé.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    LCU321 & LCU322  Questions and Answers.
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
                  className="flex bg-pink-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen6(!open6)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Arts and Entertainment (ARTS)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    <b>Class AKA:</b> “The Creatives”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 111 An overview of Arts and Entertainment
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 112 The Spirit-Filled Artist
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 113 Poetry
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 211 Art as an expression of worship
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 212 Creativity and Skill
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 213 Practical Class
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    ART 215 Impartation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                 Examination
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
                  className="flex bg-cyan-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen7(!open7)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Missions and Apologetics (MSA)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    MSA 111 General Introduction
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 112 Introduction To Missions & Introduction to Apologetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 121 Mission and Apologetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 131 The concept of Salvation
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 132 The Holy Spirit & The Holy Spirit in Missions and Aplogetics
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 211 Apologetics I & II
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 212 Effective Evangelism I & II
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 221 Koinonia & The Anointin
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 222 Practicals
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 231 The Word and Prayer
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    MSA 232 Impartaion
                  </p>         
                  <p className="font-slabo text-sm md:text-base"> Examination & Graduation</p>
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
                  className="flex bg-orange-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen8(!open8)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    Faith and the Supernatural (FAS)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    FAS 111 FAITH 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 112 FAITH 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 121 FAITH AND THE HOLY SPIRIT 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 122 FAITH AND THE HOLY SPIRIT 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 211 The Supernatural 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 212 The Supernatural 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 221 The Supernatural and Priesthood 1
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 222 The Supernatural and Priesthood 2
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    FAS 311 Examination and Impartation
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
                  className="flex bg-teal-300 rounded-sm md:w-full cursor-pointer"
                  onClick={() => setOpen9(!open9)}
                >
                  <p className="font-medium text-sm font-workSans p-2 md:text-lg md:pr-6">
                    General Life Talk (GLT)
                  </p>
                  <img
                    src={arrow}
                    alt=""
                    className={`absolute cursor-pointer w-5 h-fit right-0 mr-2 pt-2 md:pt-3 ${
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
                    <b>Class AKA:</b> “Breeds of His Glory”
                  </p>
                  <p className="font-slabo text-sm md:text-base font-medium mt-2">
                    <b>Course Map: </b>
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 111 Sphere of Influence
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 121 Hygiene (Health) and Appearance
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 131 Christian Ethics and Etiquettes
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 211 Temperaments and the Fruit of Spirit.
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 222 Development (interpersonal and Social Skills)
                  </p>
                  <p className="font-slabo text-sm md:text-base">
                    GLT 232 Question and Exams
                  </p>
                  <p className="font-slabo text-sm md:text-base"> Graduation</p>
                  {/* <button
                    className="bg-blue-400 text-xs md:text-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-xs mt-2"
                    onClick={initForm}
                  >
                    JOIN CLASS
                  </button> */}
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
