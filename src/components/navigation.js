import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Logo</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/shop/">Shop</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/ourwork/">Our Work</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
