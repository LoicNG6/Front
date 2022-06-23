<template>
    <v-container fluid>
        <v-dialog persistent v-model="open_modal">
            <v-card>

                <v-row>
                    <v-col>
                        <h3>Ecrire un article</h3>
                    </v-col>
                    <v-col style="border:solid">
                        <v-btn elevation="4" dark @click="open_modal = false; $emit('close')">
                        </v-btn>
                    </v-col>
                    <v-divider></v-divider>
                </v-row>

            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
// import HeaderView from "../../components/header.vue";
// import FooterView from "../../components/footer.vue";
export default {
    name: 'ArticleCreateView',
    props: ["active"],
    data() {
        return {
            open_modal: null,
        }
    },
    mounted() {
        console.log(this.$route, 'this.openModal = ', this.open_modal);
    },
    method: {
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
    }
}
</script>