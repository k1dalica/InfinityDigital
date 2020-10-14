<template>
  <section>
    <div class="newsletter">
      <h1>{{ $tc('newsletter.newsletter') }}</h1>
      <span class="subtitle">{{ $tc('newsletter.newsletter_txt') }}</span>

      <div
        class="form-group"
        :class="{ error: hasError }">
        <form
          ref="form"
          action="https://infinity-digital.us2.list-manage.com/subscribe/post?u=c467957b4394d232106ad3d98&amp;id=258596c9a5"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate>
          <input
            type="email"
            v-model="email"
            name="EMAIL"
            class="input"
            :placeholder="$tc('contact.email')"
            @keyup.enter="subscribe()">
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_c467957b4394d232106ad3d98_258596c9a5" tabindex="-1" value="">
          </div>
          <button
            type="button"
            value="Subscribe"
            name="subscribe"
            class="button shine gradiant"
            @click="subscribe()">
            {{ $tc('newsletter.subscribe') }}
          </button>
        </form>
      </div>
      <div class="error-text">
        <span v-show="hasError">{{ hasError }}</span>
      </div>

    </div>
    <img src="@/assets/images/wave.png" class="wave">
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Newsletter',

  data () {
    return {
      email: null
    }
  },

  computed: {
    hasError () {
      if (!this.$v.$dirty || this.$v.$pending) return null
      const errors = Object.keys(this.$v.email).filter((prop) => !prop.startsWith('$') && !this.$v.email[prop]).map((prop) => {
        return this.$tc(`validator.${prop}`)
      })
      return errors?.length ? errors[0] : null
    }
  },

  methods: {
    async subscribe () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$refs.form.submit()
        this.form.EMAIL = ''
        this.$toast.success(this.$tc('newsletter.thank_you_after_subscribe'))
      }
    }
  },

  validations: {
    email: { required, email }
  }
}
</script>

<style lang="scss" scoped>
$error: #ff0e51;
.error-text {
  display: block;
  height: 19px;
  font-size: 15px;
  color: $error;
  font-weight: 400;
  margin-top: 10px;
}

section {
  background-color: #f9f9f9;
  .wave {
    display: block;
    width: 100%;
  }
}

.newsletter {
  padding: 100px 30px 110px 30px;
  text-align: center;
  background-image: url(../../assets/images/newsletter-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 47px;
    font-weight: 800;
    margin: 0;
  }
  .subtitle {
    display: block;
    width: 500px;
    max-width: 100%;
    font-size: 19px;
    margin: 20px auto 0 auto;
  }
  .form-group {
    position: relative;
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 40px;
    .input {
      transition: all ease-out .2s;
      background-color: #fff;
      padding: 0 140px 0 20px;
      width: 100%;
      box-sizing: border-box;
      height: 50px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      outline: none;
      &:focus {
        border-color: #00d4c9;
      }
    }
    button {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 15px;
      position: absolute;
      top: 5px;
      right: 5px;
      width: 120px;
      height: 40px;
      border: none;
      border-radius: 25px;
      outline: none;
      color: #fff;
      cursor: pointer;
    }
    &.error {
      .input, .input:focus {
        border-color: $error;
      }
    }
  }
}
@media all and (max-width: 768px) {
  .newsletter {
    h1 {
      font-size: 30px;
    }
    .subtitle {
      font-size: 17px;
    }
  }
}
@media all and (max-width: 500px) {
  .newsletter {
    .form-group {
      .input {
        padding: 0 115px 0 15px;
      }
      button {
        width: 100px;
      }
    }
  }
}
</style>
