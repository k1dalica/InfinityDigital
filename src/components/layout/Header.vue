<template>
  <header :class="{ fixed: scroll > 600 }">
    <nav>
      <a href="">
        <div id="logo" v-scroll-to="'#home'">
          <img src="@/assets/images/logo.png">
          <h1><b>Infinity</b>Studio</h1>
        </div>
      </a>
      <ul id="menu" ref="menu">
        <li class="active"><a v-scroll-to="'#home'">Home</a></li>
        <li><a v-scroll-to="'#services'">Services</a></li>
        <li><a v-scroll-to="'#portfolio'">Our work</a></li>
        <li v-if="false"><a v-scroll-to="'#blog'">Blog</a></li>
        <li v-if="false"><a v-scroll-to="'#about'">About</a></li>
        <li v-if="false"><a v-scroll-to="'#why-us'">Why us</a></li>
        <li><a v-scroll-to="'#hosting'">Hosting</a></li>
        <li class="button"><a v-scroll-to="'#contact'"><button>Hire us</button></a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      scroll: 0
    }
  },

  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
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
  &.fixed {
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #fff;

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

header nav {
  height: 90px;
  width: 100%;
  box-sizing: border-box;
  color: #e3e3e3;
  /* border-bottom: 1px solid rgba(255,255,255,0.1); */
  box-sizing: border-box;
}

header nav #logo {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
}

header nav #logo img {
  display: inline-block;
  vertical-align: middle;
  height: 35px;
}

header nav #logo h1 {
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  margin: 0 0 0 10px;
  vertical-align: middle;
  font-weight: 300;
  font-size: 19px;
  transition: all ease-in .4s;
}

header nav #logo:hover h1 {
  color: #fff;
}

header nav #menu {
  float: right;
  line-height: 90px;
  margin: 0;
  padding: 0;
  font-size: 0;
  text-transform: uppercase;
}

header nav #menu li {
  display: inline-block;
  height: 90px;
  list-style: none;
  vertical-align: top;
  position: relative;
  font-size: 13px;
}

header nav #menu li a {
  transition: all ease-out .4s;
  display: block;
  padding: 0 20px;
  height: 90px;
}
header nav #menu li a:after {
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

header nav #menu li a:hover:after {
  width: 100%;
}

header nav #menu li a:hover, header nav #menu li.active a {
  color: #fff;
  cursor: pointer;
}

header nav #menu li.active a:after {
  width: 100%;
  background-color: $primary;
}

header nav #menu li.button {
  margin-left: 20px;
}

header nav #menu li.button a {
  display: inline-block;
  height: 30px;
  padding: 0;
}

header nav #menu li.button a:after {
  display: none;
}

header nav #menu li.button {
  height: 90px;
  display: inline-block;
}

header nav #menu li.button a {
  display: block;
}

header nav #menu li.button button {
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
}

header nav #menu li.button button:hover {
  transform: scale(1.1);
}
</style>
