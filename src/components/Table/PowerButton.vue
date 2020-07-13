<template>
    <div class="powerBtnBox">
        <q-btn  class="social-button" target="_blank">
            <span class="fa fa-lg fa-youtube"></span>
        </q-btn>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.powerBtnBox {
    // height: 200px;
//   position: relative;
}

.social-button {
  display: inline-block;
  border-radius: 50%;
  background-color: #8c8c8c;
  background-color: rgba(140,140,140,0.75);
  color: #fff;
  border: 0 none;
  padding: 0;
  text-align: center;
  width: 3em;
  height: 3em;
  line-height: 3em;
  position: relative;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
.social-button:hover {
  background-color: #e44848;
  color: #fff;
}
.social-button:hover:before {
  -webkit-animation: social-button-beat 1.5s ease-out infinite;
          animation: social-button-beat 1.5s ease-out infinite;
}
.social-button:hover:after {
  -webkit-animation: social-button-beat 1.5s ease-out 0.4s infinite;
          animation: social-button-beat 1.5s ease-out 0.4s infinite;
}
.social-button:before,
.social-button:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #e44848;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
@-webkit-keyframes social-button-beat {
  0% {
    opacity: 0.8;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  70% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}
@keyframes social-button-beat {
  0% {
    opacity: 0.8;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  70% {
    opacity: 0;
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}

</style>