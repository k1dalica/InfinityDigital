<template>
  <header id="header" :class="{ fixed: scroll > 400, open: menuOpen }">
    <nav>
      <a href="">
        <div id="logo" v-scroll-to="'#home'">
          <img src="@/assets/images/logo.png">
          <h1><b>Infinity</b>Digital</h1>
        </div>
      </a>
      <ul id="menu" ref="menu">
        <li
          v-for="(item, id) in menu"
          :key="id"
          :class="{ active: active === id }">
          <a v-scroll-to="`#${id}`" @click="closeMenu()">
            {{ item }}
          </a>
        </li>
        <li class="button">
          <a v-scroll-to="'#contact'" @click="closeMenu()">
            <button class="shine gradiant">{{ $tc('general.hire_us') }}</button>
          </a>
        </li>
        <li class="lang" @click.stop>
          <span @click="langOpen = !langOpen"><img :src="currentLang.image"></span>
          <div
            class="dropdown"
            :class="{ open: langOpen }"
            @click="changeLang(otherLang.name)">
            <img :src="otherLang.image">
          </div>
        </li>
      </ul>
      <div class="hamburger-menu">
        <div
          class="hamburger hamburger--emphatic"
          :class="{ 'is-active': menuOpen }"
          @click="menuOpen = !menuOpen">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
      <div class="lang mobile" @click.stop>
        <span @click="langOpen = !langOpen"><img :src="currentLang.image"></span>
        <div
          class="dropdown"
          :class="{ open: langOpen }"
          @click="changeLang(otherLang.name)">
          <img :src="otherLang.image">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import $ from 'jquery'
import rsFlag from '@/assets/images/rs.png'
import enFlag from '@/assets/images/en.png'

export default {
  name: 'Header',

  data () {
    return {
      active: 'home',
      scroll: 0,
      menuOpen: false,
      langOpen: false,
      menu: {
        home: this.$tc('general.home'),
        services: this.$tc('general.services'),
        portfolio: this.$tc('general.work')
        // blog: this.$tc('general.blog'),
        // about: this.$tc('general.about'),
        // 'why-us': this.$tc('general.why_us'),
        // hosting: this.$tc('general.hosting')
      }
    }
  },

  created () {
    $(window).on('scroll', function () {
      var currentPos = $(window).scrollTop()

      $('.nav li a').each(function () {
        var sectionLink = $(this)
        // capture the height of the navbar
        var navHeight = $('#nav-wrapper').outerHeight() + 1
        var section = $(sectionLink.attr('href'))

        // subtract the navbar height from the top of the section
        if (section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
          $('.nav li').removeClass('active')
          sectionLink.parent().addClass('active')
        } else {
          sectionLink.parent().removeClass('active')
        }
      })
    })
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
    window.addEventListener('click', () => {
      if (this.langOpen) this.langOpen = false
    })
  },

  methods: {
    closeMenu () {
      if (this.menuOpen) this.menuOpen = false
    },

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
      const currentPos = this.scroll = window.pageYOffset || document.documentElement.scrollTop
      this.active = null
      for (const key in this.menu) {
        const navHeight = 90
        const section = $(`#${key}`)
        if (section.position().top - navHeight <= currentPos && $('#header').offset().top + section.height() > currentPos) {
          this.active = key
        }
      }
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
  &.open {
    top: 0;
    height: 100%;
    background-color: #fff;
    padding-top: 30px;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    &.fixed {
      padding-top: 0;
    }
    nav {
      #logo {
        h1 {
          color: #444;
        }
        &:hover h1 {
          color: #000;
        }
      }
    }
  }
  nav {
    height: 90px;
    width: 100%;
    box-sizing: border-box;
    color: #e3e3e3;
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
        font-weight: 400;
        font-size: 19px;
        transition: all ease-in .4s;
        b {
          font-weight: 800;
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

.hamburger-menu {
  display: none;
  float: right;
  font-size: 40px;
  padding-top: 4px;
  margin-right: -10px;
}

.lang {
  margin-left: 20px;
  height: 30px;
  position: relative;
  &.mobile {
    display: none;
  }
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
    font-weight: 400;
    &.lang {
      display: inline-block;
      height: 30px;
      vertical-align: middle;
    }
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
        border: none;
        margin: 30px 0;
        padding: 0 25px;
        height: 35px;
        outline: none;
        border-radius: 999px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 15px;
        cursor: pointer;
        // &:hover {
        //   transform: scale(1.1);
        // }
      }
    }
  }
}
@media all and (max-width: 1024px) {
  header {
    padding: 0 30px;
    nav {
      #logo {
        h1 {
          font-size: 16px;
        }
      }
      #menu {
        li {
          a {
            padding: 0 15px;
          }
          &.button {
            margin-left: 10px;
            button {
              padding: 0 25px;
            }
          }
          &.lang {
            .dropdown {
              &.open {
                top: 38px;
                left: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media all and (max-width: 768px) {
  header {
    nav {
      #menu {
        display: none;
      }
      .hamburger-menu {
        display: block;
      }
      .lang {
        &.mobile {
          float: right;
          display: flex;
          align-items: center;
          height: 100%;
          margin-right: 10px;
          margin-left: 0;
        }
        .dropdown {
          top: 0;
          bottom: 0;
          margin: auto 0;
          left: auto;
          right: 0;
          transition: all ease .2s;
          &.open {
            display: block;
            left: auto;
            right: 40px;
          }
        }
      }
    }
    &.open nav {
      #menu {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 50px;
        li {
          display: block;
          width: 100%;
          font-size: 35px;
          a {
            color: #666;
            padding: 0;
            text-align: center;
            width: 100%;
            cursor: pointer;
            &:after {
              display: none;
            }
          }
          &.lang {
            display: none;
          }
          &.button {
            height: auto;
            a {
              height: auto;
              button {
                padding: 0 80px;
                height: 50px;
                border-radius: 9999px;
                font-size: 20px
              }
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 500px) {
  header.fixed nav #menu li {
    font-size: 25px;
    height: 60px;
    a {
      height: 60px;
      line-height: 60px;
    }
    &.button a button {
      padding: 0 60px;
      height: 43px;
      font-size: 17px
    }
  }
}
@media all and (orientation: landscape) and (max-height: 470px) and (max-width: 768px) {
  header.open nav #menu li {
    font-size: 20px;
    height: 50px;
    a {
      height: 50px;
      line-height: 50px;
    }
    &.button a button {
      padding: 0 60px;
      height: 43px;
      font-size: 17px
    }
  }
}
@media all and (orientation: landscape) and (max-height: 470px) and (max-width: 768px) {
  header.open nav #menu li {
    font-size: 20px;
    height: 40px;
    a {
      height: 40px;
      line-height: 40px;
    }
    &.button {
      line-height: 40px;
      a {
        line-height: 40px;
        button {
          padding: 0 50px;
          height: 40px;
          font-size: 17px;
          margin: 15px 0 0 0;
        }
      }
    }
  }
}
</style>
