<template>
  <section class="full-size contact-page" id="contact">
    <div class="wrapper">
      <Heading title="Contact" :percent="100" />

      <div class="content-box">
        <div class="info">
          <h3>Let's get in touch</h3>
          <span class="desc">We can't wait to hear your ideas !</span>
          <ul>
            <li>
              <img src='./../assets/phone.png'>
              <span>Call us any time you want<br>064 / 9543 - 183</span>
            </li>
            <li>
              <img src='./../assets/mail.png'>
              <span>Send us an email !<br>office@infstudio.com</span>
            </li>
            <li>
              <img src='./../assets/pin.png'>
              <span>We are stationed in<br>Belgrade, Serbia.</span>
            </li>
          </ul>
        </div><div class="mail">
          <div class="form-group">
            <img src="./../assets/person.png">
            <input type="" placeholder="Full name">
          </div>
          <div class="form-group">
            <img src="./../assets/mail-white.png">
            <input type="" placeholder="Your email address">
          </div>
          <textarea placeholder="Message" rows="5"></textarea>
          <button>Send us a message</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from './Heading'

export default {
  name: 'Contact',
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
  .contact-page { text-align: center; }
  .contact-page .content-box { text-align: left; width: 100%; border-radius: 5px; overflow: hidden; display: table; margin-top: 50px; }
  .contact-page .content-box .info { background-color: #fff; background-image: url(./../assets/beograd.jpg); background-size: cover; padding: 50px; display: table-cell; vertical-align: top; }
  .contact-page .content-box .info h3 { margin: 0; }
  .contact-page .content-box .info .desc { display: block; margin-top: 10px; font-size: 15px; }
  .contact-page .content-box .info ul { display: block; list-style: none; margin: 0; margin-top: 50px; padding: 0; }
  .contact-page .content-box .info ul li { margin-top: 25px; }
  .contact-page .content-box .info ul li img { margin-right: 10px; vertical-align: middle; display: inline-block; opacity: 0.7; }
  .contact-page .content-box .info ul li span { vertical-align: middle; display: inline-block; }

  .contact-page .content-box .mail { vertical-align: top; padding: 50px; display: table-cell; width: 500px;
    background: rgb(0,174,180);
    background: -moz-linear-gradient(left, rgba(0,174,180,1) 0%, rgba(0,207,200,1) 100%);
    background: -webkit-linear-gradient(left, rgba(0,174,180,1) 0%,rgba(0,207,200,1) 100%);
    background: linear-gradient(to right, rgba(0,174,180,1) 0%,rgba(0,207,200,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8',GradientType=1 );
  }
  .contact-page .content-box .mail .form-group { position: relative; margin: 10px 0; }
  .contact-page .content-box .mail .form-group img { position: absolute; top: 5px; left: 10px; }
  .contact-page .content-box .mail .form-group input { box-sizing: border-box; font-size: 13px; width: 100%; background-color: transparent; outline: none; border: 1px solid #fff; border-radius: 5px; color: #fff; padding: 0 10px 0 45px; height: 35px; }
  .contact-page .content-box .mail textarea { box-sizing: border-box; resize: none; font-size: 13px; width: 100%; margin: 10px 0; background-color: transparent; outline: none; border: 1px solid #fff; border-radius: 5px; color: #fff; padding: 10px; }
  .contact-page .content-box .mail button { font-family: 'Lato', sans-serif; font-weight: 300; font-size: 15px; transition: all ease-out 0.2s; display: block; margin-top: 10px; width: 100%; height: 40px; padding: 0 10px; background-color: transparent; outline: none; border: 1px solid #fff; border-radius: 25px; color: #fff; box-sizing: border-box; }
  .contact-page .content-box .mail button:hover, .contact-page .content-box .mail button:focus { transition: all ease-out 0.2s; border-width: 3px; cursor: pointer; background-color: #fff; color: #000; }
  
  input::-webkit-input-placeholder { color: #fff; }
  input::-moz-placeholder { color: #fff; }
  input:-ms-input-placeholder { color: #fff; }
  input:-moz-placeholder { color: #fff; }
  textarea::-webkit-input-placeholder { color: #fff; }
  textarea::-moz-placeholder { color: #fff; }
  textarea:-ms-input-placeholder { color: #fff; }
  textarea:-moz-placeholder { color: #fff; }
</style>
