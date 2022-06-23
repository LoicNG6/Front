<template>
    <v-container fluid>
        <v-dialog persistent v-model="open_modal    ">
            <v-card class="blue-text" height="800px" width="1000px">
                <v-container class="px-0" fluid>
                    <v-row class="px-4 py-2">
                        <v-col>
                            <h2>Ecrire un article</h2>
                        </v-col>

                        <v-btn style="position: absolute; top: 0.8em; right: 1em;" elevation="0" x-small icon rounded
                            @click="open_modal = false; $emit('close')">
                            <img :src="require('../../assets/close.png')" width="14" height="15" />
                        </v-btn>

                    </v-row>
                    <v-divider></v-divider>

                </v-container>
                <v-container class="px-14">
                    <v-row>
                        <v-col style="border-bottom:solid" cols="auto" class="px-0">
                            <h3>Article</h3>
                        </v-col>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row justify="center" class="mt-8">
                        <v-col>
                            <label>Titre *</label>
                            <input class="input px-4" style="text-align: start; height: 60px;" type="text"
                                placeholder="Titre de l'article" required v-model="article.title" />
                        </v-col>
                    </v-row>
                    <v-row justify="space-between" class="mt-8">
                        <v-col cols="6">
                            <label>Rubrique *</label>
                            <v-select :items="themes" label="Choisir le thème" v-model="article.topic">
                            </v-select>
                        </v-col>
                        <v-col>
                            <label>Légende *</label>
                            <input class="input px-4" style="text-align: start; height: 60px;" type="text"
                                placeholder="Légende de l'article'" required v-model="article.label" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <label>Contenu* </label>
                            <v-textarea placeholder="Contenu de l'article'" required v-model="article.contain" />
                            
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col style="border-bottom:solid" cols="auto" class="px-0">
                            <h3>Auteur</h3>
                        </v-col>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row class="my-8">
                        <v-col cols="6">
                            <label>Nom</label>
                            <input class="input px-4" style="text-align: start; height: 60px;" type="text"
                                placeholder="Nom de l'auteur" required v-model="author.firstname" />
                        </v-col>
                        <v-col cols="6">
                            <label>Prénom</label>
                            <input class="input px-4" style="text-align: start; height: 60px;" type="text"
                                placeholder="Prénom de l'auteur" required v-model="author.lastname" />
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-btn class="button" height="50px" rounded elevation="3" @click="addArticle">Créer l'article
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name: 'ArticleCreateView',
    props: ["active"],
    data() {
        return {
            open_modal: false,
            article: {},
            author: {},
            themes: ['Choisir le thème', 'Histoire', 'People', 'Sport', 'Politique', 'Culture'],
        }
    },
    mounted() {
        console.log(this.$route, 'this.openModal = ', this.open_modal);
    },
    method: {
        addArticle() {
            //axios
            this.open_modal = false;
            this.$emit('close');
        },
        close() {
            console.log(this.active);
            this.open_modal = !this.active;
            this.$emit("close");
        },
    },
    watch: {
        active: function () {
            this.open_modal = this.active;
        },
        "article.topic": function () {
            if (this.article.topic == 'Choisir le thème') this.article.topic = null;
        }
    }
}
</script>