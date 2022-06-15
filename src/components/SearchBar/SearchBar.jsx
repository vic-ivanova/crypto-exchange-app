import React from 'react';
import Input from '../Input/Input';
import { ImSearch } from 'react-icons/im';
import { CgClose } from 'react-icons/cg';
import styles from './SearchBar.module.css';
import Button from '../Button/Button';

const SearchBar = ({ searchKey, onClear, onClick, onChange }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>Get quick access to the current market prices</p>
      </div>
      <div className={styles.searchBox}>
        <form>
          <div className={styles.searchInput}>
            <Input
              placeholder='Search Ticker'
              value={searchKey}
              onChange={onChange}
            />
            {searchKey && <CgClose size={28} onClick={onClear} />}
          </div>
          <Button
            type='submit'
            className={styles.searchButton}
            onClick={onClick}
          >
            <ImSearch size={20} />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;