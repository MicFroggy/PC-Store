import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../utils/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Home.module.css'

const Home = () => {
  // Функция для получения популярных товаров из трех категорий
  const getFeaturedProducts = () => {
    // Получаем товары из нужных категорий
    const cpuProducts = products.filter(product => product.category === 'cpu')
    const gpuProducts = products.filter(product => product.category === 'gpu')
    const motherboardProducts = products.filter(product => product.category === 'motherboard')
    
    // Сортируем по рейтингу и берем топ-2 из каждой категории
    const topCpu = cpuProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 2)
    
    const topGpu = gpuProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 2)
    
    const topMotherboard = motherboardProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 2)
    
    // Объединяем все товары
    return [...topCpu, ...topGpu, ...topMotherboard]
  }

  const featuredProducts = getFeaturedProducts()

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>PC Master - Магазин комплектующих для ПК</h1>
          <p>Соберите компьютер своей мечты с нашим онлайн-конфигуратором</p>
          <div className={styles.heroButtons}>
            <Link to="/configurator" className={styles.primaryButton}>
              Собрать ПК
            </Link>
            <Link to="/shop" className={styles.secondaryButton}>
              В магазин
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <h2>Популярные товары</h2>
        <p className={styles.featuredSubtitle}>
          Лучшие процессоры, видеокарты и материнские платы по версии покупателей
        </p>
        <div className={styles.productsGrid}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>⚡ Онлайн-конфигуратор</h3>
          <p>Соберите идеальный ПК с проверкой совместимости компонентов</p>
        </div>
        <div className={styles.feature}>
          <h3>🔍 Сравнение товаров</h3>
          <p>Сравните характеристики до 4 товаров одновременно</p>
        </div>
        <div className={styles.feature}>
          <h3>🚚 Быстрая доставка</h3>
          <p>Быстрая доставка по всем городам</p>
        </div>
      </section>
    </div>
  )
}

export default Home