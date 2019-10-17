<template>
  <section>
    <div class="newsletter">
      <h1>Newsletter</h1>
      <span>Lorem ipsum dolor sit amet.</span>

      <div class="form-group">
        <input type="" placeholder="Email address" class="input">
        <button>Subscribe</button>
      </div>
    </div>
    <img src="@/assets/images/wave.png" class="wave">
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>

<style lang="scss" scoped>
section {
  background-color: #f9f9f9;
}

section .wave {
  display: block;
  width: 100%;
}

.newsletter {
  padding: 100px 15px;
  text-align: center;
  background-image: url(../../assets/images/newsletter-bg.png);
  background-position: center;
  background-repeat: no-repeat;
}

.newsletter h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 47px;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
}

.newsletter span {
  font-size: 19px;
  display: block;
  margin-top: 20px;
}

.newsletter .form-group {
  position: relative;
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
}

.newsletter .form-group .input {
  transition: all ease-out .2s;
  background-color: #fff;
  padding: 0 140px 0 20px;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  outline: none;
}

.newsletter .form-group .input:focus {
  border-color: #00d4c9;
}

.newsletter .form-group button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 15px;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 25px;
  outline: none;
  color: #fff;
  cursor: pointer;
  background: rgb(0, 174, 180);
  background: -moz-linear-gradient(left, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
  background: -webkit-linear-gradient(left, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
  background: linear-gradient(to right, rgba(0, 174, 180, 1) 0%, rgba(0, 207, 200, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8', GradientType=1);
}
</style>
