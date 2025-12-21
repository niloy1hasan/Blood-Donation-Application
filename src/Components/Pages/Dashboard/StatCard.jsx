
const StatCard = ({ stat }) => {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:translate-y-1.5 transition duration-300">
      {/* Icon */}
      <div
        className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white flex items-center justify-center text-xl shadow-lg"
      >
        {stat.icon}
      </div>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-gray-500 text-sm font-medium">
          {stat.title}
        </h2>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          {stat.count}
        </p>
      </div>
    </div>
  );
};

export default StatCard;