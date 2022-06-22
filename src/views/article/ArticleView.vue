<template>
    <HeaderView />
        In the ArticleView
    <FooterView />
</template>

<script>
import HeaderView from "../../components/header.vue";
import FooterView from "../../components/footer.vue";
export default {
    name: 'ArticleView',
    components: {
        HeaderView,
        FooterView,
    }
}
</script>