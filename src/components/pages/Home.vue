<template>
  <main id="home" class="full-size">
    <div class="full-size">
      <h1>
        <span><b>{{ $tc('general.infinity') }}</b></span>
        <span class='ml'>{{ $tc('general.starts_here') }}.</span>
      </h1>
      <a v-scroll-to="'#services'"><div class="scroll-down"></div></a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
#home {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  min-height: 100%;
  width: 100%;
  color: #fff;
  font-size: 3em;
  background-image: url(../../assets/images/bg.jpg);
  background-size: cover;
  h1 {
    text-transform: uppercase;
    font-weight: 100;
    b {
      font-weight: 800;
    }
  }
  span {
    display: block;
    &.ml {
      margin-left: 200px;
    }
  }
}

@media all and (max-width: 1024px) {
  #home {
    font-size: 2rem;
    span.ml {
      margin-left: 100px;
    }
  }
}

@media all and (max-width: 650px) {
  #home {
    font-size: 1.5rem;
    text-align: center;
    span.ml {
      margin-left: 0;
    }
  }
}

.scroll-down {
  --scroller-size: 5px;
  --color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30px;
  height: 50px;
  border: solid 2px var(--color);
  border-radius: 40px;
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    margin: auto;
    width: var(--scroller-size);
    height: var(--scroller-size);
    background: var(--color);
    border-radius: 50%;
    animation: scroll 1.6s linear infinite;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(.65, .88, .36, .29);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(10px);
    animation-timing-function: cubic-bezier(.65, .88, .36, .29);
  }
}
</style>
