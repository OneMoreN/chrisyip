<template>
<section>
  <div class="contact-container d-flex">
    <div class="contact-form-container">
      <h1>
        Get in touch with me
      </h1>
      <form @submit.prevent="handleSubmit" name="contact-me" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="contact-form d-flex">

        <input type="hidden" name="form-name" value="contact-me" />
          <label class="form-element d-flex">
            <div>
              Name
              <small class="error" v-if="v$.form.name.$error">{{ v$.form.name.$errors[0].$message }}</small>
            </div>
            <input
              :disabled="submitted"
              v-model="state.form.name"
              type="text"
              name="name"
              class="form-input"
            />
          </label>
          <label class="form-element d-flex">
            <div>
              Email address
              <small class="error" v-if="v$.form.email.$error">{{ v$.form.email.$errors[0].$message }}</small>
            </div>
            <input
              :disabled="submitted"
              v-model="state.form.email"
              type="email"
              name="email"
              class="form-input"
            />
          </label>
          <label class="form-element d-flex">
            <div>
              Message
              <small class="error" v-if="v$.form.message.$error">{{ v$.form.message.$errors[0].$message }}</small>
            </div>
            <textarea
              :disabled="submitted"
              v-model="state.form.message"
              name="message"
              class="form-input"
              rows="6"
            >
            </textarea>
          </label>
          <button type="submit" id="button" :disabled="submitted || this.v$.$error" >
            Submit
          </button>
      </form>

      <h2 v-if="submitted" class="success">Thank you, your message has been submitted successfully!</h2>
    </div>

    <div class="contact-image">
      <img :src="contactImg"/>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: 'ContactMe',

  props: ['menuActive', 'menuChangeScreen'],

  mounted () {
    if (this.menuActive) this.menuChangeScreen()
  },

  setup () {
    const state = reactive({
      form: {
        name: '',
        email: '',
        message: ''
      }
    })

    const rules = computed(() => {
      return {
        form: {
          name: { required: helpers.withMessage('Name is required', required) },
          email: {
            required: helpers.withMessage('Email is required', required),
            email: helpers.withMessage('Email entered is not a valid email address', email)
          },
          message: { required: helpers.withMessage('A Message is required', required) }
        }
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$
    }
  },

  data () {
    return {
      contactImg: require('@/assets/images/contact.svg'),
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
      this.v$.$validate()
      if (!this.v$.$error) {
        const axiosConfig = {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        axios.post(
          '/contact-me',
          this.encode({
            'form-name': 'contact-me',
            ...this.state.form
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
}
</script>
