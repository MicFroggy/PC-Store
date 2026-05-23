import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  sortCartByPrice 
} from '../../store/slices/cartSlice'
import styles from './Cart.module.css'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, total } = useSelector(state => state.cart)
  const [sortOrder, setSortOrder] = React.useState('asc')

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  //Сортировка корзины
  const handleSortCart = () => {
    dispatch(sortCartByPrice({ order: sortOrder }))
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  if (items.length === 0) {
    return (
      <div className={styles.cart}>
        <div className={styles.header}>
          <h1>Корзина</h1>
        </div>
        <div className={styles.empty}>
          <h2>Корзина пуста</h2>
          <p>Добавьте товары из магазина или конфигуратора</p>
          <Link to="/shop" className={styles.shopLink}>
            Перейти в магазин
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h1>Корзина</h1>
        <div className={styles.cartActions}>
          <button 
            className={styles.sortButton}
            onClick={handleSortCart}
            title={`Сортировать по цене (${sortOrder === 'asc' ? 'по возрастанию' : 'по убыванию'})`}
          >
            📊 Сортировать по цене
          </button>
          <button 
            className={styles.clearButton}
            onClick={handleClearCart}
          >
            Очистить корзину
          </button>
        </div>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.items}>
          {items.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <div className={styles.itemImage}>
                  {item.name}
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemBrand}>{item.brand}</p>
                  <div className={styles.itemSpecs}>
                    Цена за шт: BYN {item.price.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className={styles.itemControls}>
                <div className={styles.quantity}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.price}>
                  BYN {(item.price * item.quantity).toLocaleString()}
                </div>

                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveFromCart(item.id)}
                  aria-label="Удалить из корзины"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryContent}>
            <h3>Итого</h3>
            
            <div className={styles.summaryRow}>
              <span>Товары ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
              <span>BYN {total.toLocaleString()}</span>
            </div>
            
            <div className={styles.summaryRow}>
              <span>Доставка</span>
              <span className={styles.free}>Бесплатно</span>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Общая сумма</span>
              <span>BYN {total.toLocaleString()}</span>
            </div>

            <Link to="/checkout" className={styles.checkoutButton}>
              Перейти к оформлению
            </Link>

            <Link to="/shop" className={styles.continueShopping}>
              Продолжить покупки
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart