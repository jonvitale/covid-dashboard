import QdtComponents from 'qdt-components'

const host = 'dashboards.philasd.org' // window.location.hostname

const isTesting = true

const appId = isTesting
  ? 'b54d292f-7648-4207-9dfe-abdf78a12785'
  : '96cfffd9-e4c7-4d05-8bac-6bb16aa1c7a6'

const config = {
  host,
  prefix: '',
  port: host === 'localhost' ? 4848 : 443, // window.location.port,
  secure: host === 'localhost' ? window.location.protocol === 'https:' : true,
  appId,
}
const connections = {
  vizApi: true,
  engineApi: true,
}
const qdtComponents = new QdtComponents(config, connections)

export default ({ app }, inject) => {
  inject('qdt', qdtComponents)
}
