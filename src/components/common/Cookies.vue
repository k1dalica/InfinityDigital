<template>
  <div v-if="showModal">
    <transition name="fade">
      <div v-show="!cookies" class="cookies-alert">
        <div>
          <span>{{ $tc('cookies.title') }}</span>
          <p>{{ $tc('cookies.text') }}</p>
        </div>
        <button class="round-button" @click="accept()">{{ $tc('cookies.accept') }}</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      cookies: true
    }
  },

  created () {
    const cookies = window.localStorage.getItem('cookies_accepted') || false
    if (!cookies) {
      setTimeout(() => {
        this.showModal = true
        this.$nextTick(() => (this.cookies = cookies))
      }, 2500)
    }
  },

  methods: {
    accept () {
      this.cookies = true
      window.localStorage.setItem('cookies_accepted', true)
      setTimeout(() => {
        this.showModal = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cookies-alert {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 30px 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, 0.2);
  z-index: 99999;
  div {
    padding-right: 50px;
    span {
      font-weight: bold;
      font-size: 15px;
    }
    p {
      white-space: unset;
      color: #555;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
