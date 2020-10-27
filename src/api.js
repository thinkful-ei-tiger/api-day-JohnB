const BASE_URL = 'https://thinkful-list-api.herokuapp.com/johnbyrne';

function getItems(){
  return fetch(`${BASE_URL}/items`)
}

function createItem(name){
  let newItem = JSON.stringify({name})
  return fetch(`${BASE_URL}/items`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    }
  )
}

function updateItem(id, updateData){
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: updateData
  })
}

export default {
  getItems,
  createItem,
  updateItem
};

