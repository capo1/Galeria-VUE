import * as types from '@/constants/mutation-types.js'

// initial state
// shape: [{ id, quantity }]
const state = {
    sidebarOpen: false
}

// getters
const getters = {

    sidebarOpen: state => state.sidebarOpen
}

// actions
const actions = {
    toggleSidebar({
        commit
    }) {
        commit(types.TOGGLE_SIDEBAR)
    }
}

// mutations
const mutations = {
    [types.TOGGLE_SIDEBAR](state) {
        state.sidebarOpen = !state.sidebarOpen
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}