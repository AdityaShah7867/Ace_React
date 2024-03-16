import React from "react";

const Details = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center items-center font-bold mt-12">
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

       <div className="flex justify-between gap-4 m-8 font-bold border-b-2 border-gray-400 mt-2"> 
       <div>
        To:
       </div>
       <div>
        Vasai , MAHARASTRA
       </div>
       
       </div>


    </div>
  );
};

export default Details;
