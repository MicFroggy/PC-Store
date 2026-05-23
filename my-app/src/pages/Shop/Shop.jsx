import React, { useState, useMemo } from 'react'
import { categories } from '../../utils/data'
import { useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Shop.module.css'

const Shop = () => {
  const { products, filters, updateFilters } = useProducts()
  const [sortBy, setSortBy] = useState('name')

  const brands = useMemo(() => {
    return [...new Set(products.map(product => product.brand))]
  }, [products])

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [products, sortBy])

  const handleFilterChange = (filterType, value) => {
    updateFilters({ [filterType]: value })
  }

  return (
    <div className={styles.shop}>
      <h1>Магазин комплектующих</h1>
      
      <div className={styles.shopContent}>
        <aside className={styles.filters}>
          <div className={styles.filterGroup}>
            <h3>Категория</h3>
            <select 
              value={filters.category} 
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className={styles.select}
            >
              <option value="">Все категории</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <h3>Бренд</h3>
            <select 
              value={filters.brand} 
              onChange={(e) => handleFilterChange('brand', e.target.value)}
              className={styles.select}
            >
              <option value="">Все бренды</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <h3>Цена</h3>
            <div className={styles.priceRange}>
              <input
                type="number"
                placeholder="От"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value) || 0)}
                className={styles.priceInput}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="До"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value) || 100000)}
                className={styles.priceInput}
              />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <h3>Поиск</h3>
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </aside>

        <main className={styles.products}>
          <div className={styles.productsHeader}>
            <div className={styles.resultsCount}>
              Найдено товаров: {sortedProducts.length}
            </div>
            <div className={styles.sort}>
              <label htmlFor="sort">Сортировка:</label>
              <select 
                id="sort"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.select}
              >
                <option value="name">По названию</option>
                <option value="price-low">По цене (сначала дешевые)</option>
                <option value="price-high">По цене (сначала дорогие)</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className={styles.noResults}>
              <h3>Товары не найдены</h3>
              <p>Попробуйте изменить параметры фильтрации</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Shop