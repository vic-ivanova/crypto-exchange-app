import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { changeSearchValue, resetSearch } from '../redux/actions/searchActions';
import { resetPriceInfo, changePriceInfo } from '../redux/actions/exchangeActions';
import { getPriceInfo } from '../api';
import { Header, SearchBar } from '../components';

const HeaderSearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noResult = 'no result';
  const location = useLocation();
  const searchState = useSelector(state => state.search);
  const pair = searchState[0].pair.toUpperCase();

  const fetchData = async () => {
    const res = await getPriceInfo(searchKey || pair)
    .catch((err) => {
      console.log(err);
    });

    dispatch( // dispatch price data from api 
      changePriceInfo([
        {
          price: res.binance && parseFloat(res.binance.data.price),
          error: !res.binance && noResult,
          title: 'binance'
        },
        {
          price: res.bitfinex && parseFloat(res.bitfinex.data.last_price),
          error: !res.bitfinex && noResult,
          title: 'bitfinex'
        },
        {
          price: res.huobi.data.tick && parseFloat(res.huobi.data.tick.close), 
          error: !res.huobi.data.tick && noResult,
          title: 'huobi'
        },
        {
          price: res.kraken.data.result && parseFloat(Object.values(res.kraken.data.result)[0].c[0]), 
          error: !res.kraken.data.result && noResult,
          title: 'kraken'
        }
      ] 
    ));
  }

  const handleClick = (e) => {
    // search button
    e.preventDefault();

    dispatch(
      changeSearchValue({
        pair: searchKey.toUpperCase()
      })
    );

    navigate(`/${searchKey}`);
    fetchData();
  }

  const handleClear = () => {
    // clear search button
    dispatch(
      resetSearch(),
    );

    dispatch(
      resetPriceInfo()
    );

    setSearchKey('');
    navigate('/');
  }

  useEffect(() => {
    if (location.pathname.replace(/\//g, "").toUpperCase() === searchKey && pair) {
      fetchData();
    } 
  }, [location.pathname, searchKey, pair])
  
  useEffect(() => {
    if (location.pathname !== '/' && pair.length !== 0) {
      setSearchKey(location.pathname.replace(/\//g, "").toUpperCase())
    }
  }, [location.path, pair.length])
  
  return (
    <>
      <Header onClick={handleClear} />
      <SearchBar 
        searchKey={searchKey.replace(/\//g, "").toUpperCase()} 
        onClear={handleClear} 
        onClick={handleClick} 
        onChange={(e) => { setSearchKey(e.target.value)}} 
      />
    </>
  )
}

export default HeaderSearch;