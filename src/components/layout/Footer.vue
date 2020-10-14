<template>
  <footer>
    <div class="upper">
      <img
        v-scroll-to="'#home'"
        src="@/assets/images/logo.png"
        class="logo"
        alt="Infinity Digital Logo" />
      <ul>
        <li><a v-scroll-to="'#home'">{{ $tc('general.home') }}</a></li>
        <li><a v-scroll-to="'#services'">{{ $tc('general.services') }}</a></li>
        <li><a v-scroll-to="'#portfolio'">{{ $tc('general.work') }}</a></li>
        <li v-if="false"><a v-scroll-to="'#why_us'">Why us</a></li>
        <li v-if="false"><a v-scroll-to="'#about'">About</a></li>
        <li v-if="false"><a v-scroll-to="'#blog'">Blog</a></li>
        <li v-if="false"><a v-scroll-to="'#hosting'">{{ $tc('general.hosting') }}</a></li>
        <li><a v-scroll-to="'#contact'">{{ $tc('general.contact') }}</a></li>
      </ul>
      <ul class="socials">
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
      {{ $tc('general.rights_reserved') }}.</span>
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
  padding: 40px 0 60px 0;
  color: #999;
  font-weight: 500;
  transition: all ease .3s;
  .copyright {
    margin-top: 15px;
    font-size: 15px;
    line-height: 25px;
    b {
      font-weight: 800;
    }
  }
  .upper {
    display: flex;
    justify-content: flex-end;
    .logo {
      height: 35px;
      cursor: pointer;
      margin-right: auto;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 5px 0;
      li {
        display: inline-block;
        margin-left: 20px;
        line-height: 25px;
        &:first-of-type {
          margin-left: 0;
        }
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
      &.socials {
        margin-left: 25px;
      }
    }
  }
}
@media all and (max-width: 1024px) {
  footer {
    margin: 0 30px;
  }
}
@media all and (max-width: 768px) {
  footer {
    .upper {
      display: flex;
      align-items: center;
      flex-direction: column;
      ul {
        &.socials {
          padding: 0;
          margin: 0;
        }
      }
      .logo {
        margin: 0 auto;
      }
    }
    .copyright {
      text-align: center;
    }
  }
}

@media all and (max-width: 1024px) {
  footer {
    padding: 40px 0 30px 0;
    margin: 0 15px;
  }
}
</style>
