<template>
  <div>
    <Square color="dark">
      <Content size="medium">
        This site displays information about school closed due to a large number
        of confirmed student or staff cases of COVID-19.
      </Content>
    </Square>
    <Square ref="v-student" name="Student" class="mb-4" color="light" tight>
      <div class="flex flex-wrap">
        <QlikKPI
          ref="kpiSchoolClosures"
          class="max-w-sm"
          :q-id="kpiSchoolClosures.qId"
          :title="kpiSchoolClosures.title"
          :subtitle="kpiSchoolClosures.subtitle"
          :secondary-label="kpiSchoolClosures.secondaryLabel"
          :description="kpiSchoolClosures.description"
          primary-size="small"
        />
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="chartSchoolClosures"
        />
      </div>
      <!-- <div>
        <QdtComponent
          class="flex-auto m-2 p-2 bg-white"
          type="QdtViz"
          :props="tableSchoolClosures"
        />
      </div> -->
    </Square>
    <Square ref="v-map" name="Map" class="w-full mb-4" color="dark">
      <Heading size="medium"> Map of Closures by School </Heading>
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
    kpiSchoolClosures() {
      return {
        qId: 'FxJAwNh',
        description: 'Data Forthcoming',
        title: 'Schools Closed',
        subtitle: ' ',
        secondaryLabel: '',
      }
    },
    chartSchoolClosures() {
      return {
        id: 'DKPsNY',
        type: 'line-chart',
        height: '200px',
      }
    },
    tableSchoolClosures() {
      return {
        id: '',
        type: 'pivot-table',
        height: '150px',
      }
    },
    map() {
      return {
        id: 'dQXjLvb',
        type: 'map',
        height: '600px',
      }
    },
    table() {
      return {
        id: 'LndpZm',
        type: 'pivot-table',
        height: '600px',
      }
    },
  },
}
</script>
