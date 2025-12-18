const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-inter flex justify-center mb-16 animate-pulse">
      <div className="w-full max-w-xl lg:max-w-2xl overflow-hidden bg-white shadow-xl">
        
        {/* Top Profile Section */}
        <div className="relative bg-red-800 p-6 rounded-bl-2xl rounded-br-2xl">
          {/* Edit button placeholder */}
          <div className="absolute right-4 top-4 h-7 w-16 rounded-full bg-white/30" />

          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-white/30 border-4 border-white" />

            {/* Name */}
            <div className="mt-4 h-6 w-48 bg-white/40 rounded-md" />

            {/* Email */}
            <div className="mt-2 h-4 w-56 bg-white/30 rounded-md" />

            {/* Blood group */}
            <div className="mt-3 h-4 w-32 bg-white/30 rounded-md" />

            {/* Location */}
            <div className="mt-2 h-4 w-44 bg-white/30 rounded-md" />
          </div>
        </div>

        {/* Details Section */}
        <div className="p-5 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              {/* Label */}
              <div className="h-3 w-20 bg-gray-200 rounded-md mb-2" />
              {/* Input */}
              <div className="h-10 w-full bg-gray-100 rounded-xl border border-gray-200" />
            </div>
          ))}

          {/* Button */}
          <div className="h-11 w-full bg-gray-200 rounded-xl mt-6" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;