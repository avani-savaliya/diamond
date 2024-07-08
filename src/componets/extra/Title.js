import React from 'react';

const Title = (props) => {
  const { name, subName, className } = props;
  return (
    <div className={`mainTitle d-flex align-items-center justify-content-between cursor-pointer ${className || ''}`}>
      <div className={"title fw-600"}>{subName ? subName : name}</div>
    </div>
  );
}

export default Title;
