<template>
  <div>
    <q-spinner :color="color ? color : 'dark'" size="3em" :thickness="10" />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    }
  }
};
</script>