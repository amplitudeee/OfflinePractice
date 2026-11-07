// LOCAL STORAGE
localStorage.getItem('myLeads')
localStorage.setItem('myLeads', 'www.banana.com')
localStorage.clear()
  // STORE/RETRIEVE ARRAY/OBJ FROM LOCAL STORAGE (SINCE IT ONLY STORES STRINGS U NEED TO CONVERT IT)
  myLeads = JSON.parse(localStorage.getItem('key') || '[]') // string pulled from value in key:value pair and parsed+stored as array or if empty then stores an array
  localStorage.setItem('key', JSON.stringify(myLeads)) // stores array as string in value of key:value pair
