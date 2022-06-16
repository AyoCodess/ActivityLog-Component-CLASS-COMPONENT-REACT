import React, { useState } from 'react';
import { cardInfo } from '../Data';
import JSONPretty from 'react-json-prettify';

function DataCard() {
  const [hide, setHide] = useState(false);

  const showData = () => {
    hide ? setHide(false) : setHide(true);
  };

  return (
    <>
      <button
        onClick={showData}
        className='mb-2 border-2 border-gray-200 rounded-md p-2'>
        {hide ? 'View Raw Data' : 'Hide Raw Data'}
      </button>
      {!hide && (
        <div className='  w-11/12  h-[30rem] overflow-scroll lg:w-2/3 border-2 border-gray-200 rounded-md shadow mb-10'>
          <JSONPretty json={cardInfo} padding={2}></JSONPretty>
        </div>
      )}
    </>
  );
}

export default DataCard;
