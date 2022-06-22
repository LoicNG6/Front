<template>
    <HeaderView />
        In the ArticleCreateView
    <FooterView />
</template>

<script>
import HeaderView from "../../components/header.vue";
import FooterView from "../../components/footer.vue";
export default {
    name: 'ArticleCreateView',
    components: {
        HeaderView,
        FooterView,
    }
}
</script>