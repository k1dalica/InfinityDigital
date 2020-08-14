<template>
  <header :class="{ fixed: scroll > 600 }">
    <nav>
      <a href="">
        <div id="logo" v-scroll-to="'#home'">
          <img src="@/assets/images/logo.png">
          <h1><b>Infinity</b>Digital</h1>
        </div>
      </a>
      <ul id="menu" ref="menu">
        <li class="active"><a v-scroll-to="'#home'">{{ $tc('general.home') }}</a></li>
        <li><a v-scroll-to="'#services'">{{ $tc('general.services') }}</a></li>
        <li><a v-scroll-to="'#portfolio'">{{ $tc('general.work') }}</a></li>
        <li v-if="false"><a v-scroll-to="'#blog'">{{ $tc('general.blog') }}</a></li>
        <li v-if="false"><a v-scroll-to="'#about'">{{ $tc('general.about') }}</a></li>
        <li v-if="false"><a v-scroll-to="'#why-us'">{{ $tc('general.why_us') }}</a></li>
        <li v-if="false"><a v-scroll-to="'#hosting'">{{ $tc('general.hosting') }}</a></li>
        <li class="button"><a v-scroll-to="'#contact'"><button>{{ $tc('general.hire_us') }}</button></a></li>
        <li class="lang">
          <span @click="langOpen = !langOpen"><img :src="currentLang.image"></span>
          <div
            class="dropdown"
            :class="{ open: langOpen }"
            @click="changeLang(otherLang.name)">
            <img :src="otherLang.image">
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import rsFlag from '@/assets/images/rs.png'
import enFlag from '@/assets/images/en.png'

export default {
  name: 'Header',

  data () {
    return {
      scroll: 0,
      langOpen: false
    }
  },

  computed: {
    currentLang () {
      return this.getLangData(this.$i18n.locale)
    },

    otherLang () {
      return this.getLangData(this.$i18n.locale === 'rs' ? 'en' : 'rs')
    }
  },

  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    changeLang (lang) {
      this.langOpen = false
      localStorage.setItem('lang', lang)
      this.$i18n.locale = lang
    },

    getLangData (lang) {
      return {
        name: lang,
        image: lang === 'rs' ? rsFlag : enFlag
      }
    },

    onScroll () {
      this.scroll = window.pageYOffset || document.documentElement.scrollTop
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  transition: all ease-in-out .5s;

  nav {
    height: 90px;
    width: 100%;
    box-sizing: border-box;
    color: #e3e3e3;
    /* border-bottom: 1px solid rgba(255,255,255,0.1); */
    box-sizing: border-box;
    #logo {
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
      img {
        display: inline-block;
        vertical-align: middle;
        height: 35px;
      }
      h1 {
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        margin: 0 0 0 10px;
        vertical-align: middle;
        font-weight: 300;
        font-size: 19px;
        transition: all ease-in .4s;
        b {
          font-weight: 600;
        }
      }
      &:hover h1 {
        color: #fff;
      }
    }
  }

  &.fixed {
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #fff;
    // border-bottom: 1px solid #efefef;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,.1);

    nav {
      color: #555;
      #logo:hover h1 {
        color: #000;
      }
      #menu {
        li {
          a {
            &:hover {
              color: #000;
            }
            &:after {
              background-color: #999;
              height: 3px;
            }
          }
          &.active a {
            color: #000;
          }
        }
      }
    }
  }
}

header nav #menu {
  float: right;
  line-height: 90px;
  margin: 0;
  padding: 0;
  font-size: 0;
  text-transform: uppercase;
  li {
    display: inline-block;
    height: 90px;
    list-style: none;
    vertical-align: top;
    position: relative;
    font-size: 13px;
    a {
      transition: all ease-out .4s;
      display: block;
      padding: 0 20px;
      height: 90px;
      &:after {
        display: block;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0px;
        margin: 0 auto;
        width: 0;
        height: 1px;
        background-color: #fff;
        content: "";
        transition: width 0.2s;
      }
      &:hover:after {
        width: 100%;
      }
    }
    &.active {
      a {
        color: #fff;
        cursor: pointer;
        &:after {
          width: 100%;
          background-color: $primary;
        }
      }
    }
    &.lang {
      margin-left: 20px;
      height: 30px;
      vertical-align: middle;
      position: relative;
      span {
        display: block;
        height: 30px;
        position: relative;
        z-index: 2;
        img {
          display: block;
          border-radius: 9999999px;
          box-shadow: 0px 1px 5px 0px rgba(0,0,0,.3);
          cursor: pointer;
        }
      }
      .dropdown {
        // display: none;
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0;
        transition: all ease .2s;
        height: 30px;
        img {
          display: block;
          cursor: pointer;
          border-radius: 9999999px;
          box-shadow: 0px 1px 5px 0px rgba(0,0,0,.3);
        }
        &.open {
          display: block;
          transition: all ease .2s;
          left: 40px;
        }
      }
    }
    &.button {
      margin-left: 20px;
      height: 90px;
      display: inline-block;
      a {
        display: inline-block;
        height: 30px;
        padding: 0;
        &:after {
          display: none;
        }
      }
      button {
        color: #fff;
        transition: all ease-in 0.1s;
        border: none;
        background: rgb(0, 174, 180);
        background: -moz-linear-gradient(left, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
        background: -webkit-linear-gradient(left, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
        background: linear-gradient(to right, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8', GradientType=1);
        /* -webkit-box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1);
          -moz-box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1);
          box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1); */
        margin: 30px 0;
        width: 120px;
        height: 30px;
        outline: none;
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 15px;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
