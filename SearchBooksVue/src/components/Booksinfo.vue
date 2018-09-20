<template>

    <div class="col-md-4">
      <div class="card flex-md-row mb-1 shadow-sm">
        <div class="card-body flex-column align-items-start">
          <div class="card-img-top" style="height: 445px;">
            <img style= "margin: 10px 0px;":src= "book.volumeInfo.imageLinks.smallThumbnail"/>
            <h5 class="card-title">{{book.volumeInfo.title}}</h5>
            <p class="card-text"  v-for="authors in book.volumeInfo.authors">Author: {{authors}}</p>
            <p class="card-text">Date published: {{book.volumeInfo.publishedDate}}</p>
            <button class="btn" type="button" :modal = "modal" name="button" @click = "modal = true" style="position:absolute; bottom: 20px;">Buy</button>
        </div>
      </div>
    </div>

    <Modal v-if="modal" @close="modal = false"
           :src = "book.volumeInfo.imageLinks.smallThumbnail"
           :description = "book.volumeInfo.description" />

  </div>



</template>

<script>
import Modal from "./Modal.vue"
export default {
  name:"BooksInfo",
  props: ['book'],
  data () {
    return {
    modal: false
    }
  },
  components:{
   Modal
  }
}
</script>
