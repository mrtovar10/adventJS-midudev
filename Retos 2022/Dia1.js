function wrapping(gifts) {
    return gifts.map(gift => {
      let newGift = gift.split('');
      let len = newGift.length
      newGift.unshift('*'.repeat(len+2)+'\n*')
      newGift.push('*\n'+ '*'.repeat(len+2))
      return newGift.join('')
    })
}

console.log(wrapping(['book', 'game', 'socks']))