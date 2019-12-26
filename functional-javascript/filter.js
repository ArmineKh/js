function getShortMessages(messages) {
      // SOLUTION GOES HERE
      let  filterMess = messages.filter(function(item) {
      return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
  return filterMess;
    }

    module.exports = getShortMessages
