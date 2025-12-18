import React from "react";
import { BsThreeDots } from "react-icons/bs";
import default_img from '../../../../assets/profile-picture.png';

const UserCard = ({ user, showActionModal }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-3 hover:bg-gray-50 transition">
      
      {/* User Info */}
      <div className="flex items-center">
        <img
          src={user?.photoURL || default_img}
          alt={user.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <div className="text-gray-900 font-semibold">
            {user.displayName || user.name}
          </div>
          <div className="text-gray-400 text-xs">{user.email}</div>
          <div className="mt-1 flex gap-2">
            <span className="badge badge-outline text-[11px] text-red-600">
              {user.role}
            </span>
            <span className={`badge badge-outline text-[11px] ${user.status === 'blocked' ? 'text-red-600' : 'text-green-600'}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Three dots */}
      <div onClick={() => showActionModal(user)} className="flex justify-end items-center h-20 w-20">
        <BsThreeDots
        className="cursor-pointer text-gray-500"
      />
      </div>
    </div>
  );
};

export default UserCard;