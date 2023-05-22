import React from 'react'
import styles from './Styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <Link to='/'>
          <div className={styles.leftArrow}>
          </div>
        </Link>
        <p>My Card - Statements</p>
    </div>
  )
}

export default Header