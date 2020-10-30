<template>
  <div class="container">
    <div v-if="errors.length !== 0" class="alert alert-danger">
      <p v-for="error in errors" :key="error.id">{{ error[0] }} </p>
    </div>

    <form @submit.prevent="registerSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" id="username" placeholder="Enter username.." v-model="user.name">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email.." v-model="user.email">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password.." v-model="user.password">
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm password:</label>
        <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password.." v-model="user.confirm_password">
      </div>

      <button class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AppRegister",

  data() {
    
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      errors: [],
    }
  },

  methods: {
    ...mapActions([
      'registerUser'
    ]),

    async registerSubmit() {
        const errorResponse = await this.registerUser(this.user);
        if (!errorResponse) {
          this.$router.push('/login');
        } else {
          this.errors = errorResponse;
        }
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>