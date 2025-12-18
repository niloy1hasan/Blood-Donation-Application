import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard/UserCard';
import { IoMdPersonAdd } from "react-icons/io";
import UserTableSkeleton from './UserTableSkeleton';
import MobileTableSkeleton from './MobileTableSkeleton';
import { RiUserForbidLine, RiUserAddLine, RiAdminLine, RiCloseLine, RiUserMinusLine } from "react-icons/ri";
import ActionModal from './UserCard/ActionModal';
import default_img from '../../../assets/profile-picture.png';
import UserFilterDropdown from './UserCard/UserFilterDropdown';

const statusColors = {
  active: "text-green-800",
  blocked: "text-red-600",
};

const AllUsers = () => {
    const [loadedUsers, setLoadedUsers] = useState([]);
    const [allUser, setAllUser] = useState(loadedUsers);
    const [loading, setLoading] = useState(true);
    const modalRef = useRef(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const statusRef = useRef(null);
    const [filter, setFilter] = useState("All Users");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://blood-donation-application-server-eight.vercel.app/users");
        setLoadedUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  useEffect(() => {
    if (filter === "All Users") {
      setAllUser(loadedUsers);
    } else if(filter === "Active Users") {
      setAllUser(loadedUsers.filter(user => user.status === "active"));
    } else if(filter === "Blocked Users") {
      setAllUser(loadedUsers.filter(user => user.status === "blocked"));
    }
  }, [filter, loadedUsers]);

  const showActionModal = (user) => {
  setSelectedUser(user);
  modalRef.current?.showModal();
  };

  const handleClose = () => {
    modalRef.current?.close();
    setSelectedUser(null);
  }

  const updateUserState = (email, updatedData) => {
    setAllUser(prev =>
      prev.map(user => (user.email === email ? { ...user, ...updatedData } : user))
    );

    setLoadedUsers(prev =>
      prev.map(user => (user.email === email ? { ...user, ...updatedData } : user))
    );
  };

  const handleBlockUser = async (email) => {
    const url = "https://blood-donation-application-server-eight.vercel.app/user/block";
    try {
      const res = await axios.patch( url, { email });
      console.log("User status updated:", );
      updateUserState(email, { status: res.data?.status });
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };


  const handleAdmin = (email) => {
    const url = 'https://blood-donation-application-server-eight.vercel.app/user/admin';
    axios.patch(url, { email })
      .then(res => {
        console.log('User promoted to admin:', res.data);
      updateUserState(email, { role: res.data?.role });
      })
      .catch(error => {
        console.error('Error promoting user to admin:', error);
      });
  }

  const handleVolunteer = (email) => {
    const url = 'https://blood-donation-application-server-eight.vercel.app/user/volunteer';
    axios.patch(url, { email })
      .then(res => {
        console.log('User added as volunteer:', res.data);
        updateUserState(email, { role: res.data?.role });
      })
      .catch(error => {
        console.error('Error adding user as volunteer:', error);
      });
  }


  const handleFilterSelect = (option) => {
    setFilter(option);
  };
  
    return (
        <>
        <div className="min-h-screen flex flex-col p-6 pb-16">
            <div className='pb-6'>
                <h2 className="text-xl font-bold text-gray-800">All Users</h2>
                <p className="text-gray-500 mt-1">
                  Manage and oversee all registered users on the platform.
                </p>
                <div className='flex lg:justify-end'>
                  <UserFilterDropdown onSelect={handleFilterSelect} />
                </div>
            </div>

            {/* desktop table */}
            {loading ? (<UserTableSkeleton></UserTableSkeleton>) : (
              <div className='hidden md:block bg-white ps-3 rounded-xl'>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                {allUser.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={user.photoURL || default_img}
                            alt={user.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name || user.displayName}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 whitespace-nowrap">
                      <div className="text-sm badge badge-outline text-orange-600">{user.role}</div>
                    </td>
                    <td className="px-6 whitespace-nowrap">
                      <span ref={statusRef}
                        className={`px-2 badge badge-outline  inline-flex text-sm leading-5 font-semibold rounded-full ${statusColors[user.status]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap flex gap-4 justify-end font-medium">
                      <button onClick={()=> handleAdmin(user.email)} className={`flex items-center justify-center gap-1.5 font-semibold text-gray-400 ${user?.role === 'admin' ? 'hover:text-red-700' : 'hover:text-green-700'}`}>{user?.role === 'admin' ? <RiUserMinusLine size={18} /> : <IoMdPersonAdd size={18} />} Admin</button>
                      <button onClick={()=> handleVolunteer(user.email)} className={`flex items-center justify-center gap-1.5 font-semibold text-gray-400 ${user?.role === 'volunteer' ? 'hover:text-red-700' : 'hover:text-green-700'}`}>{user?.role === 'volunteer' ? <RiUserMinusLine size={18} /> : <IoMdPersonAdd size={18} />} Volunteer</button>
                      <button onClick={()=> handleBlockUser(user.email)} className={`btn text-sm text-white ${user.status === 'blocked' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}>{ user.status === 'blocked' ? 'Unblock' : 'Block'}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
            )}
            
            {/* mobile table */}
            {loading ? (<MobileTableSkeleton />): (
              <div className='md:hidden'>
              {allUser.map(user => (
                <UserCard
                  key={user._id}
                  user={user}
                  showActionModal={showActionModal}
                />
              ))}
            </div>
            )}

              <ActionModal
                ref={modalRef}
                user={selectedUser}
                onClose={handleClose}
                handleAdmin={handleAdmin}
                handleVolunteer={handleVolunteer}
                handleBlockUser={handleBlockUser}
              />
        </div>
        </>
    );
};

export default AllUsers;