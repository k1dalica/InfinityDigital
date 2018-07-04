<template>
  <header>
    <nav>
      <a href="">
        <div id="logo">
          <img src="./../assets/logo.png">
          <h1><b>Infinity</b>Studio</h1>
        </div>
      </a>
      <ul id="menu" ref="menu">
        <li class="active"><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#our-work">Our work</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#why-us">Why us</a></li>
        <li><a href="#hosting">Hosting</a></li>
        <li class="button"><a href="#contact"><button>Hire us</button></a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted () {
    let lis = document.getElementById('menu').getElementsByTagName('li')
    for(let i=0; i < lis.length; i++) {
      let li = lis[i]
      li.addEventListener('click', (event) => {
        event.preventDefault()
        let tag = event.target.getAttribute('href')
        let top = document.querySelector(tag).offsetTop
        let cp = document.documentElement.scrollTop || document.body.scrollTop;
        this.smoothScroll(cp, top)
      })
    }
  },
  methods: {
    smoothScroll (cp, top) {
      let i = cp || 0;
      let ipp = 20
      if (i <  top) {
        i = (i + ipp) >= top ? top : i + ipp
        this.sta(i, top)
      } else if (i > top) {
        i = (i - ipp) <= top ? top : i + ipp
        this.sta(i, top)
      }
    },
    sta (i, top) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i, top);
      }, 5);
    }
  }
}
</script>

<style scoped>
  header { position: absolute; top: 0; left: 0; width: 100%; padding: 0 80px; box-sizing: border-box; }
  header nav { height: 90px; width: 100%;  box-sizing: border-box; color: #e3e3e3; border-bottom: 1px solid rgba(255,255,255,0.1); box-sizing: border-box; }

  header nav #logo { float: left; display: flex; justify-content: center; align-items: center; height: 90px; }
  header nav #logo img { display: inline-block; vertical-align: middle; height: 35px; }
  header nav #logo h1 {  font-family: 'Lato', sans-serif; display: inline-block; margin: 0 0 0 10px; vertical-align: middle; font-weight: 300; font-size: 19px; }
  header nav #logo:hover h1 { color: #fff; }

  header nav #menu { float: right; line-height: 90px; margin: 0; padding: 0; font-size: 0; text-transform: uppercase; }
  header nav #menu li { display: inline-block; height: 90px; list-style: none; vertical-align: top; position: relative; font-size: 13px; }
  header nav #menu li a { transition: all ease-out .4s; display: block; padding: 0 20px; height: 90px; }
  header nav #menu li a:after { display: block; text-align: center; position: absolute; left: 0; right: 0; bottom: 0px; margin: 0 auto; width: 0; height: 1px; background-color: #fff; content: ""; transition: width 0.2s; }
  header nav #menu li a:hover:after { width: 100%; }
  header nav #menu li a:hover { color: #fff; cursor: pointer; }
  header nav #menu li.active a { color: #fff; }
  header nav #menu li.active a:after { width: 100%; background-color: #00d4cb }

  header nav #menu li.button { margin-left: 20px; }
  header nav #menu li.button a { display: inline-block; height: 30px; padding: 0; }
  header nav #menu li.button a:after { display: none; }
  header nav #menu li.button { height: 90px; display: inline-block; }
  header nav #menu li.button a { display: block; }
  header nav #menu li.button button { color: #fff; transition: all ease-in 0.1s; border: none;
    background: rgb(0,174,180);
    background: -moz-linear-gradient(left, rgba(0,174,180,1) 0%, rgba(0,207,200,1) 100%);
    background: -webkit-linear-gradient(left, rgba(0,174,180,1) 0%,rgba(0,207,200,1) 100%);
    background: linear-gradient(to right, rgba(0,174,180,1) 0%,rgba(0,207,200,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8',GradientType=1 );
    /* -webkit-box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1);
    -moz-box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1);
    box-shadow: inset 0px 1px 0px 0px rgba(0,233,229,1); */
    margin: 30px 0; width: 120px; height: 30px; outline: none; border-radius: 15px; font-family: 'Lato', sans-serif; font-weight: 300; font-size: 15px; cursor: pointer; }
  header nav #menu li.button button:hover { transform: scale(1.1); }
</style>
