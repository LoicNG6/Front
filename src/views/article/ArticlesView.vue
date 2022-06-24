<template>
    <Header></Header>
    <v-content>
        <v-item-group class="last-articles">
            <v-container>
                <v-row justify="space-between" align="center">
                    <v-col cols="auto">
                        <v-title>
                            <h1>Articles récents</h1>
                        </v-title>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn @click="openModal = true" class="button" rounded>Ecrire un article</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="n in 5" :key="n" cols="13" md="4">
                        <v-item v-slot="{ active, toggle }">
                            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" dark height="200"
                                @click="toggle">
                                <v-img src="../../assets/letstalk_logo.png"></v-img>
                                derniers articles {{ n }}
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>

        <v-item-group class="popular-articles">
            <v-container>
                <v-divider class="mt-6 mb-8" />

                <v-title>
                    <h1>Articles populaires</h1>
                </v-title><br />
                <v-row>
                    <v-col v-for="n in 5" :key="n" cols="13" md="4">
                        <v-item v-slot="{ active, toggle }">
                            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" dark height="200"
                                @click="toggle">
                                <v-img src="../../assets/letstalk_logo.png"></v-img>
                                articles pop {{ n }}
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>


        <v-item-group class="all-articles">
            <v-container>
                <v-divider class="mt-6 mb-8" />
                <v-title>
                    <h1>Tous les articles</h1>
                </v-title><br />
                <v-row>
                    <v-col v-for="n in 5" :key="n" cols="13" md="4">
                        <v-item v-slot="{ active, toggle }">
                            <v-card :color="active ? 'primary' : ''" class="d-flex align-center" dark height="200"
                                @click="toggle">
                                <v-img src="../../assets/letstalk_logo.png"></v-img>
                                tous articles {{ n }}
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>

    </v-content>
    <article-create-view-vue :active="openModal" @close="getArticle; openModal = false"></article-create-view-vue>
    <Footer></Footer>
</template>

<script>
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
import ArticleCreateViewVue from './ArticleCreateView.vue'
export default {
    name: 'ArticlesView',
    components: {
        Header,
        Footer,
        ArticleCreateViewVue,
    },
    data() {
        return {
            openModal: false,
        }
    },
    mounted() {
        this.getArticle();
    },
    methods: {
        getArticle() { },
    },
}
</script>