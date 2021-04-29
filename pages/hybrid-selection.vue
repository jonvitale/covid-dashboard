<template>
  <div>
    <Square color="dark">
      <Content size="medium">
        This site displays information about the number of students opting for
        hybrid learning.
      </Content>
    </Square>
    <Square ref="v-student" name="Student" class="mb-8" color="light" tight>
      <div class="flex flex-wrap lg:flex-no-wrap mb-4">
        <QlikKPI
          ref="kpiPctHybrid"
          class="max-w-sm"
          :has-secondary="false"
          :q-id="kpiPctHybrid.qId"
          :title="kpiPctHybrid.title"
          :subtitle="kpiPctHybrid.subtitle"
          :description="kpiPctHybrid.description"
          primary-size="small"
        >
          <template #title>
            <div>
              % Students in Hybrid Learning
              <sup> 1 </sup>
            </div>
          </template>
        </QlikKPI>
        <div class="flex-grow">
          <QdtComponent
            class="flex-auto m-2 p-2 bg-white"
            type="QdtViz"
            :props="barChartTesting"
          />

          <div class="w-full flex flex-row justify-center">
            <ButtonGroup
              :options="chartFieldDict"
              :selected-value="chartField"
              label="View chart by"
              @click="
                handleMapFieldSelection($event.value, $event.label)
              "
            />
          </div>
        </div>
      </div>
      <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="tableHybridDistrict"
        />
      </div>
      <div class="text-black text-left ml-6">
        1. Data in this section is district-wide only and will not respond to
        filters or school selections.
      </div>
      <!-- <div class="text-black text-left ml-6">
        2. These values were updated on April 13, 2021, to include positive
        cases resulting from staff symptomatic testing and staff self-reported
        results. The % Students and Staff Tested Positive is the total number of
        confirmed positive test results for COVID-19 out of the total number of
        students and staff as of {{ $store.state.date_data_current }}
      </div> -->
    </Square>
    <Square ref="v-map" name="Map" class="w-full mb-8" color="dark">
      <Heading size="medium">
        Map of Enrollment in Hybrid Learning by School
      </Heading>

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
  name: 'Testing',
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
      chartField: 'Grade Code',
      // do not load map/table until scrolled
      loadMap: true,
      loadTable: true,
    }
  },
  computed: {
    showPlaceholder() {
      return this.$store.state.show_placeholders
    },
    chartFieldDict() {
      return {
        'Grade Code': 'Grade Code',
        'Race/Ethnicity': 'Race/Ethnicity',
        'EL Status': 'EL Status',
        'Special Education': 'Special Education',
        'Economic Disadvantage': 'Economic Disadvantage',
      }
    },
    kpiPctHybrid() {
      return {
        qId: '308a3b1c-e014-4127-9c68-eb5ab9d5cde2',
        description: '',
        title: '% Students and Staff Tested Positive',
        subtitle: ' ',
      }
    },
    barChartTesting() {
      return {
        // id: 'dTQkZeX',
        id: 'WLVYc',
        type: 'barchart',
        height: '300px',
        noSelections: true,
      }
    },
    tableHybridDistrict() {
      return {
        id: 'e3aff094-c98e-4631-929d-e1bd3c7a6553',
        type: 'pivot-table',
        height: '200px',
        noSelections: true,
      }
    },
    map() {
      return {
        id: 'a6e329ac-d008-403e-9533-ff1ad39e4cc6',
        type: 'map',
        height: '600px',
      }
    },
    table() {
      return {
        id: 'e930cda9-bcbf-413e-ba42-56822ca24c48',
        type: 'pivot-table',
        height: '600px',
      }
    },
  },
  async created() {
    this.areaType = await this.$qlik.getVariableValueByName('v_field_hybrid')
  },
  methods: {
    async handleMapFieldSelection(value) {
      await this.$qlik.setVariableValueByName('v_field_hybrid', value)
      this.chartField = value
    },
  },
}
</script>
