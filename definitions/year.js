export default {
  qInfo: { qType: 'visualization' },
  qHyperCubeDef: {
    qDimensions: [
      {
        qDef: {
          qFieldDefs: ['School Year'],
          qFieldLabels: ['SchoolYear'],
        },
        qNullSuppression: true,
      },
    ],
    qInitialDataFetch: [{ qWidth: 2, qHeight: 100 }],
  },
}
