<template>
  <section id="contact" class="full-size">
    <div class="wrapper">

      <div class="content-box">
        <h1>{{ $tc('contact.lets_get_in_touch') }}</h1>
        <h2>{{ $tc('contact.contact_txt') }}!</h2>
        <div class="flex">
          <form @submit.prevent="submit()">
            <div
              class="floating-label"
              :class="{ error: hasError['name'] }">
              <input v-model="form.name" class="floating-input" type="text" placeholder=" ">
              <span class="highlight"></span>
              <label>{{ $tc('contact.full_name') }}</label>
              <div  v-show="hasError['name']" class="error-text">{{ hasError['name'] }}</div>
            </div>
            <div
              class="floating-label"
              :class="{ error: hasError['email'] }">
              <input v-model="form.email" class="floating-input" type="text" placeholder=" ">
              <span class="highlight"></span>
              <label>{{ $tc('contact.email') }}</label>
              <div  v-show="hasError['email']" class="error-text">{{ hasError['email'] }}</div>
            </div>
            <div
              class="floating-label"
              :class="{ error: hasError['message'] }">
              <textarea v-model="form.message" class="floating-input floating-textarea" placeholder=" " rows="5" />
              <span class="highlight"></span>
              <label>{{ $tc('contact.message') }}</label>
              <div  v-show="hasError['message']" class="error-text">{{ hasError['message'] }}</div>
            </div>
            <button type="submit" class="shine gradiant">{{ $tc('contact.send_message') }}</button>
          </form>
          <div class="info">
            <ul>
              <li>
                <img src='@/assets/images/phone.png'>
                <span>{{ $tc('contact.give_us_a_call') }}<br><b><a :href="`tel:${$tc('contact.phone')}`">{{ $tc('contact.phone') }}</a></b></span>
              </li>
              <li>
                <img src='@/assets/images/mail.png'>
                <span>{{ $tc('contact.send_us_an_email') }}<br><b><a href="mailto:office@infinity-digital.rs">office@infinity-digital.rs</a></b></span>
              </li>
              <li>
                <img src='@/assets/images/pin.png'>
                <span>{{ $tc('contact.we_are_stationed') }}<br><b>{{ $tc('contact.location') }}.</b></span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Contact',

  data () {
    return {
      form: {
        name: null,
        email: null,
        message: null
      }
    }
  },

  computed: {
    hasError () {
      return Object.keys(this.form).reduce((acc, key) => {
        if (!this.$v.form[key].$dirty || this.$v.form[key].$pending) {
          acc[key] = false
        } else {
          const errors = Object.keys(this.$v.form[key])
            .filter((prop) => !prop.startsWith('$') && !this.$v.form[key][prop])
            .map((prop) => this.$tc(`validator.${prop}`))
          acc[key] = errors?.length ? errors[0] : null
        }
        return acc
      }, {})
    }
  },

  methods: {
    async submit () {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        try {
          await axios.post('/contact.php', this.form)
          this.$toast.success(this.$tc('contact.thank_you_after_contact'))
          this.clear()
        } catch (e) {
          this.$toast.error(this.$tc('contact.submit_error'))
        }
      }
    },

    clear () {
      this.form = {
        name: null,
        email: null,
        message: null
      }
      this.$v.form.$reset()
    }
  },

  validations: {
    form: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  }
}
</script>

<style lang="scss" scoped>
$error: #ff0e51;
.error-text {
  display: block;
  height: 19px;
  font-size: 14px;
  color: $error;
  font-weight: 400;
  margin-top: 5px;
}

#contact {
  .wrapper {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    h1 {
      font-size: 55px;
    }
    h2 {
      font-size: 25px;
      margin-top: 5px;
    }
    .content-box {
      width: 100%;
      max-width: 1024px;
      .flex {
        width: 100%;
        display: flex;
        align-items: center;
        transition: all ease .3s;
        .info {
          width: 100%;
          padding-left: 100px;
          ul {
            padding: 0;
            margin: 0;
            list-style: none;
            li {
              display: flex;
              margin: 30px 0;
              line-height: 1.5;
              font-size: 17px;
              color: #555;
              font-weight: 300;
              b {
                font-weight: 500;
                color: #111;
              }
              a {
                transition: all ease .2s;
                &:hover {
                  color: #00d4cb;
                }
              }
              img {
                display: block;
                margin-right: 15px;
                object-fit: contain;
              }
            }
          }
        }
        form {
          width: 100%;
          max-width: 600px;
          margin-top: 70px;
          padding-right: 100px;
          border-right: 1px solid rgba(0, 0, 0, .1);
          flex-grow: 1;
          transition: all ease .3s;
          button {
            font-size: 17px;
            padding: 0 30px;
            height: 45px;
            border: none;
            color: #fff;
            font-weight: 400;
            border-radius: 2px;
            border-radius: 9999px;
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
  }
}

.floating-label {
  position: relative;
  margin-bottom: 30px;
  .floating-input , .floating-select {
    font-size: 17px;
    padding: 4px 0;
    display: block;
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #c3c3c3;
  }
  .floating-textarea.floating-input {
    height: auto;
  }

  .floating-input:focus , .floating-select:focus {
    outline: none;
    border-bottom: 2px solid #00d4cb;
  }

  label {
    color: #111;
    font-size: 17px;
    font-weight: 400;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
    top: -18px;
    font-size: 14px;
    color: #00d4cb;
  }

  &.error {
    .floating-input, .floating-textarea {
      border-color: $error;
    }
    // .floating-input ~ label, .floating-input:not(:placeholder-shown) ~ label {
    //   color: $error;
    // }
  }

  /* active state */
  .floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
    width: 50%;
  }

  *, *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  .floating-textarea {
    min-height: 110px;
    max-height: 260px;
    overflow: hidden;
    overflow-x: hidden;
    resize: vertical;
  }

  /* highlighter */
  .highlight {
    position: absolute;
    width: 100%;
    top: 15%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  .floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
}

@media all and (max-width: 1024px) {
  #contact {
    .wrapper .content-box .flex {
      form {
        margin-top: 60px;
        padding-right: 50px;
      }
      .info {
        padding-left: 40px;
      }
    }
  }
}

@media all and (max-width: 768px) {
  #contact {
    padding: 100px 0;
    .wrapper .content-box {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 20px;
      }
      .flex {
        flex-direction: column;
        form {
          margin-top: 50px;
          padding-right: 0;
          border: none;
          max-width: 999px;
        }
        .info {
          padding: 0;
          margin-top: 30px;
        }
      }
    }
  }
}
@media all and (max-width: 450px) {
  #contact {
    padding: 80px 0;
    .wrapper .content-box {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 17px;
      }
    }
  }
}

/* animation */
@-webkit-keyframes inputHighlighter {
  from { background:#00d4cb; }
  to { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:#00d4cb; }
  to { width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:#00d4cb; }
  to { width:0; background:transparent; }
}
</style>
