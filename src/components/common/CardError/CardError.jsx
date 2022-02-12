import React from 'react';

export const CardError = () => (
  <div className="w-[100%] min-h-[200px] shadow-2xl bg-gray-200 rounded flex justify-center items-center">
    <p className="text-red-500 font-bold">Unexpected problem</p>
  </div>
);

export default React.memo(CardError);
