<template>
    <HeaderView />
    <v-container fluid style="height: 100%; border:solid">
        <v-row>
            <v-col cols="auto">
                In the Article page
            </v-col>
            <v-col>
                <v-btn @click="create_article = true">Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <article-create-view-vue
        v-model="create_article"
        :active="create_article"
        @close="addArticle"
    >
    </article-create-view-vue>
    <FooterView />
</template>

<script>
import HeaderView from "../../components/header.vue";
import FooterView from "../../components/footer.vue";
import ArticleCreateViewVue from "./ArticleCreateView.vue";

export default {
    name: 'ArticleView',
    components: {
        HeaderView,
        FooterView,
        ArticleCreateViewVue,
    },
    data() {
        return {
            create_article: false,
        }
    },
    methods: {
        addArticle() {
            this.create_article = false;
            console.log("article created");
        },
    }
}
</script>