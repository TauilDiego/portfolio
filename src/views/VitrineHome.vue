<template>
  <h1>{{nomeCliente}}</h1>
  <h2></h2>
</template>

<script lang="ts">

export default {
data() {
  return {
    nomeCliente: process.env.NOME_CLIENTE,
  }
},
}
</script>

<style>

</style>