import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Pair.module.css';
import { selectedExchange } from '../../redux/actions/exchangeActions';
import { Loader, ExchangeLogo } from '../../components';

const Pairs = ({ pair }) => {
  const dispatch = useDispatch();
  const exchangeState = useSelector(state => state.exchange);

  const handleClick = (name) => {
    dispatch(
      selectedExchange({
        exchange: name
      })
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <p>Price results for {pair}</p>
      </div>
      {exchangeState.length !== 0 ? (
          <div className={styles.exchangeContainer}>
            {exchangeState.map((exchange, i) => {
              return (
                <div key={i} className={styles.singleExchange}>
                  <ExchangeLogo name={exchange.title} height={28} width={140} />
                  {exchange.price && (
                    <div onClick={() => {handleClick(exchange.title)}}>
                      <Link to={`/${pair}/details`}>
                        <div className={styles.price}>{exchange.price}</div>
                      </Link>
                    </div>
                  )}
                  {exchange.error && <div className={styles.price}>{exchange.error}</div>}
                </div>
              )
            })}
          </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Pairs;