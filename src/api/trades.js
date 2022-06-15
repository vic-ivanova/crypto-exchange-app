import axios from 'axios';

export const getKrakenTrades = async (ticker) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  try {
    if (ticker.length < 1) {
      console.log('Symbol is empty');
      return;
    }
    
    const res = await axios.get(`https://api.kraken.com/0/public/Trades?pair=${ticker}`, { headers });

    return res;
  } catch(error) {
    console.error('error',error);
  }
};

export const getBitfinexTrades = async (ticker, limit) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  try {
    if (ticker.length < 1) {
      console.log('Symbol is empty');
      return;
    }
    
    const res = await axios.get(`https://api.bitfinex.com/v1/trades/${ticker}?limit_trades=${limit}`, { headers });

    return res;
  } catch(error) {
    console.error('error',error);
  }
};

export const getHuobiTrades = async (ticker, limit) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  try {
    if (ticker.length < 1) {
      console.log('Symbol is empty');
      return;
    }
    
    const res = await axios.get(`https://api.huobi.pro/market/history/trade?symbol=${ticker.toLowerCase()}&size=${limit}`, { headers });

    return res;
  } catch(error) {
    console.error('error',error);
  }
};

export const getBinanceTrades = async (ticker, limit) => {
  const headers = {
    'Content-Type': 'application/json',
  }
  
  try {
    if (ticker.length < 1) {
      console.log('Symbol is empty');
      return;
    }
    
    const res = await axios.get(`https://api.binance.com/api/v3/trades?symbol=${ticker}&limit=${limit}`, { headers });

    return res;
  } catch(error) {
    console.error('error',error);
  }
};