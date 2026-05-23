const simpleLogger = store => next => action => {
  console.log('🔄 Dispatching action:', action.type)
  
  const result = next(action)
  
  console.log('📊 Next state:', store.getState())
  
  return result
}

export default simpleLogger