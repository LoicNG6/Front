<template>
  <Header></Header>
  <VContainer fluid class="px-8">
    <VRow justify="center" class="my-8" style="text-align:center;">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">Qui sommes-nous ?</h3>
      </VCol>
      <VCol cols="5">
        blabblfmdjlkqjfmlkd qfldkfjmlsjfmlsjf dkfmsjsdf)fikopajd,v
        kjlmdjfmfkdlfjoijfaôjdfjdjlkjfdkfjpzaklcvlnojvnbhuoifrf
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-8">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">Pourquoi Let's Talk ?</h3>
      </VCol>
      <VCol>
        Text
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-8">
      <VCol cols="12">
        <h3 style="text-transform: capitalize;">L'histoire</h3>
      </VCol>
      <VCol>
        Text
      </VCol>
    </VRow>
    <VDivider></VDivider>
    <VRow justify="center" class="my-8" style="text-align:center;">
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
import Header from './footer/header.vue';
import Footer from './footer/footer.vue';
export default {
  name: "AboutView",
  components: {
    Header,
    Footer,
  }
}
</script>