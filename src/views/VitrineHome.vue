<template>
  <h1>{{nomeCliente}}</h1>
  <h2></h2>
</template>

<script lang="ts">
const nomeCliente = process.env.NOME_CLIENTE

export default {
data() {
  return {
    nomeCliente,
  }
},
}
</script>

<style>

</style>