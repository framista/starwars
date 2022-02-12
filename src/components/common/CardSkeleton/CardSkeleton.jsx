import React from 'react';

export const CardSkeleton = () => {
  return (
    <div className="w-[500px] max-w-[90%] bg-white rounded shadow-2xl mx-4">
      <div className="h-[200px] bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>
      <div className="p-5">
        <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
        <div className="grid gap-1">
          <div className="w-[40%] h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="w-[60%] h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="w-[65%] h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="w-[50%] h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardSkeleton);
