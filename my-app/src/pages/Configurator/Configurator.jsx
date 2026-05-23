import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../utils/data'
import { useProducts } from '../../hooks/useProducts'
import { selectComponent, removeComponent, checkCompatibility, clearConfigurator } from '../../store/slices/configuratorSlice'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Configurator.module.css'

const Configurator = () => {
  const dispatch = useDispatch()
  const { getProductsByCategory } = useProducts()
  const { selectedComponents, totalPrice, compatibility } = useSelector(state => state.configurator)

  const handleAddToConfigurator = (category, product) => {
    dispatch(selectComponent({ category, product }))
  }

  const handleRemoveComponent = (category) => {
    dispatch(removeComponent(category))
  }

  const handleClearConfigurator = () => {
    dispatch(clearConfigurator())
  }

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : categoryId
  }

  // Функция для получения спецификации сокета
  const getSocketInfo = (product) => {
    return product.specs.сокет || product.specs.socket || 'Не указан'
  }

  // Функция для получения короткого описания спецификаций
  const getShortSpecs = (product, category) => {
    switch (category) {
      case 'cpu':
        return `Ядра: ${product.specs.ядра}, Потоки: ${product.specs.потоки}`
      case 'gpu':
        return `Память: ${product.specs.память}`
      case 'ram':
        return `Объем: ${product.specs.объём}, Тип: ${product.specs.тип}`
      case 'storage':
        return `Объем: ${product.specs.ёмкость}`
      case 'psu':
        return `Мощность: ${product.specs.мощность}`
      case 'cooling':
        return `Тип: ${product.specs.тип}`
      case 'motherboard':
        return `Чипсет: ${product.specs.чипсет}`
      default:
        return ''
    }
  }

  return (
    <div className={styles.configurator}>
      <div className={styles.header}>
        <h1>Конфигуратор ПК</h1>
        <div className={styles.actions}>
          <button 
            className={styles.clearButton}
            onClick={handleClearConfigurator}
          >
            Очистить конфигуратор
          </button>
        </div>
      </div>

      <div className={styles.configuratorContent}>
        {/* Левая колонка - выбранные компоненты */}
        <div className={styles.selectedComponents}>
          <h2>Выбранные компоненты</h2>
          
          {compatibility.issues.length > 0 && (
            <div className={compatibility.isCompatible ? styles.compatibilityInfo : styles.compatibilityWarning}>
              <h3>{compatibility.isCompatible ? 'ℹ️ Информация:' : '⚠️ Обнаружены проблемы:'}</h3>
              <ul>
                {compatibility.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.componentsList}>
            {Object.entries(selectedComponents).map(([category, product]) => (
              <div key={category} className={styles.selectedComponent}>
                <div className={styles.componentHeader}>
                  <h3>{getCategoryName(category)}</h3>
                  <button 
                    onClick={() => handleRemoveComponent(category)}
                    className={styles.removeButton}
                    title="Удалить компонент"
                  >
                    ×
                  </button>
                </div>
                <div className={styles.componentInfo}>
                  <span className={styles.productName}>{product.name}</span>
                  <span className={styles.productSpec}>
                    {getShortSpecs(product, category)}
                  </span>
                  {(category === 'cpu' || category === 'motherboard') && (
                    <span className={styles.productSpec}>
                      Сокет: {getSocketInfo(product)}
                    </span>
                  )}
                  <span className={styles.productPrice}>BYN {product.price.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {Object.keys(selectedComponents).length > 0 && (
            <div className={styles.total}>
              <h3>Итого: BYN {totalPrice.toLocaleString()}</h3>
              {compatibility.isCompatible && compatibility.issues.length === 0 && (
                <p className={styles.compatibilitySuccess}>✅ Все компоненты совместимы</p>
              )}
            </div>
          )}

          {Object.keys(selectedComponents).length === 0 && (
            <div className={styles.empty}>
              <p>Выберите компоненты для сборки ПК</p>
              <p className={styles.emptyHint}>Начните с процессора и материнской платы</p>
            </div>
          )}
        </div>

        {/* Правая колонка - выбор компонентов */}
        <div className={styles.componentsSelection}>
          <h2>Выбор компонентов</h2>
          <div className={styles.categories}>
            {categories.map(category => (
              <div key={category.id} className={styles.category}>
                <h3>{category.name}</h3>
                <div className={styles.productsGrid}>
                  {getProductsByCategory(category.id).map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      onAddToConfigurator={handleAddToConfigurator}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configurator