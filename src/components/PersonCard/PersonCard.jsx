import React from 'react';
import { map, toPairs } from 'ramda';
import { getRelevantInformation } from './PersonCard.helper';
import PersonDetail from './PersonDetail/PersonDetail';

const PersonCard = ({ data: person, id, selectedCategories }) => {
  return (
    <div className="w-[100%] min-h-[200px] bg-white rounded shadow-2xl p-5">
      <div className="h-6 rounded-sm bg-gray-200 mb-4 text-center">
        Star Wars - person <span className="font-bold">{id}</span>
      </div>
      {map(
        (detail) => (
          <PersonDetail key={detail[0]} detail={detail} />
        ),
        toPairs(getRelevantInformation(person, selectedCategories))
      )}
    </div>
  );
};

export default PersonCard;
