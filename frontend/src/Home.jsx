import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
const Home = () => {
  const[data,setData]=useState([])
  console.log("Data",data)
  
  const rows = [1, 2, 3, 5, 6, 6, 7];
  const array = [
    "Pink velvet arm chair",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tincidunt mauris. Phasellus id arcu nunc. Ut sed risus mollis, egestas lorem a, vestibulum velit.",
    "$ 40.99",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handelClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const getAPIData = async () => {
      const url = "https://add-and-get-details.onrender.com/get_all_products";
      try {
        const response = await axios.get(url);
        setData(response?.data?.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAPIData();
  }, [handelClose]);
  return (
    <div className="w-full overflow-x-auto p-2 bg-[#F3F3F3]">
      <div className="flex justify-between px-4">
        <p className="font-bold text-[20px]">Product Listing</p>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="px-4 py-2 text-white font-bold rounded-full bg-blue-800">
          Add Product
        </button>
      </div>
      <table className="w-full mt-3">
        <thead>
          <tr>
            <td className="w-1/12 font-bold">Sr.No</td>
            <td className="w-4/12 font-bold">Name</td>
            <td className="w-5/12 font-bold">Description</td>
            <td className="w-2/12 font-bold">Price</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            index % 2 === 0 ? (
              <tr className="bg-white">
                <td className="w-1/12  py-3 px-2">{index}</td>
                <td className="w-4/12  py-3 px-2">{item?.name|| "--"}</td>
                <td className="w-5/12  py-3 px-2">{item?.description|| "--"}</td>
                <td className="w-2/12  py-3 px-2">{item?.price|| "--"}</td>
              </tr>
            ) : (
              <tr className="bg-[#F3F3F3]">
                <td className="w-1/12  py-3 px-2">{index}</td>
                <td className="w-4/12  py-3 px-2">{item?.name|| "--"}</td>
                <td className="w-5/12  py-3 px-2">{item?.description|| "--"}</td>
                <td className="w-2/12  py-3 px-2">{item?.price|| "--"}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50">
            <Modal handelClose={handelClose} />
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
