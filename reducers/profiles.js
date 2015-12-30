import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const byId = handleActions({
  'CREATE_PROFILE' (state, action) {
    let profile = action.payload
    return {...state, [profile.id]: profile }
  },

  'LOAD_PROFILES' (state, action) {
    let profiles = action.payload.reduce((obj, profile) => {
      obj[profile.id] = profile
      return obj
    }, {})
    return {...state, ...profiles }
  }
}, {})

export default combineReducers({
  byId
})