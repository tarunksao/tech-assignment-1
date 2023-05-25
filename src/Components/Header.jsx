import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles['header-container']}>
        <Link to='/'>
          <div className={styles['left-arrow']}>
          </div>
        </Link>
        <p>My Card - Statements</p>
    </div>
  )
}

export default Header