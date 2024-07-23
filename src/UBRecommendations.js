import React from "react";
import ProductList from "./components/ProductList";

const UBRecommendations = ({onClose}) => {
  return (
    <div>
        <h1>See!</h1>
        <h1>You got</h1>
        <h1>Me going crazy</h1>
    </div>
    // <div className="fixed inset-0 flex items-end justify-center z-50 ">
    //   <div className="bg-black bg-opacity-50 fixed inset-0" onClick={onClose}></div>
    //   <div className="bg-white rounded-t-lg shadow-lg w-full md:max-w-md mx-auto p-6 z-50 overflow-y-auto" style={{ height: '80%' }}>
    //     <div className="flex justify-end items-center pb-3">
    //       <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    //         </svg>
    //       </button>
    //     </div>
    //     <h1 style={{color: '#000'}}>WHY NOT DISPLAY HERE</h1>
    //     <h1 style={{color: '#000'}}>WHY NOT DISPLAY HERE</h1>
    //     <h1 style={{color: '#000'}}>WHY NOT DISPLAY HERE</h1>
    //     <p style={{color: '#000'}}>WHY NOT DISPLAY HERE</p>
    //   </div>
    // </div>
    // <div className="fixed inset-0 flex items-end justify-center z-50">
    //   <div
    //     className="bg-black bg-opacity-50 fixed inset-0"
    //     onClick={onClose}
    //   ></div>
    //   <div
    //     className={`bg-white rounded-t-lg shadow-lg w-full mx-auto p-6 z-50 overflow-y-auto modal-position`}
    //     // sm:max-w-screen-sm md:${check ? "max-[500px]" : "max-[500px]"}
    //     // style={{ width: !check ? 500 : 1500 }}
    //     // style={{ width: '80%' }}
    //   >
    //     <div className="flex justify-end items-center pb-3">
    //       <button
    //         className="text-gray-500 hover:text-gray-700"
    //         onClick={onClose}
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M6 18L18 6M6 6l12 12"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //     {/* <LandingPopup /> */}
    //     {/* <SkinQuizPopup /> */}
    //     <ProductList />
    //     {/* <ProductDetails /> */}
    //   </div>
    // </div>
  );
};

export default UBRecommendations;
