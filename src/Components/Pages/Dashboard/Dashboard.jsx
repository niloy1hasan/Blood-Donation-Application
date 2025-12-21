import useAuth from "../../../Hooks/useAuth";
import AdminStat from "./AdminStat";

const Dashboard = () => {
    const { user } = useAuth();
  
  return (
    <div className="p-6 min-h-screen font-inter space-y-8">

      <div className="bg-linear-to-r mb-12 from-red-900 to-red-700 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back, {user?.displayName}
        </h1>
        <p className="text-red-100 text-sm mt-5 max-w-xl">
          Thank you for being a life saver. Your contributions help connect
          donors with patients and support organizations through blood and
          funding.
        </p>
      </div>

      {(user.role === 'admin' || user.role === 'volunteer') && (
        <AdminStat></AdminStat>
      )}
    </div>
  );
};

export default Dashboard;