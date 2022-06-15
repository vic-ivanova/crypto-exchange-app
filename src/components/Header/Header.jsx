import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onClick }) => {
  return (
    <div className={styles.header}>
      <Link to='/' onClick={onClick}>
        <div className={styles.headerTitle}>
          <FaBitcoin className={styles.icon} size={65} />
          <h1>Crypto<br/><span className={styles.purple}>Exchange</span></h1>
        </div>
      </Link>
    </div>
  )
}

export default Header;