import React from 'react';

const MobileTableSkeleton = () => {
    return (
        <div className="md:hidden">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg mb-3 animate-pulse"
                >
                    {/* Left */}
                    <div className="flex items-center">
                        {/* Avatar */}
                        <div className="h-12 w-12 rounded-full bg-gray-300"></div>

                        {/* Text */}
                        <div className="ml-4 space-y-2">
                            <div className="h-4 w-32 bg-gray-300 rounded"></div>
                            <div className="h-3 w-40 bg-gray-200 rounded"></div>

                            {/* Badges */}
                            <div className="flex gap-2">
                                <div className="h-4 w-12 bg-gray-300 rounded-full"></div>
                                <div className="h-4 w-14 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Three dots */}
                    <div className="h-5 w-5 bg-gray-300 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default MobileTableSkeleton;