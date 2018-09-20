<template>

  <div class = "card mb-4 shadow-sm" style="width: 30%; height:450px; display:inline-block; padding: 15px; margin: 0px 10px;">
    <h6 class="border-bottom border-gray pb-2 mb-0" >Your order:</h6>
      <img class="rounded" :src= "item.image"/>
      <p class="card-text border-bottom">by:</p>
      <p>{{item.name}}</p>
      <p>{{item.email}}</p>
      <p>{{item.phone}}</p>
    </div>

</template>

<script>
export default{
  name: 'Order',
  props:['item'],
  data(){
    return{

    }
  }
}

</script>
