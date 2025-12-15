import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchDonor = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4">
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


{/* Filters */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Blood Group */}
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Blood Group
</label>
<select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
<option value="">Select Blood Group</option>
<option>A+</option>
<option>B+</option>
<option>O+</option>
<option>AB+</option>
</select>
</div>


{/* District */}
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
District
</label>
<select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
<option value="">Select District</option>
<option>Dhaka</option>
<option>Chattogram</option>
<option>Rajshahi</option>
</select>
</div>


{/* Upazila */}
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Upazila
</label>
<select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400">
<option value="">Select Upazila</option>
<option>Savar</option>
<option>Dhanmondi</option>
<option>Mirpur</option>
</select>
</div>
</div>


{/* Search Button */}
<div className="mt-8 flex justify-center">
<button className="flex items-center gap-2 rounded-full px-10 py-2.5 text-[16px] font-medium text-white bg-red-600 hover:bg-red-700 shadow-lg transition-all">
<CiSearch className="w-5 h-5" />
Search Donor
</button>
</div>
</div>
</div>
    );
};

export default SearchDonor;