import React, { useState } from 'react';
import { ModalPortal } from '../components/Modal/ModalPortal';

export const useModal = () => {
  const [ isActive, setIsActive ] = useState(false);
  
  const show = () => setIsActive(true);
  const hide = () => setIsActive(false);
  
  const ModalHook = ({ children }) => (
    <>
      { isActive && <ModalPortal>{children}</ModalPortal> }
    </>
  );
  
  return {
    show, 
    hide, 
    ModalHook
  }
}