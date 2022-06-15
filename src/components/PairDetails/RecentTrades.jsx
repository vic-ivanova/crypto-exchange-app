import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getKrakenTrades, getBinanceTrades, getBitfinexTrades, getHuobiTrades } from '../../api/trades';
import styles from './RecentTrades.module.css';
import Divider from '../Divider/Divider';

export const RecentTrades = () => {
  const location = useLocation();
  const searchState = useSelector(state => state.search);
  const selectedExchangeState = useSelector(state => state.selected);
  const exchange = selectedExchangeState.exchange;
  const pair = searchState[0].pair.toUpperCase();
  const [data, setData] = useState();

  const fetchData = async () => {
    // fetch data depending on selected exchange
    if (exchange === 'kraken') {
      const res = await getKrakenTrades(pair)
      .catch((err) => {
        console.log(err);
      });

      const result = Object.values(res.data.result)[0].slice(0, 10).map((item) => ({ 
        price: item[0], 
        amount: item[1], 
        buyOrSell: item[3] === 's' ? 'Sell' : 'Buy', 
        time: item[2] 
      }));

      setData(result);

    } else if (exchange === 'binance') {
      const res = await getBinanceTrades(pair, 10)
      .catch((err) => {
        console.log(err);
      });

      const result = res.data.map((item) => ({ 
        price: item.price, 
        amount: item.qty, 
        buyOrSell: item.isBuyerMaker === true ? 'Sell' : 'Buy', 
        time: item.time 
      }));

      setData(result);

    } else if (exchange === 'bitfinex') {
      const res = await getBitfinexTrades(pair, 10)
      .catch((err) => {
        console.log(err);
      });

      const result = res.data.map((item) => ({ 
        price: item.price, 
        amount: item.amount, 
        buyOrSell: item.type[0].toUpperCase() + item.type.substring(1), 
        time: item.timestamp 
      }));

      setData(result);

    } else if (exchange === 'huobi') {
      const res = await getHuobiTrades(pair, 10)
      .catch((err) => {
        console.log(err);
      });

      const result = res.data.data.map((item) => ({ 
        price: item.data[0].price, 
        amount: item.data[0].amount, 
        buyOrSell: item.data[0].direction[0].toUpperCase() + item.data[0].direction.substring(1), 
        time: item.data[0].ts 
      }));

      setData(result);
      
    } else {
      return;
    }
  }

  useEffect(() => {
    if (location.pathname.includes('details')) {
      fetchData();
    }
  }, [location.pathname]);

  return (
    <div className={styles.tradesContainer}>
      <div className={styles.titleWrapper}>
        <div>Price</div>
        <div>Amount</div>
        <div>Type</div>
        <div>Timestamp</div>
      </div>
      <Divider className={styles.tradesDivider} />
      <div className={styles.trades}>
        {data && data.map((item, i) => {
          return (
            <div className={styles.singleTrade} key={i}>
              <div>{item.price}</div>
              <div>{item.amount}</div>
              <div>{item.buyOrSell}</div>
              <div>{item.time}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}