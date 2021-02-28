export const state = () => ({
  products: [],
})

export const mutations = {
  add(state, payload) {
    payload.selected = true
    state.products.push(payload)
  },
  remove(state, payload) {
    payload.selected = false
    state.products = state.products.filter(
      (product) => product.id !== payload.id
    )
  },
}
