<template>
  <div class="card" :style="{ backgroundImage: `url(${image})` }">
    <a href="https://timepad.rs" target="_blank">
      <button v-if="timepad" class="shine gradiant badge">TimePad Project</button>
    </a>
    <div class="info">
      <h3>{{ title }}</h3>
      <span>{{ text }}</span>
      <div class="buttons">
        <a v-if="link" :href="link" target="_blank"><span>{{ $tc('portfolio.visit')}}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',

  props: {
    image: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    text: {
      type: String,
      default: null
    },

    link: {
      type: String,
      default: null
    },

    timepad: {
      type: Boolean,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 700px;
  height: 393px;
  background-size: cover;
  background-position: top;
  border-radius: 10px;
  position: relative;
  .badge {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    height: 35px;
    margin: auto;
    border-radius: 999px;
    border: none;
    width: 200px;
    color: #fff;
    padding: 0 25px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
  }
  .info {
    max-height: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 30px;
    z-index: 5;
    box-sizing: border-box;
    color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: rgba(0,174,180,0.9);
    background: -moz-linear-gradient(left, rgba(0,174,180,0.9) 0%, rgba(0,207,200,0.9) 100%);
    background: -webkit-linear-gradient(left, rgba(0,174,180,0.9) 0%,rgba(0,207,200,0.9) 100%);
    background: linear-gradient(to right, rgba(0,174,180,0.9) 0%,rgba(0,207,200,0.9) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8',GradientType=1 );
    transition: all ease 1s;
    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 25px;
      font-weight: 500;
      margin: 0;
    }
    span {
      display: block;
      margin-top: 20px;
      font-size: 17px;
      line-height: 27px;
    }
    .buttons {
      text-transform: uppercase;
      span {
        transition: all ease-in .4s;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: bold;
        display: inline-block;
        box-sizing: border-box;
        border-bottom: 1px solid transparent;
        &:first-child {
          margin-right: 20px;
        }
        &:hover {
          border-bottom: 1px solid #fff;
          cursor: pointer;
        }
      }
    }
    // button {
    //   margin-right: 5px;
    //   font-family: 'Montserrat', sans-serif;
    //   font-weight: 300;
    //   text-transform: uppercase;
    //   font-size: 12px;
    //   transition: all ease-out 0.2s;
    //   margin-top: 10px;
    //   height: 40px;
    //   padding: 0 30px;
    //   background-color: transparent;
    //   outline: none;
    //   border: 1px solid #fff;
    //   border-radius: 25px;
    //   color: #fff;
    //   box-sizing: border-box;
    //   &:hover, &:focus {
    //     background-color: #fff;
    //     color: #000;
    //     cursor: pointer;
    //   }
    // }
  }
  &:hover .info {
    max-height: 600px;
    padding: 30px;
  }
}

@media all and (max-width: 1024px) {
  .card {
    width: 500px;
    height: 280px;
    .info {
      h3 {
        font-size: 22px;
      }
      span {
        margin-top: 15px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
@media all and (max-width: 768px) {
  .card {
    width: 500px;
    height: 280px;
    .info {
      padding: 0 20px;
      h3 {
        font-size: 18px;
      }
      span {
        margin-top: 10px;
        font-size: 15px;
        line-height: 20px;
      }
      .buttons {
        span {
          font-size: 13px;
        }
      }
    }
    &:hover .info {
      padding: 20px;
    }
  }
}
@media all and (max-width: 640px) {
  .card {
    width: auto;
    height: 250px;
    .info {
      h3 {
        font-size: 16px;
      }
      span {
        margin-top: 10px;
        font-size: 14px;
        line-height: 18px;
      }
      .buttons {
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
