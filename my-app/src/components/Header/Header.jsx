import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation()
  const cartItemsCount = useSelector(state => 
    state.cart.items.reduce((count, item) => count + item.quantity, 0)
  )
  const comparisonCount = useSelector(state => state.comparison.comparedProducts.length)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1>PC Master</h1>
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Главная
          </Link>
          <Link 
            to="/shop" 
            className={`${styles.navLink} ${location.pathname === '/shop' ? styles.active : ''}`}
          >
            Магазин
          </Link>
          <Link 
            to="/configurator" 
            className={`${styles.navLink} ${location.pathname === '/configurator' ? styles.active : ''}`}
          >
            Конфигуратор
          </Link>
          <Link 
            to="/comparison" 
            className={`${styles.navLink} ${location.pathname === '/comparison' ? styles.active : ''}`}
          >
            Сравнение ({comparisonCount})
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/cart" className={styles.cart}>
            Корзина ({cartItemsCount})
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header