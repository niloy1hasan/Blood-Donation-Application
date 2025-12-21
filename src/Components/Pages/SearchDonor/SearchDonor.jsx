import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import DonorCard from "./DonorCard";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const loadDistricts = async () => {
  try {
    const res = await fetch("/districts.json");
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

const loadUpazilas = async () => {
  try {
    const res = await fetch("/upazilas.json");
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

const SearchDonor = () => {
  const axiosInstance = useAxios();
    const [bloodGroup, setBloodGroup] = useState("");
    const [district, setDistrict] = useState("");
    const [upazila, setUpazila] = useState("");
    const [districtName, setDistrictName] = useState([]);
    const [upazilaName, setUpazilaName] = useState([]);
    const [donors, setDonors] = useState([]);
    const [isSearching, setIsSearching] = useState(false);


      useEffect(() => {
        const fetchDistricts = async () => {
          const data = await loadDistricts();
          setDistrictName(data || []);
        };
        fetchDistricts();
      }, []);
    
      useEffect(() => {
        const fetchUpazila = async () => {
          const data = await loadUpazilas();
          const id = districtName.find((item) => item.name === district);
          const filteredData = district
            ? data.filter((item) => item.district_id === id.id)
            : [];
          setUpazilaName(filteredData || []);
        };
        fetchUpazila();
      }, [district]);

      const handleSearch = async () => {
        setIsSearching(true);
  try {
    const url = `/search-donors?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`;
    const res = await axiosInstance.get(url);
    setDonors(res.data);
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching donors:", error);
  } finally {
    setIsSearching(false);
  }
};

  

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 via-white to-red-100 py-12 px-4">
        <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Search Blood Donor
          </h1>
          <p className="text-gray-600 text-sm">
            Find blood donors easily by selecting location and blood group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blood Group
            </label>
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
              <option value="" disabled>Select Blood Group</option>

              {["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              District
            </label>
            <select value={district} onChange={(e) => {
                    setDistrict(e.target.value);
                    setUpazila("");
                  }} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
              <option value="" disabled>Select District</option>
              {
                districtName.map((district) => (
                  <option key={district.name} value={district.name}>
                    {district.name}
                  </option>
                ))
              }
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upazila
            </label>
            <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
              <option value="" disabled>Select Upazila</option>
              {upazilaName.map((upazila) => (
                <option key={upazila.name} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-8 flex justify-center">
          <button onClick={handleSearch} className="flex items-center gap-2 rounded-full px-10 py-2.5 text-[16px] font-medium text-white bg-red-600 hover:bg-red-700 shadow-lg transition-all">
            <CiSearch className="w-5 h-5" />
            {isSearching ? "Searching..." : "Search Donor"}
          </button>
        </div>
      </div>
    </div>

    {/* Donor Results */}
    <div className="flex justify-center mt-12 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Donor Cards */}
            {
              donors.map(donor => <DonorCard key={donor._id} donor={donor} />)
            }
        </div>
    </div>

    </section>
    
    ); 
};

export default SearchDonor;
