<template>
    <HeaderView />
    <v-container fluid style="height:100%">
        <form action="/article" @submit.prevent="createArticle" mehtod="POST">
            <v-row>
                <h3>Ecrire un article</h3>
                <v-divider></v-divider>
            </v-row>
        </form>
    </v-container>
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