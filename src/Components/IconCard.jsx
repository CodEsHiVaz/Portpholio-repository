import React from 'react';

const IconCard = ({ src }) => {
  return (
    <div>
      <div
        className="
        d-flex justify-content-center 
        align-items-center m-2"
        // style={{width: 90, height: 90}}
        style={{ width: 150, height: 150 }}
      >

          <img className="img-fluid skillsImg" src={src} alt="icon" />
  

      </div>
    </div>
  );
};

export default IconCard;
