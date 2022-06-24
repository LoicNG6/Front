<template>
  <v-content v-if="$route.name == 'home'">
    <Header></Header>

    <v-container fluid fill-height>
      <v-flex xs12 sm6 offset-sm3>

        <!-- remplacer dans mon carroussel, colors par entertainment -->
        <v-carousel v-model="change_carroussel">
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color.title" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  Slide {{ i + 1 }}
                  {{ color.title }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                ARTICLES
              </h3>
              <div>
                <p>
                  Quick example of collapsable mobile menu
                  <tt>&lt;v-toolbar&gt;</tt>, with a
                  <tt>&lt;v-menu&gt;</tt> for mobile screens.
                </p>
                <p>
                  Also shows how to use <tt>.hidden-md-and-up</tt> CSS
                  classes to appropriately hide/show the menu depending upon
                  window width.
                </p>

                <v-btn flat color="orange">Share</v-btn>
              </div>
            </div>
            <div>
              <h3 class="headline mb-0">
                ÉVENEMENTS
              </h3>
              <div>
                <p>
                  Quick example of collapsable mobile menu
                  <tt>&lt;v-toolbar&gt;</tt>, with a
                  <tt>&lt;v-menu&gt;</tt> for mobile screens.
                </p>
                <p>
                  Also shows how to use <tt>.hidden-md-and-up</tt> CSS
                  classes to appropriately hide/show the menu depending upon
                  window width.
                </p>

                <v-btn flat color="orange">Share</v-btn>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-container>
    <Footer></Footer>
  </v-content>
  <router-view class="pa-0" />
</template>

<script>
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      change_carroussel: 0,
      articles: [],
      events: {},
      faits_divers: [],
      colors: [
        { title: 'primary' },
        { title: 'secondary' },
        { title: 'yellow' },
        { title: 'red' },
        { title: 'orange' },
      ],
    }
  },

  computed: {
    entertainment: {
      get() {
        return this.faits_divers;
      },
      set() {
        // Les 3 derniers articles
        return [this.articles[0], this.articles[1], this.articles[2]];
      }
    },
  },
  mounted() {
    this.getArticle();
    this.getEvements();

    console.log(this.$route);
  },

  methods: {
    getArticle() {

    },
    getEvements() {

    },
  },
}
</script>
