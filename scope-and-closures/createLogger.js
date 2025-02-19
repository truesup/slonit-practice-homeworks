function createLogger() {
  const messagesArray = []

  return {
    log: message => messagesArray.push(message),
    getLogs: () => [...messagesArray],
  }
}

const logger = createLogger()

logger.log('First log')
logger.log('Second log')
logger.log('Third log')

console.log(logger.getLogs())

// нет доступа к массиву
console.log(logger.messagesArray)
