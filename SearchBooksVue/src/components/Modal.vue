<template>



  <div class="p-3 mb-3 bg-light rounded" style="width: 90%; margin: -510px 15%  ; position: absolute; z-index: 1000; border: 1px solid black; padding: 10px; background-color: white;">

<form class= "needs-validation" @submit.prevent="initOrder""
 action="#">
<span class="close" style="float: right;" @click="$emit('close')">X</span>
  <img :src="src" />
  <p> Description: {{description}}</p>
      <p >Name:</p>
      <input class="form-control" type="text" name="name" v-model="order.name"
      v-validate =" 'required|min:2' ">

      <span v-show= "errors.has('name')">{{errors.first('name')}}</span>
      <p>Email:</p>
      <input class="form-control" type="email" name="email"  v-model="order.email"
       v-validate="'required|email'">


       <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      <p>Phone</p>
      <input class="form-control" type="text" name = "phone" v-model="order.phone"
      v-validate =" 'required|min:10|max:13' " >

      <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      <input class="btn btn-secondary" style="margin-top: 15px;" type="submit" @click = "validate" value="Submit">

</form>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Modal",
  props: ['src', 'description'],
  data () {
    return {
      order:{
        name:'',
        email: '',
        phone:'',
        image: ''
      }
    }
  },
  methods:{
  ...mapActions([
  'initOrder'
  ]),
    validate(){
      this.$validator.validateAll().then((res)=>{
        if(res){
          this.order.image = this.src;
         this.$store.state.orders.push(this.order);
          this.$emit('close');
        }
      })
    }
  }
}
</script>
