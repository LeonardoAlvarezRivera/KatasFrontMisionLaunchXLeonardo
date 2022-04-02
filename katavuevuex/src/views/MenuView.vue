<template>
  <div class="menu">
    <Menu/>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/MenuPasteles.vue'

export default {
  name: 'MenuView',
  components: {
    Menu
  }
}
</script>