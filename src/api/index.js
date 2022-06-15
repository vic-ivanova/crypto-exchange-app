import axios from 'axios';
import { endpoints, huobiEndpoint } from './url';

export const getPriceInfo = async (ticker) => {
  const tasks = endpoints.map(endpoint => axios.get(endpoint + ticker.toUpperCase()));
  const results = await Promise.allSettled(tasks);
  const binance = results[0].value;
  const kraken = results[1].value;
  const bitfinex = results[2].value;

  // separate huobi api as uppercase chars not accepted
  const huobi = await axios.get(huobiEndpoint + ticker.toLowerCase());

  return { binance, kraken, huobi, bitfinex }
};