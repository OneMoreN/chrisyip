<template>
<div class="contact-container d-flex">
  <div class="contact-form-container">
    <h1>
      Get in touch with me
    </h1>
    <form @submit.prevent="handleSubmit" name="contact-me" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="contact-form d-flex">

      <input type="hidden" name="form-name" value="contact-me" />
        <label class="form-element d-flex">Name <input v-model="form.name" type="text" name="name" class="form-input"/></label>
        <label class="form-element d-flex">Email address<input v-model="form.email" type="email" name="email" class="form-input"/></label>
        <label class="form-element d-flex">Message <textarea v-model="form.message" name="message" class="form-input" rows="6"></textarea></label>
        <button type="submit" id="button" :disabled="submitted" >Submit</button>
    </form>

    <h2 v-if="submitted" class="success">Thank you, your message has been submitted successfully!</h2>
  </div>

  <div class="contact-image">
    <img :src="contactImg"/>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactMe',
  data () {
    return {
      contactImg: require('@/assets/images/contact.svg'),
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    sentSuccess () {
      this.submitted = true
    },
    handleSubmit () {
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      axios.post(
        '/',
        this.encode({
          'form-name': 'contact-me',
          ...this.form
        }),
        axiosConfig
      )
        .then(() => {
          this.sentSuccess()
        })
        .catch(() => {
          this.$router.push('404')
        })
    }
  }
}
</script>
