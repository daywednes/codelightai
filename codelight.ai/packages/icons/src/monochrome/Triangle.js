import React from 'react';

export default function Triangle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M21,20.794H3a1,1,0,0,1-.86621-1.5l9-15.5879a1.04009,1.04009,0,0,1,1.73242,0l9,15.5879A1,1,0,0,1,21,20.794Z" />
    </svg>
  );
}
