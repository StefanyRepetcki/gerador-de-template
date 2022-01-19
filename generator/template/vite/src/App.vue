<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              rounded="0"
              class="mr-3"
              image="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            />

            Vuetify 3
          </div>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet
          class="d-flex align-center py-16"
          color="#333333"
          height="420"
        >
          <v-container>
            <v-responsive width="300">
              <h3 class="text-h4">
                Try experimental new features
              </h3>

              <p class="mt-4 text-medium-emphasis">
                For a limited time, Premium members can try out new features that we’re working on. Share your feedback to help us build a better YouTube.
              </p>
            </v-responsive>
          </v-container>
        </v-sheet>
      </section>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Filter on your search page
                  </h2>

                  <p class="text-success mt-3">
                    Available until Jun 7
                  </p>

                  <p class="mt-3">
                    Android only, on the latest YouTube app
                  </p>

                  <p class="mt-8">
                    <strong>How to use:</strong>

                    On the search results page, swipe down to see filters and tap a filter to refine results. Try searching for: hiking.
                  </p>

                  <p class="mt-8">
                    Update your device language to English. Filters only appear when searching in English. They might not be available for all topics.
                  </p>

                  <v-btn class="mt-6">
                    Try it out
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://www.gstatic.com/youtube/img/labs/chips_bar_android_search_1x.png"
              />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Listening controls
                  </h2>

                  <p class="text-success mt-3">
                    Available until Jun 7
                  </p>

                  <p class="mt-3">
                    iOS only; Listening controls makes it easier to find and use controls best suited for listening and multitasking.
                  </p>

                  <p class="mt-8">
                    <strong>How to use:</strong>

                    For listenable content such as music videos, click on “Show listening controls” under the pause button. You can also always find listening controls under the three dot menu when you’re watching a video.
                  </p>

                  <v-btn class="mt-6">
                    Try it out
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://www.gstatic.com/youtube/img/labs/listening_controls_1x.png"
              />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Search results in a grid layout on desktop
                  </h2>

                  <p class="text-success mt-3">
                    Available until Jun 16
                  </p>

                  <p class="mt-3">
                    See more search results when you use YouTube on desktop.
                  </p>

                  <p class="mt-8">
                    Instead of seeing search results in a list, you’ll see them displayed in a grid layout.
                  </p>

                  <v-btn class="mt-6">
                    Try it out
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://www.gstatic.com/youtube/img/labs/grid_layout_desktop_search_1x.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818"
      >
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive
                  class="overflow-visible"
                  width="350"
                >
                  <h2 class="text-h4">
                    Shape the future of YouTube
                  </h2>

                  <p class="mt-3">
                    Sign up to participate in user experience research studies and get rewarded for your time.
                  </p>

                  <v-btn
                    class="mt-6 ml-n4"
                    variant="text"
                  >
                    Sign up Now
                  </v-btn>
                </v-responsive>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
  export default { name: 'App' }
</script>
