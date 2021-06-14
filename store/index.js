export const state = () => ({
  darkMode: false,
})

export const mutations = {
  SWITCH_DARK(state) {
    state.darkMode = !state.darkMode
  },
}
