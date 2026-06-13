import api from './api'

export const loginUser = async (
  username,
  password
) => {

  const response =
  await api.get('/usuarios')

  const usuario =
  response.data.find(

    user =>

    user.username === username
    &&

    user.password === password

  )

  return usuario

}