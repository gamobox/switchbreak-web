<template>
<form
  action="https://mailthis.to/switchbreakinfo@gmail.com"
  method="POST"
  ref="contactForm">
  <input type="hidden" name="_after" value="https://switchbreak.info/complete">
  <input type="hidden" name="_subject" value="お問い合わせ - switchbreakweb">

  <label class="formItem" v-bind:class="{
    'is-focused': focus === 'name',
    'is-invalid': isInvalid('name'),
  }">
    <p class="formItem__label">Your Name</p>
    <div class="formItem__main">
      <input class="formItem__input" type="text" name="name"
      v-model="name"
      v-on:input="$v.name.$touch"
      v-on:focus="focus = 'name'"
      v-on:blur="focus = null">
      <div></div>
    </div>
    <div class="errorMessage" v-show="isInvalid('name')">
      <p>入力内容にエラーがあります。</p>
    </div>
  </label>

  <label class="formItem" v-bind:class="{
    'is-focused': focus === 'email',
    'is-invalid': isInvalid('email'),
  }">
    <p class="formItem__label">Your Email</p>
    <div class="formItem__main">
      <input class="formItem__input" type="email" name="email"
      v-model="email"
      v-on:input="$v.email.$touch"
      v-on:focus="focus = 'email'"
      v-on:blur="focus = null">
      <div></div>
    </div>
    <div class="errorMessage" v-show="isInvalid('email')">
      <p>入力内容にエラーがあります。</p>
    </div>
  </label>

  <label class="formItem" v-bind:class="{
    'is-focused': focus === 'subject',
    'is-invalid': isInvalid('subject'),
  }">
    <p class="formItem__label">Subject</p>
    <div class="formItem__main">
      <input class="formItem__input" type="text" name="subject"
      v-model="subject"
      v-on:input="$v.subject.$touch"
      v-on:focus="focus = 'subject'"
      v-on:blur="focus = null">
      <div></div>
    </div>
    <div class="errorMessage" v-show="isInvalid('subject')">
      <p>入力内容にエラーがあります。</p>
    </div>
  </label>

  <label class="formItem" v-bind:class="{
    'is-focused': focus === 'message',
    'is-invalid': isInvalid('message'),
  }">
    <p class="formItem__label">Message</p>
    <div class="formItem__main">
      <textarea class="formItem__input" cols="30" rows="5" name="message"
      v-model="message"
      v-on:input="$v.message.$touch"
      v-on:focus="focus = 'message'"
      v-on:blur="focus = null"></textarea>
      <div></div>
    </div>
    <div class="errorMessage" v-show="isInvalid('message')">
      <p>入力内容にエラーがあります。</p>
    </div>
  </label>

  <button class="button" type="submit" v-bind:disabled="$v.$invalid">SEND</button>
</form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'contact-form',
  computed: {},
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      focus: null
    }
  },
  validations: {
    name: { required },
    email: { email, required },
    subject: {},
    message: { required }
  },
  methods: {
    isInvalid(name) {
      return this.$v[name].$dirty && this.$v[name].$invalid
    }
  }
}
</script>
