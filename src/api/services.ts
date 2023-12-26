import axios from 'axios'

export async function getUsers() {
  const { data } = await axios('https://api.github.com/users')
  return data
}
