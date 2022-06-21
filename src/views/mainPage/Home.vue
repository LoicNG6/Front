<template>
    <Header></Header>
          <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-img
                src='../../assets/logo.png'
                aspect-ratio="3"
              ></v-img>

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
      </v-content>
    <Footer></Footer>
</template>

<script>
import Header from '../footer/header.vue'
import Footer from '../footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  },
}
</script>
