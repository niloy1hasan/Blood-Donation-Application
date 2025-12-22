import React from 'react';
import { MdError } from 'react-icons/md';

const DeleteModal = ({deleteModal, handleDelete, setSelected}) => {
    return (
        <div>
            <dialog ref={deleteModal}  className="modal font-inter select-none">
              <div className="modal-box">
                <h3 className="font-bold text-lg flex gap-2 items-center"><MdError className='text-red-600' size={24} /> <span>Confirm Delete</span></h3>
                <p className="py-4">Are you sure you want to Delete? You will lost the data permanently.</p>
                <div className="modal-action">
                  <form method="dialog" className="flex gap-1.5">
                    <button className="btn relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-transform duration-75 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden active:scale-[0.97] cursor-pointer bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 h-10 py-2 px-4">
                      <span onClick={()=>{setSelected(null)}} className="relative z-10 flex items-center gap-2">Cancel</span>
                      <div className="absolute inset-0 z-0"></div>
                    </button>
                    <button type="button" onClick={handleDelete} className="relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-transform duration-75 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden active:scale-[0.97] cursor-pointer text-slate-50! h-10 py-2 px-4 bg-red-600! hover:bg-red-700!">
                    <span className="relative z-10 flex items-center gap-2">Delete</span>
                    <div className="absolute inset-0 z-0"></div>
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
        </div>
    );
};

export default DeleteModal;