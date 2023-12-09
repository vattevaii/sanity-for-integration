import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7xsvx5ba',
    dataset: 'production'
  },
  project:{
    basePath: '/sanity'
  }
})
