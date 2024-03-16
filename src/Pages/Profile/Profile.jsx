import React, { useState } from 'react';

const Profile = () => {
  const [userType, setUserType] = useState('rider');
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Ferguson');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');

  const handleUserTypeChange = () => {
    setUserType(userType === 'rider' ? 'driver' : 'rider');
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:100';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to submit the form data
    console.log('Form submitted');
  };

  return (
    <div>
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block"></aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Profile</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src="https://avatars.githubusercontent.com/u/121731399?v=4" alt="Bordered avatar" />
                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                        Change picture
                      </button>
                      <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                        Delete picture
                      </button>
                    </div>
                  </div>
                  <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900">Your
                          First name</label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900">Your
                          Last name</label>
                        <input
                          type="text"
                          id="last_name"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Your last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label htmlFor="number" className="block mb-2 text-sm font-medium text-indigo-900">Your
                        Phone number</label>
                      <input
                        type="number"
                        id="number"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="+91 xxxxx xxxxx"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label htmlFor="emernumber" className="block mb-2 text-sm font-medium text-indigo-900">Add
                        Emergency Number</label>
                      <input
                        type="number"
                        id="emernumber"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="+91 xxxxx xxxxx"
                        value={emergencyNumber}
                        onChange={(e) => setEmergencyNumber(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
