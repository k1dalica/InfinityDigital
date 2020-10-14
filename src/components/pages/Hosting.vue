<template>
  <section id="hosting">
    <div class="hosting-wrapper">
      <div class="content">
        <h1 v-html="$tc('hosting.cloud_hosting')" />
        <span v-html="$tc('hosting.cloud_hosting_txt')" />
        <button v-scroll-to="'#contact'">{{ $tc('hosting.send_us_msg') }}</button>
        <img src="@/assets/images/cloud.png" class="cloud c1">
        <img src="@/assets/images/cloud.png" class="cloud c2">
        <img src="@/assets/images/cloud.png" class="cloud c3">
      </div>

      <img src="@/assets/images/services/hosting.png" class="background">
      <img src="@/assets/images/services/hosting-mobile.png" class="background mobile">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hosting'
}
</script>

<style lang="scss" scoped>
#hosting {
  padding: 100px 0;
  .hosting-wrapper {
    background-color: #3a4149;
    position: relative;
    color: #fff;
    width: 100%;
    margin-top: 100px;
    box-sizing: border-box;
    .background {
      position: absolute;
      top: 0;
      right: 0px;
      height: 100%;
      width: 50%;
      max-width: calc(100% - 680px);
      object-fit: cover;
      object-position: left center;
      &.mobile {
        display: none;
      }
    }
    .content {
      width: 1700px;
      max-width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      padding: 100px;
      box-sizing: border-box;
      transition: all ease-out .4s;
      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 47px;
        font-weight: 800;
        margin: 0;
      }
      span {
        font-size: 22px;
        line-height: 30px;
        display: block;
        width: 700px;
        margin-top: 20px;
        color: #a9b1bd;
      }
      .cloud {
        position: absolute;
        z-index: 10;
      }
      .c1 {
        left: 420px;
        bottom: -50px;
      }
      .c2 {
        left: 100px;
        top: -50px;
        width: 120px;
      }
      .c3 {
        left: 750px;
        top: 100px;
        width: 70px;
      }
      button {
        margin-right: 5px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 13px;
        transition: all ease-out 0.2s;
        margin-top: 50px;
        height: 45px;
        padding: 0 50px;
        background-color: #fff;
        outline: none;
        border-radius: 25px;
        color: #555;
        border: none;
        box-sizing: border-box;
        &:hover {
          color: #000;
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
  }
}
@media all and (max-width: 1280px) {
  #hosting {
    .hosting-wrapper {
      .content {
        h1 {
          font-size: 40px;
        }
        span {
          font-size: 20px;
          line-height: 30px;
          width: 700px;
          margin-top: 20px;
        }
      }
    }
  }
}
@media all and (max-width: 1024px) {
  #hosting {
    padding: 0 0 70px 0;
    .hosting-wrapper {
      margin-top: 0;
      .background {
        max-width: calc(100% - 450px);
      }
      .content {
        padding: 70px 30px;
        h1 {
          font-size: 33px;
        }
        span {
          font-size: 18px;
          line-height: 30px;
          width: 500px;
          margin-top: 15px;
        }
        button {
          margin-top: 30px;
        }
        .c1 {
          left: 250px;
        }
        .c2 {
          left: 30px;

        }
        .c3 {
          top: 80px;
          left: 520px;
        }
      }
    }
  }
}
@media all and (max-width: 768px) {
  #hosting {
    .hosting-wrapper {
      .background {
        max-width: 999px;
        width: 260px;
      }
      .content {
        span {
          width: calc(100% - 200px);
        }
        .c1 {
          width: 150px;
          bottom: -40px;
        }
        .c3 {
          left: auto;
          right: 150px;
        }
      }
    }
  }
}
@media all and (max-width: 600px) {
  #hosting {
    .hosting-wrapper {
      .background {
        display: none;
        &.mobile {
          display: block;
          width: 200px;
        }
      }
      .content {
        h1 {
          font-size: 25px;
        }
        span {
          font-size: 15px;
          line-height: 22px;
          margin-top: 10px;
          width: calc(100% - 170px);
        }
        button {
          margin-top: 30px;
          padding: 0 40px;
          height: 38px;
          font-size: 11px;
          color: #555;
          font-weight: 400;
        }
        .c1 {
          width: 120px;
          left: 200px;
          bottom: -30px;
        }
        .c2 {
          width: 80px;
          top: -30px;
          left: 30px;
        }
        .c3 {
          display: none;
        }
      }
    }
  }
}
@media all and (max-width: 500px) {
  #hosting {
    .hosting-wrapper {
      .background {
        &.mobile {
          width: 130px;
        }
      }
      .content {
        span {
          width: calc(100% - 90px);
        }
        button {
          margin-top: 20px;
          padding: 0 30px;
          position: relative;
          z-index: 2;
        }
        .c1 {
          left: 170px;
          width: 100px;
          bottom: auto;
          top: 20px;
        }
        .c2 {
          width: 60px;
          top: auto;
          bottom: -15px;
          left: 60px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
 #hosting .hosting-wrapper .content span strong {
   font-weight: 600;
   color: #e1e4e8;
 }
</style>
