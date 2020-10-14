<template>
  <section class="full-size darker" id="services">
    <div class="wrapper">
      <heading
        :title="$tc('services.services_digital_world')"
        :subtitle="$tc('services.using_most_advanced_tech')" />

      <div class="items">
        <div class="side">
          <div class="item one">
            <div class="image-wrapper">
              <i />
              <div class="info">
                <h2>{{ $tc('services.graphic') }}<br>{{ $tc('services.design') }}</h2>
                <span>{{ $tc('services.graphic_design_txt') }}</span>
              </div>
              <img src="@/assets/images/services/graphic-design.jpg" class="image">
            </div>
          </div>
          <div class="item two">
            <div class="image-wrapper">
              <i />
              <div class="info">
                <h2>{{ $tc('services.digital_marketing') }}</h2>
                <span>{{ $tc('services.digital_marketing_txt') }}</span>
              </div>
              <img src="@/assets/images/services/marketing.jpg" class="image">
            </div>
          </div>
        </div>
        <div class="side">
         <div class="item three">
            <div class="image-wrapper">
              <i />
              <div class="info">
                <h2>{{ $tc('services.web_dev') }}</h2>
                <span>{{ $tc('services.web_dev_txt') }}</span>
              </div>
              <img src="@/assets/images/services/web-development.jpg" class="image">
            </div>
          </div>
          <div class="item four">
            <div class="image-wrapper">
              <i />
              <div class="info">
                <h2>{{ $tc('services.app_dev') }}</h2>
                <span>{{ $tc('services.app_dev_txt') }}</span>
              </div>
              <img src="@/assets/images/services/applications.jpg" class="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '../common/Heading'

export default {
  name: 'Services',

  components: {
    Heading
  }
}
</script>

<style lang="scss" scoped>

#services {
  padding-left: 30px;
  padding-right: 30px;
  .wrapper {
    width: 100%;
  }
  .items {
    font-size: 0;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    .side {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: calc((100% - 30px) / 2);
      &:last-of-type {
        padding-top: 65px;
        align-items: flex-start;
        margin-left: 20px;
      }
      .item {
        user-select: none;
        &.one {
          width: 80%;
          .image-wrapper {
            .info {
              text-align: left;
            }
          }
        }
        &.two {
          width: 100%;
          .image-wrapper {
            .info {
              text-align: right;
              span {
                margin-left: auto;
              }
            }
          }
        }
        &.three {
          width: 85%;
          .image-wrapper {
            .info {
              text-align: right;
              span {
                margin-left: auto;
              }
            }
          }
        }
        &.four {
          width: 100%;
          .image-wrapper {
            .info {
              text-align: left;
            }
          }
        }
        &:last-of-type {
          margin-top: 20px;
        }
        .image-wrapper {
          position: relative;
          .info {
            position: absolute;
            top: 0;
            z-index: 10;
            color: #fff;
            width: 100%;
            height: 100%;
            padding: 20px 40px;
            box-sizing: border-box;
            user-select: none;
            h2 {
              font-family: 'Montserrat', sans-serif;
              font-size: 40px;
              font-weight: 300;
            }
            span {
              opacity: 0;
              transition: all ease-in-out .2s;
              display: block;
              width: 100%;
              max-width: 400px;
              font-size: 18px;
              line-height: 30px;
              margin: 20px 0 0 0;
            }
          }
          i {
            transition: all ease-in-out .2s;
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.36) 0%, rgba(255, 255, 255, 0) 30%);
            background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.36) 0%, rgba(255, 255, 255, 0) 30%);
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.36) 0%, rgba(255, 255, 255, 0) 30%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c000000', endColorstr='#00ffffff', GradientType=0);
          }
          img {
            width: 100%;
            display: block;
            transition: all ease-in-out .2s;
          }
          &:hover {
            i {
              position: absolute;
              z-index: 5;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 201, 196, 0.9);
            }
            span {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

@media all and (max-width: 1280px) {
  #services {
    .items {
      .side .item {
        .image-wrapper {
          .info {
            h2 {
              font-size: 33px;
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 1024px) {
  #services {
    .items {
      .side .item {
        .image-wrapper {
          .info {
            padding: 15px 20px;
            h2 {
              font-size: 25px;
            }
            span {
              font-size: 16px;
              line-height: 23px;
              margin: 10px 0 0 0;
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 768px) {
  #services {
    .items {
      flex-direction: column;
      margin: 0;
      .side {
        width: 100% !important;
        margin: 0 !important;
        &:last-of-type {
          padding-top: 30px;
        }
        .item {
          width: 100% !important;
          .image-wrapper {
            img {
              height: 300px;
              object-fit: cover;
            }
            .info {
              padding: 30px;
              h2 {
                font-size: 33px;
              }
              span {
                font-size: 18px;
                line-height: 30px;
                margin: 20px 0 0 0;
              }
            }
          }
          &:last-of-type {
            margin-top: 30px;
          }
        }
      }
    }
  }
}
@media all and (max-width: 500px) {
  #services {
    .items {
      .side {
        padding: 0;
        .item {
          width: 100% !important;
          .image-wrapper {
            img {
              height: 250px;
            }
            .info {
              padding: 15px 20px;
              h2 {
                font-size: 25px;
              }
              span {
                font-size: 16px;
                line-height: 23px;
                margin: 10px 0 0 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
