import axios from 'axios'

const URL = 'http://jsonplaceholder.typicode.com/users'

export const getUserApi = async () => {
  const res = await axios.get(URL)
  if (res.status === 200) {
    console.log('res.data',res.data)
    return res.data
  }
}