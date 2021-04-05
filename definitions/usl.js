export default {
  qInfo: { qType: 'visualization' },
  qHyperCubeDef: {
    qDimensions: [
      {
        qDef: {
          qFieldDefs: ['School Name'],
          qFieldLabels: ['school'],
          qSortCriterias: [{ qSortByLoadOrder: 0, qSortByAscii: 1 }],
        },
        qNullSuppression: true,
      },
      {
        qDef: {
          qFieldDefs: ['Sector'],
          qFieldLabels: ['sector'],
        },
        qNullSuppression: false,
      },
      {
        qDef: {
          qFieldDefs: ['ZIP Code'],
          qFieldLabels: ['zipCode'],
        },
        qNullSuppression: false,
      },
      {
        qDef: {
          qFieldDefs: ['School Level'],
          qFieldLabels: ['schoolLevel'],
        },
        qNullSuppression: true,
      },
    ],
    qMeasures: [
      {
        qDef: {
          qDef: `Count(distinct {<[SchoolYear]={'$(v_cy)''}>} 1)`,
          qLabel: 'Flag_CY',
        },
      },
    ],
    qInitialDataFetch: [{ qWidth: 20, qHeight: 500 }],
  },
}
