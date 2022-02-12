import React from 'react';

export const CardError = () => {
  return (
    <div className="w-[500px] max-w-[90%] bg-white rounded shadow-2xl">
      <div className="h-[200px] bg-gray-200 rounded-tr rounded-tl flex justify-center items-center">
        <p className="text-red-500 font-bold">Unexpected problem</p>
      </div>
    </div>
  );
};

export default React.memo(CardError);
