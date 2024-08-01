function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
  
    const address = document.createElement('p')
    address.textContent = '🙅‍♀️ 없산구 주소아님동 1-54(삼태원), Seoul, Korea'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/restaurant-location.png'
    restaurantLocation.alt = 'restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact