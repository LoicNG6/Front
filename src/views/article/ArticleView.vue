<template>
    <HeaderView />
    <v-container fluid style="height: 100%; border:solid">
        <v-row>
            <v-col cols="auto">
                In the Article page
            </v-col>
            <v-col>
                <v-btn to="create-article">Create</v-btn>
            </v-col>
        </v-row>
    </v-container>
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