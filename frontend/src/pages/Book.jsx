import React, { useContext, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Book = () => {
  const { user, setUser } = useContext(AuthContext);

  const [inputs, setInputs] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/book`,
        {
          ...inputs,
          name: user.user,
        },
        {
          headers: {
            token: user.token,
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
        setUser(null)
      });
  };

  return (
    <>
      <Navbar />
      <div className="mt-[9vh] w-full h-[91vh] px-[100px] flex items-center justify-center">
        <div className="w-full bg-[#eee] min-h-[45vh] px-[70px] py-[15px] rounded-md shadow-sm">
          <h3 className="text-center py-[10px] text-[24px] font-semibold text-green-500">
            Book
          </h3>
          <div className="mt-[20px] flex flex-wrap gap-5">
            <div className="flex flex-col w-[300px]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user?.user}
                className="px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300"
                disabled
              />
            </div>

            <div className="flex flex-col w-[300px]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Pick Up Location
              </label>
              <input
                type="text"
                name="pickUpLocation"
                placeholder="Pick Up Location"
                className="px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col w-[300px]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col w-[300px]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Contact
              </label>
              <input
                type="number"
                name="contact"
                placeholder="Contact Number"
                className="px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end mt-3">
            <button
              className="px-[20px] py-[6px] rounded-md bg-green-500 text-[#eee] font-medium
              hover:bg-white hover:text-green-500"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
