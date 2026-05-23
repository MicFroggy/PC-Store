import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../store/slices/cartSlice'
import styles from './Checkout.module.css'

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items, total } = useSelector(state => state.cart)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
    paymentMethod: 'card'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (items.length === 0) {
      alert('Корзина пуста! Добавьте товары перед оформлением заказа.')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      console.log('Заказ оформлен:', {
        ...formData,
        items,
        total,
        orderId: 'ORD-' + Date.now()
      })
      
      setIsSubmitting(false)
      setOrderSuccess(true)
      dispatch(clearCart())
      
      // Через 3 секунды редирект на главную
      setTimeout(() => {
        navigate('/')
      }, 10000)
    }, 1500)
  }

  const handleBackToCart = () => {
    navigate('/cart')
  }

  if (orderSuccess) {
    return (
      <div className={styles.checkout}>
        <div className={styles.successMessage}>
          <h1>✅ Заказ успешно оформлен!</h1>
          <p>Ваш заказ №ORD-{Date.now().toString().slice(-8)} принят в обработку.</p>
          <p>С вами свяжется наш менеджер для подтверждения заказа.</p>
          <p className={styles.redirectMessage}>Через 10 секунд вы будете перенаправлены на главную страницу...</p>
          <button 
            onClick={() => navigate('/')}
            className={styles.backButton}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.header}>
        <h1>Оформление заказа</h1>
        <button 
          onClick={handleBackToCart}
          className={styles.backButton}
        >
          ← Вернуться в корзину
        </button>
      </div>

      <div className={styles.checkoutContent}>
        <div className={styles.orderSummary}>
          <h2>Ваш заказ</h2>
          <div className={styles.summaryItems}>
            {items.map(item => (
              <div key={item.id} className={styles.summaryItem}>
                <span className={styles.itemName}>{item.name} × {item.quantity}</span>
                <span className={styles.itemPrice}>
                  BYN {(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.summaryTotal}>
            <span>Итого:</span>
            <span>BYN {total.toLocaleString()}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <h2>Данные для доставки</h2>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">Имя *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Введите ваше имя"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Фамилия *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Введите вашу фамилию"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="example@mail.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+375 (29) XXX-XX-XX"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Адрес доставки *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Улица, дом, квартира"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="city">Город *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="Минск"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="postalCode">Почтовый индекс</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="220000"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="paymentMethod">Способ оплаты</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="card">Банковская карта</option>
              <option value="cash">Наличные при получении</option>
              <option value="online">Онлайн-оплата</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="notes">Пожелания к заказу</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Дополнительные пожелания, комментарии к заказу..."
              rows="4"
              className={styles.textarea}
            />
          </div>

          <div className={styles.formActions}>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting || items.length === 0}
            >
              {isSubmitting ? 'Оформление...' : 'Подтвердить заказ'}
            </button>
            <button 
              type="button"
              onClick={handleBackToCart}
              className={styles.cancelButton}
            >
              Отмена
            </button>
          </div>

          <p className={styles.requiredNote}>* Обязательные поля для заполнения</p>
        </form>
      </div>
    </div>
  )
}

export default Checkout