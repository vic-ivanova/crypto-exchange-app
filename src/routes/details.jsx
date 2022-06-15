import React from 'react';
import { useSelector } from 'react-redux';
import { Pairs, PairDetails } from '../components';

const Details = () => {
  const searchState = useSelector(state => state.search);
  const pair = searchState[0].pair.toUpperCase();

  return (
    <>
      <Pairs pair={pair} />
      <PairDetails pair={pair} />
    </>
  )
}

export default Details;