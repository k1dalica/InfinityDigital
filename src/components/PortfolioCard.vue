<template>
  <div class="card">
    <div class="info">
      <h3>Reikon Karate</h3>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum unde, quod et illum illo!</span>
      <button>Preview</button><a href="" target="_blank"><button>Visit website</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .card { width: 350px; height: 600px; background-image: url(./../assets/Portfolio/10.jpg); background-size: cover; background-position: top; border-radius: 10px; position: relative; }
  .card .info { position: absolute; bottom: 0; left: 0; width: 100%; padding: 30px; z-index: 5; box-sizing: border-box; color: #fff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; 
    background: rgba(0,174,180,0.9);
    background: -moz-linear-gradient(left, rgba(0,174,180,0.9) 0%, rgba(0,207,200,0.9) 100%);
    background: -webkit-linear-gradient(left, rgba(0,174,180,0.9) 0%,rgba(0,207,200,0.9) 100%);
    background: linear-gradient(to right, rgba(0,174,180,0.9) 0%,rgba(0,207,200,0.9) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00aeb4', endColorstr='#00cfc8',GradientType=1 ); }
  .card .info h3 { font-size: 35px; font-weight: 300; margin: 0; }
  .card .info span { display: block; margin-top: 10px; font-size: 18px; line-height: 25px; }
  .card .info button { margin-right: 5px; font-family: 'Lato', sans-serif; font-weight: 300; text-transform: uppercase; font-size: 12px; transition: all ease-out 0.2s; margin-top: 10px; height: 40px; padding: 0 30px; background-color: transparent; outline: none; border: 1px solid #fff; border-radius: 25px; color: #fff; box-sizing: border-box; }
  .card .info button:hover, .card .info button:focus { background-color: #fff; color: #000; cursor: pointer; }
</style>