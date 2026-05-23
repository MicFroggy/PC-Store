import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'
import { addToComparison } from '../../store/slices/comparisonSlice'
import styles from './ProductCard.module.css'

const ProductCard = React.forwardRef(({ product, onAddToConfigurator }, ref) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleAddToComparison = () => {
    dispatch(addToComparison(product))
  }

  const handleAddToConfigurator = () => {
    if (onAddToConfigurator) {
      onAddToConfigurator(product.category, product)
    }
  }

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'flex'
  }

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.image}>
        <img 
          src={product.image} 
          alt={product.name}
          onError={handleImageError}
        />
        <div className={styles.imagePlaceholder}>
          {product.name}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.brand}>{product.brand}</p>
        
        <div className={styles.specs}>
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className={styles.spec}>
              <span className={styles.specKey}>{key}:</span>
              <span className={styles.specValue}>{value}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.price}>BYN {product.price.toLocaleString()}</div>
        
        <div className={styles.rating}>
          {'★'.repeat(Math.floor(product.rating))}
          <span className={styles.ratingValue}>{product.rating}</span>
        </div>
        
        <div className={styles.actions}>
          <button 
            className={styles.addToCart}
            onClick={handleAddToCart}
          >
            В корзину
          </button>
          <button 
            className={styles.compare}
            onClick={handleAddToComparison}
          >
            Сравнить
          </button>
          {onAddToConfigurator && (
            <button 
              className={styles.configurator}
              onClick={handleAddToConfigurator}
            >
              В конфигуратор
            </button>
          )}
        </div>
      </div>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard