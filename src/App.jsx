import "./App.css";
import desktopPicture from "./assets/images/illustration-sign-up-desktop.svg";
import mobilePicture from "./assets/images/illustration-sign-up-mobile.svg";
import listIcon from "./assets/images/icon-list.svg";
import listSuccessIcon from "./assets/images/icon-success.svg";
import { useState } from "react";

function App() {
  const [sendedMail, setSendedMail] = useState(false);

  const handleSend = () => {
    setSendedMail(true);
  };

  const handleDismiss = () => {
    setSendedMail(false);
  };

  console.log(sendedMail);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        {sendedMail ? (
          <div className="flex flex-col p-10 bg-white w-[400px] max-sm:w-full max-sm:h-full max-sm:p-5 max-sm:justify-center sm:rounded-[20px]">
            
              <img className="w-16 h-16 mb-10" src={listSuccessIcon} alt="" />
              <h1 className="text-5xl font-bold mb-10">Thanks for subscribing!</h1>
              <p className="text-sm mb-10">
                A confirmation email has been sent to{" "}
                <span className="font-bold">ash@loremcompany.com</span>. Please open it and click the
                button inside to confirm your subscription.
              </p>

              <button
                onClick={handleDismiss}
                className="w-full p-2 rounded-md cursor-pointer bg-[#363742] text-white hover:bg-[#FF6257] hover:shadow-md hover:shadow-[#FF6257] max-sm:absolute max-sm:bottom-10 max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:max-w-[95%]"
              >
                Dismiss message
              </button>
            </div>
          
        ) : (
          <div className="flex justify-end  p-5 bg-white w-3/7 max-sm:w-full max-sm:h-full max-sm:p-0 sm:rounded-[20px] max-md:flex-col-reverse max-md:min-h-[75%] lg:justify-between">
            <div className="flex flex-col justify-evenly max-sm:h-full px-10 max-sm:p-4 max-md:px-0">
              <h1 className="text-5xl font-bold ">Stay updated!</h1>
              <p className="text-sm font-normal">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="flex flex-col gap-2">
                <li className="text-sm font-normal">
                  <img className="inline mr-3" src={listIcon} alt="" />
                  Product discovery and building what matters
                </li>
                <li className="text-sm font-normal">
                  <img className="inline mr-3" src={listIcon} alt="" />
                  Measuring to ensure updates are a success
                </li>
                <li className="text-sm font-normal">
                  <img className="inline mr-3" src={listIcon} alt="" />
                  And much more!
                </li>
              </ul>
              <form action="" className="flex flex-col justify-start">
                <label htmlFor="" className="text-[12px] mb-1">
                  Email address
                </label>
                <input
                  className="w-full mb-3 p-2 px-4 border border-gray-300 rounded-md cursor-pointer hover:border-s-black hover:border-b-black focus:outline-none focus:border-s-black focus:border-b-black"
                  type="email"
                  placeholder="email@company.com"
                />
                <button
                  onClick={handleSend}
                  className="w-full p-2 rounded-md  cursor-pointer bg-[#363742] text-white hover:bg-[#FF6257] hover:shadow-md hover:shadow-[#FF6257]"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 lg:h-full flex justify-end max-sm:items-start  ">
              <img className="max-md:hidden" src={desktopPicture} alt="" />
              <img className="md:hidden w-full" src={mobilePicture} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
