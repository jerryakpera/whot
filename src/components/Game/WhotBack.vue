<template>
    <div class="market" id="market"></div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.market {
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color: brown;
  width: 100px;
  height: 138px;
  padding-top: 50px;
  font-family: "Berkshire Swash", cursive;
  border-radius: 5px;
  border: 1px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 4px #333;
  }
}

.market:before {
  content: "Whot";
  display: block;
  margin: 0;
}


</style>