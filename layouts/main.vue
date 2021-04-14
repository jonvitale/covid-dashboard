<template>
  <div>
    <!-- <v-tour
      class="text-lg"
      name="mainTour"
      :steps="tourSteps"
      :callbacks="tourCallbacks"
    /> -->
    <div class="container mx-auto px-2 lg:px-6 py-4 md:py-6">
      <Header />
      <br />
      <!-- <Navigation id="main-nav" />
      <br /> -->
      <Columns>
        <Column side="left" width="1/3">
          <Square color="dark">
            <Heading size="large">
              <span id="main-title"> COVID-19 DASHBOARD </span>
            </Heading>
            <p class="text-lg">
              This dashboard displays information about COVID-19 testing and
              confirmed cases for School District of Philadelphia students and
              staff.
              <br />
              <br />
              <!-- Site last updated: {{ $store.state.date_update }}
              <br />
              Data last refreshed: {{ $store.state.date_refresh }}
              <br /> -->
              Next data refresh: {{ $store.state.date_refresh_next }}
              <br />
              Data for previous weeks may change as additional information is
              available.
            </p>
            <!--
              {{ $store.state.date_current }}
              <button
              id="main-tour-button"
              class="blink text-blue-800 bg-white px-2 py-1 my-1 text-base font-bold uppercase hover:bg-gray-200 focus:outline-none"
              @click="launchTour"
            >
              Give me a tour
            </button> -->
          </Square>
          <Square id="main-filter-panel" color="tint" class="sticky top-0">
            <QlikSelectedFilterPills />
            <QlikCollapsableFilterContainer
              id="main-filters"
              :field-values="filterFieldValues"
              :blacklist-fields="['School Name']"
              @change="handleSelections"
            />
            <QlikFilter
              id="main-school-filter"
              style="max-height: 400px"
              title="School Name"
              field="School Name"
              @change="handleFieldSelections"
            />
          </Square>
        </Column>
        <Column id="main-content-side" side="right" width="2/3">
          <Nuxt />
        </Column>
      </Columns>
    </div>
    <Footer />
  </div>
</template>

<script>
import SelectionsMixin from '~/mixins/SelectionsMixin'
import Header from '~sdp-components/Header/Header'
// import Navigation from '~/components/Navigation'
import Footer from '~sdp-components/Footer/Footer'
import Columns from '~sdp-components/PageElements/Columns'
import Column from '~sdp-components/PageElements/Column'
import QlikSelectedFilterPills from '~sdp-components/Qlik/QlikSelectedFilterPills'
import QlikCollapsableFilterContainer from '~sdp-components/Qlik/QlikCollapsableFilterContainer'
import QlikFilter from '~sdp-components/Qlik/QlikFilter'
import Square from '~sdp-components/PageElements/Square'
import Heading from '~sdp-components/PageElements/Heading'

export default {
  components: {
    Header,
    // Navigation,
    Footer,
    Columns,
    Column,
    QlikSelectedFilterPills,
    QlikFilter,
    QlikCollapsableFilterContainer,
    Square,
    Heading,
  },
  mixins: [SelectionsMixin],
  data() {
    return {
      tourSteps: [
        {
          target: '#main-title',
          content:
            'Welcome to the District-Wide Surveys website. Here you can find out how students, parents/guardians, and teachers responded to the annual survey.',
          params: { enableScrolling: true },
          offset: -400,
        },
      ],

      tourCallbacks: {
        onSkip: () => this.$store.dispatch('tour/initialize_main'),
        onFinish: () => this.$store.dispatch('tour/initialize_main'),
      },
    }
  },
  head() {
    return {
      title: 'SDP COVID Dashboard',
    }
  },
  computed: {
    filterFieldValues() {
      return [
        { field: 'Current Network', label: 'Network' },
        { field: 'School Level' },
        { field: 'ZIP Code' },
      ]
    },
  },
  mounted() {
    // if (!this.$store.state.tour.main_initialized) this.launchTour()
  },
  /**
   * Remove field values that we don't want to carry to other pages
   */
  async destroyed() {
    const fieldsToClear = []
    const engine = await this.$qlik.engine
    let field
    fieldsToClear.forEach(async (fieldName) => {
      field = await engine.getField(fieldName)
      await field.clear()
    })
  },
  methods: {
    launchTour() {
      this.$tours.mainTour.start()
    },
  },
}
</script>
<style lang="postcss" scoped>
.blink {
  animation-name: blink-in;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-timing-function: linear;
}

@keyframes blink-in {
  0% {
    background-color: white;
  }
  10% {
    background-color: #2a4365;
  }
  20% {
    background-color: white;
  }
  30% {
    background-color: #2a4365;
  }
  40% {
    background-color: white;
  }
  50% {
    background-color: #2a4365;
  }
  60% {
    background-color: white;
  }
  70% {
    background-color: #2a4365;
  }
  80% {
    background-color: white;
  }
  90% {
    background-color: #2a4365;
  }
  100% {
    background-color: white;
  }
}
</style>
