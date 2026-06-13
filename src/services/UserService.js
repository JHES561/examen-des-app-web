import api from './api'

export const getUsers = () => {
  return api.get('/usuarios')
}

export const createUser = (user) => {
  return api.post('/usuarios', user)
}

export const updateUser = (id, user) => {
  return api.put(`/usuarios/${id}`, user)
}

export const deleteUser = (id) => {
  return api.delete(`/usuarios/${id}`)
}