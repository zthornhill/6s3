 <template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col align="center" justify="center" cols="12">
          <blockquote>
            Welcome {{validUserName}}!
            <footer>
              <small>
                <em>&mdash; SubAlert allows you to maintain a constant knowledge of your current media Subscriptions!</em>
              </small>
            </footer>
          </blockquote>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col 
          cols="18"
            sm="20"
            md="18"
        >
          <v-card class="elevation-2">
            <v-container
              fluid
              grid-list-md
            >
              <v-row>
                <v-col>
                  <v-card>
                    <v-img
                      :src="require('@/assets/images/stream.png')" height="300px">
                    </v-img>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewSubscriptions">View Subscriptions</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                    <v-img
                      :src="require('@/assets/images/subscription.jpg')" height="300px">
                    </v-img>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewSubLink">Find/Unsubscribe Subscriptions</v-btn>
                    </v-card-actions>
                  </v-card> 
                </v-col>
                <v-col>
                  <v-card>
                    <v-img
                      :src="require('@/assets/images/paypal.png')" height="300px">
                    </v-img>
                    <v-card-actions>
                      <v-btn flat color="orange" @click="viewPayment">Donate Today</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import router from '../router';

  export default {
    name: 'Home',
    data: () => ({
      validUserName: "Guest"
    }),
    mounted() {
      this.getUser();
    },
    methods: {
      viewSubscriptions() {
        router.push('/subscription-list');
      },
      viewPayment() {
        router.push('/payment');
      },
      viewSubLink() {
        router.push('/sub-link');
      },
      getUser() {
        if (localStorage.getItem("isAuthenticates")
          && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
          this.validUserName = JSON.parse(localStorage.getItem("log_user"));
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.elevation-2
{
  text-align: center;
}
</style>