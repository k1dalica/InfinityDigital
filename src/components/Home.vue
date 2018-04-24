<template>
  <main id="home" class="full-size">
    <div class="full-size">
      <h1><span><b>WHAT</b> WE DO</span>
          <span class='ml'><b>IS WHY</b> WE DO IT.</span></h1>
      <a href="#section2"><div class="scroll-down"></div></a>
    </div>
  </main>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: '',
  data () {
    return {
    }
  },
  components: {
    Parallax
  }
}
</script>

<style scoped>
  #home { height: 100%; min-height: 100%; width: 100%; color: #fff; font-size: 3em; background-image: url(./../assets/bg2.jpg); background-size: cover; }
  #home h1 { font-weight: 200; }
  #home span { display: block; }
  #home span.ml { margin-left: 200px; }

  .scroll-down { --scroller-size: 5px; --color: #fff; cursor: pointer; position: absolute; bottom: 30px; left: 0; right: 0; margin: 0 auto; width: 30px; height: 50px; border: solid 2px var(--color); border-radius: 40px; }
  .scroll-down::after{ content: ''; position: absolute; top: 5px; left: 0; right: 0; margin: auto; width: var(--scroller-size); height: var(--scroller-size); background: var(--color); border-radius: 50%; animation: scroll 1.6s linear infinite; }

  @keyframes scroll {
    0%{ transform: translateY(10px); animation-timing-function: cubic-bezier(.65,.88,.36,.29); }
    50%{ transform: translateY(0); animation-timing-function: ease-in; }
    100%{ transform: translateY(10px); animation-timing-function: cubic-bezier(.65,.88,.36,.29); }
  }
</style>
