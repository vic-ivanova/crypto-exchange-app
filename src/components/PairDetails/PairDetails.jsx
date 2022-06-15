import React, { useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { RecentTrades } from './RecentTrades';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { resetSelectedExchange } from '../../redux/actions/exchangeActions';

const PairDetails = ({ pair }) => {
  const exchangeState = useSelector(state => state.selected);
  const { hide, show, ModalHook} = useModal();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // open modal when on /details path
    if (location.pathname.includes('details')) {
      show();
    }
  }, [show, location.pathname]);

  const handleClick = () => {
    hide();
    navigate(`/${pair}`);
    dispatch(resetSelectedExchange(null));
  }

  return (
    <ModalHook>
      <Modal
        title={`${exchangeState.exchange.toUpperCase()} - ${pair} - LAST TRADES`}
        hide={handleClick}
        children={<RecentTrades />}
      />
    </ModalHook>
  )
}

export default PairDetails;