<template>
  <div>
    <Square color="dark">
      <Content size="medium">
        This site displays information about COVID-19 tests and positive cases
        for both School District of Philadelphia students and staff. Tests and
        positive cases include both self-reported results and District testing
        results
      </Content>
    </Square>
    <Square ref="v-student" name="Student" class="mb-8" color="light" tight>
      <div class="flex flex-wrap justify-center">
        <QlikKPI
          ref="kpiTesting"
          class="max-w-sm"
          :q-id="kpiTesting.qId"
          :title="kpiTesting.title"
          :subtitle="kpiTesting.subtitle"
          :secondary-label="kpiTesting.secondaryLabel"
          :description="kpiTesting.description"
          primary-size="small"
          secondary-text-color="red"
        />
        <QlikKPI
          ref="kpiPctTesting"
          class="max-w-sm"
          :has-secondary="false"
          :q-id="kpiPctTesting.qId"
          :title="kpiPctTesting.title"
          :subtitle="kpiPctTesting.subtitle"
          :description="kpiPctTesting.description"
          primary-size="small"
        />
      </div>
      <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="chartTesting"
        />
      </div>
      <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="tableTesting"
        />
      </div>
      <div class="text-black text-left ml-6">
        1. Data in this section is district-wide only and will not respond to
        filters or school selections.
      </div>
      <div class="text-black text-left ml-6">
        2. For staff, only tests and results from mandatory asymptomatic testing
        program are included. See "About" page for more details.
      </div>
    </Square>
    <!-- <Square
      v-if="showPlaceholder"
      ref="v-staff"
      name="Staff"
      class="flex flex-wrap mb-4"
      color="light"
      tight
    >
      <QlikKPI
        ref="kpiStaffTesting"
        class="max-w-sm"
        :q-id="kpiStaffTesting.qId"
        :title="kpiStaffTesting.title"
        :subtitle="kpiStaffTesting.subtitle"
        :secondary-label="kpiStaffTesting.secondaryLabel"
        :description="kpiStaffTesting.description"
        primary-size="small"
      />
      <QdtComponent
        class="flex-auto m-2 p-2 bg-white"
        type="QdtViz"
        :props="chartStaffTesting"
      />
    </Square> -->
    <Square ref="v-map" name="Map" class="w-full mb-8" color="dark">
      <Heading size="medium"> Map of Positive Cases by School </Heading>
      <!-- <Square color="tint" class="mt-2">
        <div class="w-full flex flex-row justify-center">
          <ButtonGroup
            :options="mapTypeMap"
            :selected-value="mapType"
            label="View map by"
            @buttonClicked="handleMapTypeSelection($event.value, $event.label)"
          />
        </div>
      </Square> -->
      <QdtComponent class="w-full" type="QdtViz" :props="map" :load="loadMap" />
    </Square>
    <Square ref="v-table" name="Table" class="w-full mb-4" color="tint" tight>
      <QdtComponent
        class="w-full"
        :load="loadTable"
        type="QdtViz"
        :props="table"
      />
    </Square>
  </div>
</template>

<script>
import Square from '~sdp-components/PageElements/Square.vue'
import Heading from '~sdp-components/PageElements/Heading.vue'
import Content from '~sdp-components/PageElements/Content.vue'
import QdtComponent from '~sdp-components/Qdt/QdtComponent'
// import ButtonGroup from '~sdp-components/PageElements/ButtonGroup'
import QlikKPI from '~sdp-components/Qlik/QlikKPI'

export default {
  name: 'Testing',
  components: {
    Square,
    Heading,
    Content,
    QlikKPI,
    // ButtonGroup,
    QdtComponent,
  },
  layout: 'main',
  data() {
    return {
      mapType: 'student',
      // do not load map/table until scrolled
      loadMap: true,
      loadTable: true,
    }
  },
  computed: {
    showPlaceholder() {
      return this.$store.state.show_placeholders
    },
    mapTypeMap() {
      return {
        student: 'Students',
        staff: 'Staff',
        all: 'Students & Staff',
      }
    },
    kpiTesting() {
      return {
        qId: '2a05e670-30df-419c-9e31-2688551b80da',
        description: '',
        title: `# Students and Staff Tested ¹ ²`,
        subtitle: ' ',
        secondaryLabel: 'Tested Positive',
      }
    },
    kpiPctTesting() {
      return {
        qId: 'sJLmN',
        description: '',
        title: '% Tested Positive ¹ ²',
        subtitle: ' ',
      }
    },
    chartTesting() {
      return {
        id: 'ed329493-b17d-4308-a964-b49ee8343aab',
        type: 'linechart',
        height: '200px',
        noSelections: true,
      }
    },
    tableTesting() {
      return {
        id: 'bbc802e5-fcee-49f0-9b67-4c99a3d3c985',
        type: 'pivot-table',
        height: '200px',
        noSelections: true,
      }
    },
    kpiStaffTesting() {
      return {
        qId: '8976d981-88a1-41ef-ab07-5980e57147c2',
        description: '',
        title: '',
        subtitle: ' ',
        secondaryLabel: 'Tested Positive',
      }
    },
    chartStaffTesting() {
      return {
        id: '0ddcbc59-d432-47fa-ba34-0f5f5c514402',
        type: 'linechart',
        height: '200px',
      }
    },
    tableStaffTesting() {
      return {
        id: 'dYtHEsA',
        type: 'pivot-table',
        height: '150px',
      }
    },
    map() {
      if (this.mapType === 'student') {
        return {
          id: 'cacc4378-142b-437c-9ac6-056814359cb8',
          type: 'map',
          height: '600px',
        }
      } else if (this.mapType === 'staff') {
        return {
          id: '125150c3-2007-44cb-a254-6360efe7aae8',
          type: 'map',
          height: '600px',
        }
      } else {
        return {
          id: 'cacc4378-142b-437c-9ac6-056814359cb8',
          type: 'map',
          height: '600px',
        }
      }
    },
    table() {
      return {
        id: 'dfd11a55-fe20-484b-8374-a4af10aa9fcf',
        type: 'pivot-table',
        height: '600px',
      }
    },
  },
  methods: {
    handleMapTypeSelection(value) {
      this.mapType = value
    },
  },
}
</script>
