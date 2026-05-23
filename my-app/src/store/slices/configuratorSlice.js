import { createSlice } from '@reduxjs/toolkit'

const configuratorSlice = createSlice({
  name: 'configurator',
  initialState: {
    selectedComponents: {},
    totalPrice: 0,
    compatibility: {
      isCompatible: true,
      issues: []
    }
  },
  reducers: {
    selectComponent: (state, action) => {
      const { category, product } = action.payload
      state.selectedComponents[category] = product
      state.totalPrice = Object.values(state.selectedComponents).reduce((sum, product) => sum + product.price, 0)
      
      // Автоматически проверяем совместимость после добавления компонента
      const issues = []
      const { cpu, motherboard } = state.selectedComponents
      
      // Проверяем совместимость сокетов
      if (cpu && motherboard) {
        const cpuSocket = cpu.specs.сокет || cpu.specs.socket
        const mbSocket = motherboard.specs.сокет || motherboard.specs.socket
        
        if (cpuSocket && mbSocket && cpuSocket !== mbSocket) {
          issues.push(`Несовместимость сокетов: ${cpuSocket} и ${mbSocket}`)
        } else if (!cpuSocket || !mbSocket) {
          issues.push('Не удалось определить сокеты для проверки совместимости')
        }
      }
      
      state.compatibility = {
        isCompatible: issues.length === 0,
        issues
      }
    },
    removeComponent: (state, action) => {
      const category = action.payload
      delete state.selectedComponents[category]
      state.totalPrice = Object.values(state.selectedComponents).reduce((sum, product) => sum + product.price, 0)
      
      // Проверяем совместимость после удаления компонента
      const issues = []
      const { cpu, motherboard } = state.selectedComponents
      
      if (cpu && motherboard) {
        const cpuSocket = cpu.specs.сокет || cpu.specs.socket
        const mbSocket = motherboard.specs.сокет || motherboard.specs.socket
        
        if (cpuSocket && mbSocket && cpuSocket !== mbSocket) {
          issues.push(`Несовместимость сокетов: ${cpuSocket} и ${mbSocket}`)
        } else if (!cpuSocket || !mbSocket) {
          issues.push('Не удалось определить сокеты для проверки совместимости')
        }
      }
      
      state.compatibility = {
        isCompatible: issues.length === 0,
        issues
      }
    },
    checkCompatibility: (state) => {
      const issues = []
      const { cpu, motherboard, ram } = state.selectedComponents
      
      // Проверка совместимости процессора и материнской платы
      if (cpu && motherboard) {
        const cpuSocket = cpu.specs.сокет || cpu.specs.socket
        const mbSocket = motherboard.specs.сокет || motherboard.specs.socket
        
        if (cpuSocket && mbSocket) {
          if (cpuSocket !== mbSocket) {
            issues.push(`Несовместимость сокетов: ${cpuSocket} (процессор) и ${mbSocket} (материнская плата)`)
          }
        } else {
          issues.push('Не удалось определить сокеты для проверки совместимости')
        }
      }
      
      // Проверка совместимости оперативной памяти и материнской платы
      if (ram && motherboard) {
        const ramType = ram.specs.тип || ram.specs.type
        const mbMemoryType = motherboard.specs.слоты_памяти || motherboard.specs.memory_slots
        
        if (ramType && mbMemoryType) {
          if (ramType.includes('DDR5') && !mbMemoryType.includes('DDR5')) {
            issues.push(`Несовместимость памяти: ${ramType} не поддерживается материнской платой`)
          } else if (ramType.includes('DDR4') && !mbMemoryType.includes('DDR4')) {
            issues.push(`Несовместимость памяти: ${ramType} не поддерживается материнской платой`)
          }
        }
      }
      
      // Проверка мощности блока питания
      const psu = state.selectedComponents.psu
      if (psu) {
        const psuWattage = parseInt(psu.specs.мощность || psu.specs.wattage)
        let estimatedPower = 0
        
        if (cpu) estimatedPower += 150 // Средняя мощность процессора
        if (state.selectedComponents.gpu) estimatedPower += 250 // Средняя мощность видеокарты
        if (ram) estimatedPower += 30
        estimatedPower += 50 // Прочие компоненты
        
        if (psuWattage && psuWattage < estimatedPower) {
          issues.push(`Мощность БП (${psuWattage}W) может быть недостаточной для системы (примерно ${estimatedPower}W)`)
        }
      }
      
      state.compatibility = {
        isCompatible: issues.length === 0,
        issues
      }
    },
    clearConfigurator: (state) => {
      state.selectedComponents = {}
      state.totalPrice = 0
      state.compatibility = { isCompatible: true, issues: [] }
    }
  },
})

export const { selectComponent, removeComponent, checkCompatibility, clearConfigurator } = configuratorSlice.actions
export default configuratorSlice.reducer