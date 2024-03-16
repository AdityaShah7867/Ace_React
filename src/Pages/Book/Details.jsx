import React from "react";
import { MdMessage } from "react-icons/md";

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center items-center font-bold mt-10">
        <p>RESERVATION REQUEST</p>
      </div>
      <div className=" bg-gray-200 w-30  mt-8 flex justify-center items-center rounded-xl mx-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8961.778523140121!2d72.82049725104375!3d19.19678701565962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1710611991366!5m2!1sen!2sin"
          width={375}
          height={200}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          
        />
      </div>
       <div className="mt-3 ml-3 p-3 text-gray-400 text-sm"> Saturday, 17 march 2024</div>

       <div className="flex justify-between gap-4 m-8 font-bold"> 
       <div>
        From:
       </div>
       <div>
        VIRAR , MAHARASTRA
        <hr className="mt-4" />
       </div>
       </div>

       <div className="flex justify-between gap-4 m-8 font-bold border-b-2  border-gray-400 mt-2"> 
       <div>
        To:
       </div>
       <div>
        VASAI , MAHARASTRA
      
       </div>
       
       </div>

       <div className="bg-gray-500 m-3 p-3 text-white rounded-xl">
        <p>Fare as per Members:</p>
        <br/>
        <p>1 person : ₹ 500</p>
        <p>1 person : ₹ 500</p>
        <p>1 person : ₹ 500</p>
        

       </div>

       <div className="flex flex-wrap ml-2 mt-12 p-2">

        <div>
            <img src="https://avatars.githubusercontent.com/u/121731399?v=4" className="w-16 h-16 rounded-full" alt="" />
        </div>
        <div className="font-bold ml-2">
            Aditya Shah <br/>
            <p className="font-medium text-sm">

            start : 5.0 <br/>
            13feedbacks
            </p>
        </div>
        <div className="ml-8 mt-2 border-4 rounded-full p-4 text-xl">
        <MdMessage />

        </div>

        <div className="mt-2 ml-4 border-2 border-gray-200 rounded-lg p-2 ">
            See Profile
        </div>

        

               
       </div>

       <div className="mt-8 flex justify-center mx-auto items-center  bg-violet-600 p-4 w-10/12 rounded-lg text-white">
        BOOK A CAB
       </div>
      


    </div>
  );
};

export default Details;
