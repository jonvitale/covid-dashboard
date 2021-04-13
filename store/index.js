export const state = () => ({
  show_placeholders: true,
  years: [],
  years_all: [],
  date_refresh: null,
  date_data_current: null,
  date_refresh_next: null,
  date_update: null,
})

const yearToYearEnd = (year) => parseInt(year.substr(-4))
// const yearToYearShort = year => `${year.substr(0, 4)}-${year.substr(-2)}`
const yearEndToSchoolYear = (yearEnd) => `${yearEnd - 1}-${yearEnd}`
const yearEndToSY = (yearEnd) => `${yearEnd - 1}-${yearEnd - 2000}`
const yearsToYearEndCurrent = (years) =>
  years
    .map((y) => yearToYearEnd(y))
    .reduce((prev, cur) => Math.max(cur, prev || -Infinity), null)
const yearsToYearEndPrevious = (years) =>
  years
    .map((y) => yearToYearEnd(y))
    .filter((y) => y < yearsToYearEndCurrent(years))
    .reduce((prev, cur) => Math.max(cur, prev || -Infinity), null)
const yearsToYearEndPrevious2 = (years) =>
  years
    .map((y) => yearToYearEnd(y))
    .filter((y) => y < yearsToYearEndPrevious(years))
    .reduce((prev, cur) => Math.max(cur, prev || -Infinity), null)

export const getters = {
  // of the currently available years (determined by filters)
  yearend_c: (state) => yearsToYearEndCurrent(state.years),
  yearend_p: (state) => yearsToYearEndPrevious(state.years),
  yearend_p2: (state) => yearsToYearEndPrevious2(state.years),
  schoolyear_c: (state) =>
    yearEndToSchoolYear(yearsToYearEndCurrent(state.years)),
  schoolyear_p: (state) =>
    yearEndToSchoolYear(yearsToYearEndPrevious(state.years)),
  schoolyear_p2: (state) =>
    yearEndToSchoolYear(yearsToYearEndPrevious2(state.years)),
  sy_c: (state) => yearEndToSY(yearsToYearEndCurrent(state.years)),
  sy_p: (state) => {
    return yearEndToSY(yearsToYearEndPrevious(state.years))
  },
  sy_p2: (state) => yearEndToSY(yearsToYearEndPrevious2(state.years)),

  // of all possible years
  yearend_c_all: (state) => yearsToYearEndCurrent(state.years_all),
  yearend_p_all: (state) => yearsToYearEndPrevious(state.years_all),
  yearend_p2_all: (state) => yearsToYearEndPrevious2(state.years_all),
  schoolyear_c_all: (state) =>
    yearEndToSchoolYear(yearsToYearEndCurrent(state.years_all)),
  schoolyear_p_all: (state) =>
    yearEndToSchoolYear(yearsToYearEndPrevious(state.years_all)),
  schoolyear_p2_all: (state) =>
    yearEndToSchoolYear(yearsToYearEndPrevious2(state.years_all)),
  sy_c_all: (state) => yearEndToSY(yearsToYearEndCurrent(state.years_all)),
  sy_p_all: (state) => yearEndToSY(yearsToYearEndPrevious(state.years_all)),
  sy_p2_all: (state) => yearEndToSY(yearsToYearEndPrevious2(state.years_all)),
  sy_p3_all: (state) =>
    `${yearsToYearEndPrevious2(state.years_all) - 2}-${
      yearsToYearEndPrevious2(state.years_all) - 2001
    }`,
}

export const mutations = {
  set_years(state, val) {
    state.years = val
  },
  set_years_all(state, val) {
    state.years_all = val
  },
  set_date_refresh(state, val) {
    state.date_refresh = val
  },
  set_date_update(state, val) {
    state.date_refresh = val
  },
  set_date_data_current(state, val) {
    state.date_data_current = val
  },
  set_date_refresh_next(state, val) {
    state.date_refresh_next = val
  },
}

export const actions = {
  async initialize({ commit }) {
    const dateRefresh = await this.$qlik.getVariableValueByName('date_refresh')
    commit('set_date_refresh', dateRefresh)
    const dateDataCurrent = await this.$qlik.getVariableValueByName(
      'date_data_current'
    )
    commit('set_date_data_current', dateDataCurrent)
    const dateRefreshNext = await this.$qlik.getVariableValueByName(
      'date_refresh_next'
    )
    commit('set_date_refresh_next', dateRefreshNext)
    const date = new Date()
    const fdate =
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    commit('set_date_update', fdate)
  },
  set_years({ commit }, values) {
    const years = values.SchoolYear.map(({ text }) => text)
    commit('set_years', years)
  },
  set_years_all({ commit }, values) {
    const years = values.SchoolYear.map(({ text }) => text)
    commit('set_years_all', years)
    // since the currently available years must be a subset of all years set these
    commit('set_years', years)
  },
}
