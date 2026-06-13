import api from './api'

export const getProducts = () => {
  return api.get('/productos')
}

export const createProduct = (
  product
) => {
  return api.post(
    '/productos',
    product
  )
}

export const updateProduct = (
  id,
  product
) => {
  return api.put(
    `/productos/${id}`,
    product
  )
}

export const deleteProduct = (
  id
) => {
  return api.delete(
    `/productos/${id}`
  )
}