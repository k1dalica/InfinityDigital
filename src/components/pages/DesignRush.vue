<template>
  <div class="design-rush">
    <div class="wrapper">
      <h1><b>Infinity Digital</b> {{ $tc('other.design_rush_text') }}
        <a href="https://www.designrush.com/agency/ecommerce-web-design-companies" target="_blank"><b>Design Rush</b></a>
      !</h1>
      <a href="https://www.designrush.com/agency/ecommerce-web-design-companies" target="_blank">
        <img src="../../assets/images/designrush.svg" alt="Design Rush">
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .design-rush {
    padding: 100px 20px;
    background-color: #3a4149;
    color: #fff;
    width: 100%;
    margin-top: 100px;
    box-sizing: border-box;
    .wrapper {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      text-align: center;
      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 37px;
        font-weight: 400;
        margin: 0;
        b {
          font-weight: 800;
        }
      }
      img {
        width: 350px;
        max-width: 100%;
        margin-top: 50px;
      }
    }
  }
  @media all and (max-width: 768px) {
    .design-rush {
      padding: 75px 20px;
      .wrapper {
        h1 {
          font-size: 25px;
        }
        img {
          margin-top: 30px;
        }
      }
    }
  }
  @media all and (max-width: 500px) {
    .design-rush {
      padding: 75px 20px;
      .wrapper {
        img {
          margin-top: 20px;
        }
      }
    }
  }
</style>
