<template>
  <footer>
    <div class="upper">
      <img src="./../assets/logo-big.png" class="logo" alt="Infinity Studio Logo">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Our work</a></li>
        <li><a href="">Why us</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Hosting</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="https://www.facebook.com/infstudiosrbija/" target="_blank"><img src="./../assets/facebook.png"></a></li>
        <li><a href="https://twitter.com/InfStudioRS/" target="_blank"><img src="./../assets/twitter.png"></a></li>
        <li><a href="https://www.instagram.com/infinity_studio_srbija/" target="_blank"><img src="./../assets/instagram.png"></a></li>
        <li><a href="https://www.linkedin.com/company/infinity-studio-srbija/" target="_blank"><img src="./../assets/linkedIn.png"></a></li>
      </ul>
    </div>
    <div class="bottom">
      <span>Copyright Infinity Studio {{ year }} ©<br>
      All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  computed: {
    year () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style scoped>
  footer { margin: 0 80px; padding: 60px 0; /* background-color: #fcfcfc; */ border-top: 1px solid rgba(0,0,0,0.1); color: #777; }
  footer .logo { height: 45px; }
  footer .upper { }
  footer .bottom { margin-top: 15px; font-size: 18px; line-height: 25px; }
  footer .upper ul { list-style: none; float: right; margin: 0; padding: 13px 0; }
  footer .upper ul li { display: inline-block; margin-left: 20px; }
  footer .upper ul li img { opacity: 0.7; vertical-align: bottom; }
  footer .upper ul li a:hover { color: #000; }
  footer .upper ul li a:hover img { opacity: 1; }
</style>
