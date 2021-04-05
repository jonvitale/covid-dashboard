import QdtComponents from 'qdt-components'

const host = 'dashboards.philasd.org' // window.location.hostname

const config = {
  host,
  prefix: '',
  port: host === 'localhost' ? 4848 : 443, // window.location.port,
  secure: host === 'localhost' ? window.location.protocol === 'https:' : true,
  appId:
    host === 'localhost'
      ? 'COVID-19 Dashboard'
      : 'b54d292f-7648-4207-9dfe-abdf78a12785',
}
const connections = {
  vizApi: true,
  engineApi: true,
}
const qdtComponents = new QdtComponents(config, connections)

export default ({ app }, inject) => {
  inject('qdt', qdtComponents)
}
