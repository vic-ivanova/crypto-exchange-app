import React from 'react';

const ExchangeLogo = ({ name, height, width }) => {
  return (
    <svg
      height={height}
      width={width}
      >
        <use xlinkHref={`/sprites.svg#${name}`} />
    </svg>
  );
};

export default ExchangeLogo;
