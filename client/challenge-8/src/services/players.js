import axios from 'axios'

const baseUrl = 'http://localhost:3001/players'

const getAllPlayers = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

export default {
  getAllPlayers,
}
