import { percSchema } from '../../services/rxdb_schema'
import { PercAPI } from '../../services/json_service'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'
import { json } from '../helpers/json'

export const perc = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    ...json.state,
    name: 'percussions4',
    slug: 'perc4',
    schema: percSchema,
    api: PercAPI
  },
  actions: {
    ...rxdb.actions,
    ...json.actions
  },
  mutations: {
    ...loading.mutations,
    ...rxdb.mutations,
    ...json.mutations
  },
  getters: {
    percs (state) {
      return state.docs
    },
    perc (state) {
      return state.doc
    },
    percJson (state) {
      return state.jsonDoc
    }
  }
}
