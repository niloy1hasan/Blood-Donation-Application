import React, { forwardRef } from "react";
import { RiAdminLine, RiUserAddLine, RiUserForbidLine, RiCloseLine } from "react-icons/ri";

const ActionModal = forwardRef(({ onClose, handleBlockUser, user, handleVolunteer, handleAdmin }, ref) => {
  return (
    <dialog
      ref={ref}
      className="modal modal-bottom"
      onClick={(e) => {
        if (e.target.tagName === "DIALOG") onClose();
      }}
    >
      <div className="modal-box rounded-tl-3xl rounded-tr-3xl lg:rounded-lg relative p-3">
        
        <div className="flex justify-center mb-3">
          <span className="bg-gray-300 w-10 h-1 rounded-full"></span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 outline-none text-gray-400 hover:text-gray-700"
        >
          <RiCloseLine size={24} />
        </button>

        <div className="flex flex-col gap-3">

          <button onClick={()=>{onClose(); handleAdmin(user.email)}} className="flex flex-col gap-1 p-2 hover:bg-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <RiAdminLine size={24} />
              <span className="font-medium">{user?.role === 'admin' ? 'Remove Admin' : 'Add Admin'}</span>
            </div>
            <p className="text-xs text-gray-500">
              {user?.role === 'admin' ? 'Remove admin permissions from this user.' : 'Give this user admin permissions.'}
            </p>
          </button>

          <button onClick={()=>{onClose(); handleVolunteer(user.email)}} className="flex flex-col gap-1 p-2 hover:bg-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <RiUserAddLine size={24} />
              <span className="font-medium">{user?.role === 'volunteer' ? 'Remove Volunteer' : 'Add Volunteer'}</span>
            </div>
            <p className="text-xs text-gray-500">
              {user?.role === 'volunteer' ? 'Remove this user from volunteers.' : 'Allow this user to volunteer.'}
            </p>
          </button>

          <button onClick={()=>{onClose(); handleBlockUser(user.email)}} className="flex flex-col gap-1 p-2 hover:bg-red-50 rounded-lg">
            <div className="flex items-center gap-3 text-red-600">
              <RiUserForbidLine size={24} />
              <span className="font-medium">{user?.status === 'Blocked' ? 'Unblock' : 'Block'}</span>
            </div>
            <p className="text-xs text-red-500">
              {user?.status === 'Blocked' ? 'Unblock this user.' : 'Block this user from the platform.'} 
            </p>
          </button>

        </div>
      </div>
    </dialog>
  );
});

export default ActionModal;