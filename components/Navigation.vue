<template>
  <nav>
    <ul
      class="flex flex-wrap md:flex-no-wrap md:w-full justify-between mb-4 text-sm"
    >
      <NavigationItem id="nav-testing" label="Testing" link="/" exact />
      <NavigationItem
        id="nav-quarantine"
        label="Quarantine"
        link="/quarantine"
      />
      <NavigationItem
        id="nav-closures"
        label="School Closures"
        link="/closures"
      />
    </ul>
  </nav>
</template>

<script>
import NavigationItem from '~sdp-components/Navigation/NavigationItem'

export default {
  components: {
    NavigationItem,
  },
}
</script>
