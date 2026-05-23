import { useState, useEffect, useCallback } from 'react'
import { products } from '../utils/data'

export const useProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    minPrice: 0,
    maxPrice: 100000,
    search: ''
  })

  const filterProducts = useCallback(() => {
    let result = products

    if (filters.category) {
      result = result.filter(product => product.category === filters.category)
    }

    if (filters.brand) {
      result = result.filter(product => product.brand === filters.brand)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower)
      )
    }

    result = result.filter(product => 
      product.price >= filters.minPrice && 
      product.price <= filters.maxPrice
    )

    setFilteredProducts(result)
  }, [filters])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
  }

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category)
  }

  return {
    products: filteredProducts,
    filters,
    updateFilters,
    getProductById,
    getProductsByCategory
  }
}

export default useProducts