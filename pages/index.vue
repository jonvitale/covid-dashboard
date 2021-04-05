<template>
  <div>
    <Square color="dark">
      <Content size="medium">
        This site displays information about COVID-19 tests and confirmed cases
        for both School District of Philadelphia students and staff. Tests and
        confirmed cases include both self-reported results and District testing
        results.
      </Content>
    </Square>
    <Square ref="v-student" name="Student" class="mb-4" color="light" tight>
      <div class="flex flex-wrap">
        <QlikKPI
          ref="kpiStudentTesting"
          class="max-w-sm"
          :q-id="kpiStudentTesting.qId"
          :title="kpiStudentTesting.title"
          :subtitle="kpiStudentTesting.subtitle"
          :secondary-label="kpiStudentTesting.secondaryLabel"
          :description="kpiStudentTesting.description"
          primary-size="small"
        />
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="chartStudentTesting"
        />
      </div>
      <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="tableStudentTesting"
        />
      </div>
    </Square>
    <Square
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
    </Square>
    <Square ref="v-map" name="Map" class="w-full mb-4" color="dark">
      <Heading size="medium"> Map of Testing by School </Heading>
      <Square color="tint" class="mt-2">
        <div class="w-full flex flex-row justify-center">
          <ButtonGroup
            :options="mapTypeMap"
            :selected-value="mapType"
            label="View map by"
            @buttonClicked="handleMapTypeSelection($event.value, $event.label)"
          />
        </div>
      </Square>
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
import ButtonGroup from '~sdp-components/PageElements/ButtonGroup'
import QlikKPI from '~sdp-components/Qlik/QlikKPI'

export default {
  name: 'StudentTesting',
  components: {
    Square,
    Heading,
    Content,
    QlikKPI,
    ButtonGroup,
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
    kpiStudentTesting() {
      return {
        qId: 'JbpdRn',
        description: '',
        title: '',
        subtitle: ' ',
        secondaryLabel: 'Tested Positive',
      }
    },
    chartStudentTesting() {
      return {
        id: 'PQn',
        type: 'linechart',
        height: '200px',
      }
    },
    tableStudentTesting() {
      return {
        id: 'CqXwzr',
        type: 'pivot-table',
        height: '150px',
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
          id: 'gPtaj',
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
        id: 'tHssvvj',
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
