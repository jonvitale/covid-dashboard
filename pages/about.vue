<template>
  <div class="mx-8">
    <NavigationItem label="Back to data" link="/" exact />
    <h1>Overview</h1>
    <p>
      The School District of Philadelphia (SDP) COVID-19 Dashboard displays
      information on COVID-19 tests and cases for SDP students and staff.
      <br />
      <br />
      This site includes information on tests performed and positive cases in
      schools as well as tests performed and cases confirmed off-site (for
      example, at a doctor’s office or community health center). For tests
      performed and cases confirmed off-site, only those that are reported to
      SDP are included in the dashboard.
      <br />
      <br />
      For more information on hybrid learning and testing processes, please
      visit

      <a
        href="https://www.philasd.org/coronavirus/schoolstart2020/"
        target="_blank"
      >
        Advancing Education Safety </a
      >.
    </p>
    <ul>
      <li>Data Refresh: Weekly</li>
      <li>
        Data Attribution
        <ul>
          <li>
            Location: Tests and case counts are attributed to the school at
            which the student was enrolled or the staff member is located.
          </li>
          <li>
            Date: Test and case counts are listed according to the day and week
            in which results were available, not necessarily when the tests were
            administered.
          </li>
        </ul>
      </li>
      <li>School Sectors Included: District K-12 and Alternative</li>
    </ul>
    <h1>Key Metrics</h1>
    <!-- <h2>Testing</h2> -->
    <ul>
      <li>
        <span class="metric-name"> # Students - </span> The total number of
        students, as of 4/6/2021, enrolled at district schools. This value
        differs from other District enrollment counts (for example, School
        Profiles or Open Data), which report enrollment as of October 1.
      </li>
      <li>
        <span class="metric-name"> # Staff - </span> The total number of
        District staff, as of 4/6/2021. Only staff at District schools or
        District administrative buildings are included.
      </li>
      <!-- <li>
        <span class="metric-name"> # In-Person Students - </span> The total
        number of students, by day, who are physically present at an SDP school
        building for at least one day a week. Students that receive instruction
        digitally only are not included.
      </li> -->
      <li>
        <span class="metric-name"> # Students and Staff Tested - </span> The
        total number of students and staff, by week and day, who have received a
        test for COVID-19. This includes both tests conducted at SDP-run testing
        facilities (such as schools) and self-reported test results. Students or
        staff who are tested twice as part of the process to confirm a positive
        case have only one test counted towards this measure.
      </li>
      <li>
        <span class="metric-name">
          # Students and Staff Tested Positive -
        </span>
        The total number of students and staff, by week and day, who have
        received a confirmed positive test result for COVID-19. This includes
        both tests conducted at SDP-run testing facilities (such as schools) and
        self-reported test results.
      </li>
      <li>
        <span class="metric-name"
          >Total Positive Community Cases by ZIP Code -
        </span>
        The cumulative number of positive COVID-19 cases in the ZIP code
        according to the City of Philadelphia. This count is not limited to
        students and staff.
      </li>
    </ul>
    <h1>Notes about the data on this dashboard</h1>
    <ul>
      <li>
        Both symptomatic and asymptomatic testing is available for students and
        staff. Asymptomatic students enrolled in hybrid learning are tested for
        COVID-19 at least once over the course of five weeks. Asymptomatic
        students with complex needs are tested for COVID-19 once weekly.
        Students who become symptomatic during the school day are tested by the
        school nurse. For students, tests and results associated with both
        symptomatic and asymptomatic testing are included.
      </li>
      <li>
        All staff participate in mandatory asymptomatic testing weekly at their
        work location. Staff who are showing symptoms of COVID-19 can also
        undergo voluntary symptomatic testing at specific locations across the
        city. For staff, this dashboard includes the tests and results for the
        mandatory asymptomatic testing only.
      </li>
      <li>
        This dashboard includes information about active employees and assigns
        them to their official location code. Some employees may be assigned to
        one location (for example, Central Office) but travel to school
        buildings. These employees' results would still be associated with their
        official location.
      </li>
      <li>
        Tests and results are associated with specific employees or students,
        not with the location. As a result, counts of positive cases at a
        specific location may shift if a student or employee transfers.
      </li>
    </ul>
    <p>
      Data reflects the most complete information as of the refresh date on the
      dashboard landing page. Data for the most recent week is subject to change
      as more complete information becomes available.
    </p>
    <!-- <h2>School Closures</h2>
    <ul>
      <li>
        <span class="metric-name"> # School Closed - </span> The total number of
        district schools were closed due to confirmed COVID-19 cases.
      </li>
      <li>
        <span class="metric-name"> Avg Days Closed - </span> The average number
        of days that district schools were closed due to confirmed COVID-19
        cases.
      </li>
    </ul> -->
  </div>
</template>
<script>
import NavigationItem from '~sdp-components/Navigation/NavigationItem'

export default {
  components: {
    NavigationItem,
  },
}
</script>
<style lang="postcss" scoped>
h1 {
  font-size: 20pt;
  font-weight: bold;
  text-align: center;
}

h2 {
  font-size: 18pt;
  font-weight: bold;
}

p,
ul {
  font-size: 13pt;
  padding-bottom: 1rem;
  list-style-type: circle;
}
li {
  margin-left: 4rem;
}
a {
  @apply text-blue-600 underline;
}
.metric-name {
  @apply italic font-semibold;
}
</style>
