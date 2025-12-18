const UserTableSkeleton = () => {
  const rows = Array.from({ length: 6 });

  return (
    <div className="hidden md:block font-inter bg-white ps-3 rounded-xl animate-pulse">
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

        <tbody className="divide-y divide-gray-200">
          {rows.map((_, index) => (
            <tr key={index} className="py-4">
              {/* Name */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-3 w-40 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </td>

              {/* Role */}
              <td className="px-6">
                <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
              </td>

              {/* Status */}
              <td className="px-6">
                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
              </td>

              {/* Actions */}
              <td className="px-6 py-4 flex justify-end gap-4">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-16 bg-gray-300 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTableSkeleton;