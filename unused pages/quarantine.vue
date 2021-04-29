<template>
  <div>
    <Square color="dark">
      <Content size="medium">
        This site displays information about students and staff directed to
        quarantine due to direct contact with individuals with confirmed cases
        of COVID-19.
      </Content>
    </Square>
    <Square ref="v-student" name="Student" class="mb-4" color="light" tight>
      <div class="flex flex-wrap">
        <QlikKPI
          ref="kpiStudentQuarantine"
          class="max-w-sm"
          :q-id="kpiStudentQuarantine.qId"
          :title="kpiStudentQuarantine.title"
          :subtitle="kpiStudentQuarantine.subtitle"
          :secondary-label="kpiStudentQuarantine.secondaryLabel"
          :description="kpiStudentQuarantine.description"
          primary-size="small"
        />
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="chartStudentQuarantine"
        />
      </div>
      <!-- <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="tableStudentQuarantine"
        />
      </div> -->
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
        :props="chartStaffQuarantine"
      />
    </Square>
    <Square ref="v-map" name="Map" class="w-full mb-4" color="dark">
      <Heading size="medium"> Map of Quarantining by School </Heading>
      <QdtComponent class="w-full" type="QdtViz" :props="map" :load="loadMap" />
    </Square>
    <!-- <Square ref="v-table" name="Table" class="w-full mb-4" color="tint" tight>
      <QdtComponent
        class="w-full"
        :load="loadTable"
        type="QdtViz"
        :props="table"
      />
    </Square> -->
  </div>
</template>

<script>
import Square from '~sdp-components/PageElements/Square.vue'
import Heading from '~sdp-components/PageElements/Heading.vue'
import Content from '~sdp-components/PageElements/Content.vue'
import QdtComponent from '~sdp-components/Qdt/QdtComponent'
import QlikKPI from '~sdp-components/Qlik/QlikKPI'

export default {
  name: 'StudentTesting',
  components: {
    Square,
    Heading,
    Content,
    QlikKPI,
    QdtComponent,
  },
  layout: 'main',
  data() {
    return {
      // do not load map/table until scrolled
      loadMap: true,
      loadTable: true,
    }
  },
  computed: {
    showPlaceholder() {
      return this.$store.state.show_placeholders
    },
    kpiStudentQuarantine() {
      return {
        qId: 'b2e2028f-1af6-4ce6-96e1-86c755a0a4af',
        description: 'Data Forthcoming',
        title: 'Students Directed to Quarantine',
        subtitle: ' ',
        secondaryLabel: '',
      }
    },
    chartStudentQuarantine() {
      return {
        id: '7fc3068e-122e-410f-a0a4-91f1da5a6335',
        type: 'line-chart',
        height: '200px',
      }
    },
    tableStudentQuarantine() {
      return {
        id: '',
        type: 'pivot-table',
        height: '150px',
      }
    },
    kpiStaffTesting() {
      return {
        qId: 'c0ab4b3e-33ab-4daf-90b2-69c16c82b962',
        description: 'Data Forthcoming',
        title: 'Staff Directed to Quarantine',
        subtitle: ' ',
        secondaryLabel: '',
      }
    },
    chartStaffQuarantine() {
      return {
        id: 'bd6d21a8-5e5f-41f9-81d8-a7b5b2c650d5',
        type: 'linechart',
        height: '200px',
      }
    },
    tableStaffQuarantine() {
      return {
        id: '',
        type: 'pivot-table',
        height: '150px',
      }
    },
    map() {
      return {
        id: '370f3fa2-6465-4e0f-a6e4-612595c2fdce',
        type: 'map',
        height: '600px',
      }
    },
    table() {
      return {
        id: '',
        type: 'pivot-table',
        height: '600px',
      }
    },
  },
}
</script>
