import * as types from './mutation-types'

export const initBooks = ({commit}) => {
  let search = document.getElementById('search').value;
  fetch('https://www.googleapis.com/books/v1/volumes?q='+ search,{
    method: 'GET'
  }).then(
    response=> response.json())
    .then(json=>commit(types.INIT_BOOKS, json.items))
}

export const initOrder = ({commit}, order) =>{

  commit(types.INIT_ORDER, order);

}
