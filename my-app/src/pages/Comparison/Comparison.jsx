import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearComparison } from '../../store/slices/comparisonSlice'
import ComparisonTable from '../../components/ComparisonTable/ComparisonTable'
import styles from './Comparison.module.css'

const Comparison = () => {
  const dispatch = useDispatch()
  const comparedProducts = useSelector(state => state.comparison.comparedProducts)

  const handleClearComparison = () => {
    dispatch(clearComparison())
  }

  return (
    <div className={styles.comparison}>
      <div className={styles.header}>
        <h1>Сравнение товаров</h1>
        {comparedProducts.length > 0 && (
          <button 
            className={styles.clearButton}
            onClick={handleClearComparison}
          >
            Очистить сравнение
          </button>
        )}
      </div>

      <ComparisonTable />

      {comparedProducts.length > 0 && (
        <div className={styles.comparisonInfo}>
          <p>Максимальное количество товаров для сравнения: 4</p>
          <p>Товаров в сравнении: {comparedProducts.length}</p>
        </div>
      )}
    </div>
  )
}

export default Comparison