<template>
  <footer>
    <div class="upper">
      <img
        v-scroll-to="'#home'"
        src="@/assets/images/logo-big.png"
        class="logo"
        alt="Infinity Digital Logo" />
      <ul>
        <li><a v-scroll-to="'#home'">Home</a></li>
        <li><a v-scroll-to="'#services'">Services</a></li>
        <li><a v-scroll-to="'#portfolio'">Our work</a></li>
        <li v-if="false"><a v-scroll-to="'#why_us'">Why us</a></li>
        <li v-if="false"><a v-scroll-to="'#about'">About</a></li>
        <li v-if="false"><a v-scroll-to="'#blog'">Blog</a></li>
        <li><a v-scroll-to="'#hosting'">Hosting</a></li>
        <li><a v-scroll-to="'#contact'">Contact</a></li>
        <li>
          <a href="https://www.facebook.com/infstudiosrbija/" target="_blank">
            <i class="fa fa-facebook-official" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/InfStudioRS/" target="_blank">
            <i class="fa fa-twitter-square" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/infinity_studio_srbija/" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/infinity-studio-srbija/" target="_blank">
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <span> © <b>Infinity</b>Digital<br>
      All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  computed: {
    year () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin: 0 80px;
  padding: 60px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #777;
  .logo {
    height: 45px;
    cursor: pointer;
  }
  .copyright {
    margin-top: 15px;
    font-size: 15px;
    line-height: 25px;
    b {
      font-weight: 500;
    }
  }
  .upper ul {
    list-style: none;
    float: right;
    margin: 0;
    padding: 13px 0;
    li {
      display: inline-block;
      margin-left: 20px;
      line-height: 25px;
      i {
        color: #555;
        font-size: 20px;
        line-height: 25px;
        vertical-align: bottom;
        transition: all ease-out .2s;
      }
      a {
        transition: all ease-in .4s;
        &:hover {
          color: $primary;
          cursor: pointer;
          i {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
