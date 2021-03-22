export const state = () => ({
  products: [],
})

export const mutations = {
  add(state, product) {
    product.selected = true
    state.products.push(product)
  },
  remove(state, payload) {
    payload.selected = false
    state.products = state.products.filter(
      (product) => product.id !== payload.id
    )
  },
  updateProduct(state, payload) {
    const products = []
    state.products.forEach((product) => {
      if (product.id === payload.id) {
        product.quantity = payload.quantity
        product.price = product.prices.filter(
          (item) => item.quantity === product.quantity
        )[0].price
      }
      products.push(product)
    })
    state.products = [...products]
  },
}

export const getters = {
  totalPrice: (state) => {
    return state.products.reduce((acc, { price }) => acc + price, 0)
  },
}
