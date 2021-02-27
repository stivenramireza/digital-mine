export const state = () => ({
  products: [],
})

export const mutations = {
  add(state, product) {
    state.products.push(product)
  },
  remove(state, { product }) {
    state.products.splice(state.products.indexOf(product), 1)
  },
}
