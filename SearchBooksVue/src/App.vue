<template>
  <div id="app" class= "container">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input type="text" id="search" class="form-control mr-2" placeholder=" Here you can search and buy the books..." style="width:550px; margin:25px 10px ; display:inline-block;">
          <button type="submit"style="margin-top:-5px" class="btn btn-primary" @click = "initBooks">Search</button>


        </div>
      </div>
    </div>

    <div class="row mb-1"">
      <Order v-for = "(item, index) in $store.state.orders"
      :item = "item"
      :key = "index"/>
    </div>


    <hr>
    <div class="row mb-1">
        <BooksInfo
        v-for="(book, index, id) in $store.state.books"
        :book = "book"
        :key = "index"
        />

    </div>

</div>
</template>

<script>
import {mapActions} from 'vuex'
import BooksInfo from './components/BooksInfo.vue'
import Order from "./components/Order.vue"

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods:mapActions([
    'initBooks'
  ]) ,
  components:{
    BooksInfo,
    Order
  }
}
</script>

<style>

</style>
