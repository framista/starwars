import React from 'react';

export const CardSkeleton = () => (
  <div className="w-[500px] max-w-[90%] bg-white rounded shadow-2xl p-5">
    <div className="h-6 rounded-sm bg-gray-200 animate-pulse mb-4" />
    <div className="grid gap-1">
      <div className="w-[40%] h-4 rounded-sm bg-gray-200 animate-pulse" />
      <div className="w-[60%] h-4 rounded-sm bg-gray-200 animate-pulse" />
      <div className="w-[65%] h-4 rounded-sm bg-gray-200 animate-pulse" />
      <div className="w-[50%] h-4 rounded-sm bg-gray-200 animate-pulse" />
    </div>
  </div>
);

export default React.memo(CardSkeleton);
