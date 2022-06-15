import React from 'react';
import { useSelector } from 'react-redux';
import { Pairs } from '../components';

const Results = () => {
  const searchState = useSelector(state => state.search);
  const pair = searchState[0].pair.toUpperCase();

  return (
    <Pairs pair={pair} />
  )
}

export default Results;