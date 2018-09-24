<template>
  <div class="welcome container">
 <div class="card">
     <div class="card-content center-align">
         <h2 class="amber-text text-darken-4">Welcome !</h2>
         <form @submit.prevent="logIn">
    <label class="label" for="name">Enter your name to join Super Chat : </label>
             <input type="name" v-model="name">
             <p v-if= "feedback" class="red-text"> {{ feedback }}</p>
             <button class="btn deep-orange">Enter Chat</button>
    </form>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data() {
            return {
                name: null, 
                feedback: null
            }
        }, 
        methods: {
            logIn(){
                if (this.name){
                    this.$router.push({ name: 'Chat', params: { name: this.name }})
                } else {
                    this.feedback = "You must enter a name to join."
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .welcome {
        max-width: 500px;
        margin-top: 100px; 
    }
 
    button {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    
    
</style>
