<template>
  <Header></Header>
  <VContainer fluid class="px-8" style="height:100%">
    <VRow justify="center" class="my-4" style="text-align:center;">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">Qui sommes-nous ?</h3>
      </VCol>
      <VCol cols="5">
        Let's talk est une jeune startup créée en 2020 par 5 étudiants qui voulaient avoir une plateforme réunissant de nombreux articles et revues de presse sur des livres.
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-4">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">Pourquoi Let's Talk ?</h3>
      </VCol>
      <VCol>
        Text
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-4">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">L'histoire</h3>
      </VCol>
      <VCol>
        Text
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-4" style="text-align:center;">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">Contact</h3>
      </VCol>
      <VCol cols="5">
      </VCol>
    </VRow>
  </VContainer>
  <Footer></Footer>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
  name: "AboutView",
  components: {
    Header,
    Footer,
  }
}
</script>