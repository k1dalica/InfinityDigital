<template>
  <section
    id="hosting"
    class="full-size">
    <div class="hosting-wrapper">
      <h1>Cloud<br>web hosting</h1>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, voluptatibus veniam vero dolorum ipsam architecto quisquam tempora enim minus, natus delectus nulla libero sint dolor.</span>
      <button>See prices</button>

      <img src="@/assets/images/services/hosting.png" class="background">
      <img src="@/assets/images/cloud.png" class="cloud c1">
      <img src="@/assets/images/cloud.png" class="cloud c2">
      <img src="@/assets/images/cloud.png" class="cloud c3">
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
}

.hosting-wrapper {
  background-color: #3a4149;
  position: relative;
  color: #fff;
  padding: 100px;
  width: 100%;
  margin-top: 300px;
  box-sizing: border-box;
}

.hosting-wrapper .background {
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
  width: 50%;
  object-fit: cover;
  object-position: left center;
}

.hosting-wrapper .cloud {
  position: absolute;
  z-index: 10;
}

.hosting-wrapper .c1 {
  left: 420px;
  bottom: -50px;
}

.hosting-wrapper .c2 {
  left: 100px;
  top: -50px;
  width: 120px;
}

.hosting-wrapper .c3 {
  left: 750px;
  top: 100px;
  width: 70px;
}

.hosting-wrapper h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 47px;
  font-weight: 800;
  margin: 0;
}

.hosting-wrapper span {
  font-size: 22px;
  line-height: 30px;
  display: block;
  width: 700px;
  margin-top: 20px;
  color: #a9b1bd;
}

button {
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 13px;
  transition: all ease-out 0.2s;
  margin-top: 50px;
  height: 45px;
  padding: 0 50px;
  background-color: #fff;
  outline: none;
  border: 1px solid #fff;
  border-radius: 25px;
  color: #000;
  box-sizing: border-box;
}

button:hover,
button:focus {
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
</style>
