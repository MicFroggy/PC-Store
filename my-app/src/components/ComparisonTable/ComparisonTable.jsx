import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromComparison } from '../../store/slices/comparisonSlice'
import styles from './ComparisonTable.module.css'

const ComparisonTable = () => {
  const dispatch = useDispatch()
  const comparedProducts = useSelector(state => state.comparison.comparedProducts)

  if (comparedProducts.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>Нет товаров для сравнения</h3>
        <p>Добавьте товары для сравнения из магазина или конфигуратора</p>
      </div>
    )
  }

  const allSpecs = comparedProducts.reduce((specs, product) => {
    Object.keys(product.specs).forEach(spec => {
      if (!specs.includes(spec)) {
        specs.push(spec)
      }
    })
    return specs
  }, [])

  const handleRemoveFromComparison = (productId) => {
    dispatch(removeFromComparison(productId))
  }

  const handleImageError = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Характеристика</th>
            {comparedProducts.map(product => (
              <th key={product.id} className={styles.productHeader}>
                <button 
                  className={styles.removeBtn}
                  onClick={() => handleRemoveFromComparison(product.id)}
                  aria-label="Удалить из сравнения"
                >
                  ×
                </button>
                <div className={styles.productInfo}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={handleImageError}
                    />
                    <div className={styles.imagePlaceholder}>
                      {product.name}
                    </div>
                  </div>
                  <div className={styles.productName}>{product.name}</div>
                  <div className={styles.productPrice}>₽{product.price.toLocaleString()}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allSpecs.map(spec => (
            <tr key={spec}>
              <td className={styles.specName}>{spec}</td>
              {comparedProducts.map(product => (
                <td key={product.id} className={styles.specValue}>
                  {product.specs[spec] || '-'}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Рейтинг</td>
            {comparedProducts.map(product => (
              <td key={product.id} className={styles.rating}>
                {'★'.repeat(Math.floor(product.rating))} ({product.rating})
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable