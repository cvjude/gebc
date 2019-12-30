import React from 'react';
// import "./svg.scss";

export default ({ fill, width, height, animate }) => {
  return (
    <div style={{ display: 'inline-block', height: height }}>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        fill={fill}
        width={width}
        height={height}
        viewBox='0 0 487 487'
        style={{ enableBackground: 'new 0 0 487 487' }}
      >
        <g>
          <path
            d='M482,234.839l-116.5-67.261c-4.783-2.761-10.898-1.122-13.66,3.66c-2.762,4.783-1.122,10.898,3.66,13.66l84.213,48.62H10
		c-5.523,0-10,4.478-10,10c0,5.521,4.477,10,10,10h429.646L355.5,302.101c-4.783,2.762-6.422,8.877-3.66,13.66
		c1.853,3.208,5.213,5.002,8.669,5.002c1.696,0,3.416-0.434,4.991-1.342L482,252.159c3.094-1.786,5-5.088,5-8.66
		C487,239.927,485.094,236.625,482,234.839z'
          />
        </g>
      </svg>
    </div>
  );
};
