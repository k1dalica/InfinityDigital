<template>
  <section class="services full-size darker" id="services">
    <div class="wrapper">
      <Heading title="Services" :percent="10" />

      <div class="services-wrapper">
        <div class="left">
          <div class="container one">
            <div class="image-wrapper">
              <i></i>
              <div class="info">
                <h2><b>Graphic</b><br>Design</h2>
                <span>We do any kind of graphic designs and also branding your company in order to improve services that you're offering and expanding your possibilities.</span>
              </div>
              <img src="./../assets/services/graphic-design.jpg" class="image">
            </div>
          </div><div class="container two">
            <div class="image-wrapper">
              <i></i>
              <div class="info">
                <h2><b>Digital</b>Marketing</h2>
                <span>Today it is a well-known importance of the presence on social networks. We will maintain your Facebook, Instagram, Twitter i Google+ pages for you.</span>
              </div>
              <img src="./../assets/services/marketing.jpg" class="image">
            </div>
          </div>
        </div><div class="right">
         <div class="container three">
            <div class="image-wrapper">
              <i></i>
              <div class="info">
                <h2><b>Web</b>Development</h2>
                <span>If you need online shop, blog, forum or presentational website optimized for all devices, our web development team will realize it for you.</span>
              </div>
              <img src="./../assets/services/web-development.jpg" class="image">
            </div>
          </div><div class="container four">
            <div class="image-wrapper">
              <i></i>
              <div class="info">
                <h2><b>Mobile</b>Development</h2>
                <span>Today it is a well-known importance of the presence on social networks. We will maintain your Facebook, Instagram, Twitter i Google+ pages for you.</span>
              </div>
              <img src="./../assets/services/mobile.jpg" class="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from './Heading'

export default {
  name: 'Services',
  data () {
    return {
    }
  },
  components: {
    Heading
  }
}
</script>

<style scoped>
  .services { text-align: center; }
  .services .wrapper { width: 100%; }
  .services-wrapper { font-size: 0; width: 100%; max-width: 1280px; margin: 0 auto; margin-top: 50px; }
  .services-wrapper .left, .services-wrapper .right { display: inline-block; width: calc((100% - 20px) / 2); font-size: 16px; vertical-align: top; }
  .services-wrapper .left { margin-right: 20px; }
  .services-wrapper .container { position: relative; }
  .services-wrapper .container:first-child { margin-bottom: 20px; }
  .services-wrapper .container.one { height: 550px; }
  .services-wrapper .container.two { height: 450px; }
  .services-wrapper .container.three { height: 430px; }
  .services-wrapper .container.four { height: 380px; }
  .services-wrapper .container .image-wrapper { position: absolute; }
  .services-wrapper .container .image-wrapper .info { position: absolute; top: 0; z-index: 10; color: #fff; padding: 20px 40px; }
  .services-wrapper .container.one .image-wrapper img { width: 500px; transition: all ease-in-out .2s; }
  .services-wrapper .container .image-wrapper img { display: block; }
  .services-wrapper .container .image-wrapper .info h2 { font-size: 40px; font-weight: 200; }
  .services-wrapper .container .image-wrapper .info span { opacity: 0; transition: all ease-in-out .2s; display: block; width: 400px; font-size: 22px; line-height: 30px; margin-top: 20px; }
  .services-wrapper .container.one .image-wrapper { bottom: 0; right: 0; transition: all ease-in-out .2s; }
  .services-wrapper .container.one .image-wrapper img { width: 500px; transition: all ease-in-out .2s; }
  .services-wrapper .container.one .image-wrapper .info { left: 0; text-align: left; }
  .services-wrapper .container.two .image-wrapper { top: 0; right: 0; }
  .services-wrapper .container.two .image-wrapper img { width: 600px; transition: all ease-in-out .2s; }
  .services-wrapper .container.two .image-wrapper .info { right: 0; text-align: right; }
  .services-wrapper .container.three .image-wrapper { bottom: 0; left: 0; }
  .services-wrapper .container.three .image-wrapper img { width: 550px; transition: all ease-in-out .2s; }
  .services-wrapper .container.three .image-wrapper .info { right: 0; text-align: right; }
  .services-wrapper .container.four .image-wrapper { top: 0; left: 0; }
  .services-wrapper .container.four .image-wrapper img { width: 600px; transition: all ease-in-out .2s; }
  .services-wrapper .container.four .image-wrapper .info { left: 0; text-align: left;}

  .services-wrapper .container .image-wrapper i { transition: all ease-in-out .2s; position: absolute; z-index: 5; top: 0; left: 0; width: 100%; height: 100%; background: -moz-linear-gradient(top, rgba(0,0,0,0.36) 0%, rgba(255,255,255,0) 30%); background: -webkit-linear-gradient(top, rgba(0,0,0,0.36) 0%,rgba(255,255,255,0) 30%); background: linear-gradient(to bottom, rgba(0,0,0,0.36) 0%,rgba(255,255,255,0) 30%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c000000', endColorstr='#00ffffff',GradientType=0 ); }
  .services-wrapper .container .image-wrapper:hover i { position: absolute; z-index: 5; width: 100%; height: 100%; background-color: rgba(0,201,196,0.9); }
  .services-wrapper .container .image-wrapper:hover .info span { opacity: 1; }
</style>
