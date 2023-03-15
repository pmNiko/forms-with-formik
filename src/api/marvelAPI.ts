import axios from 'axios'

const hash = 'a8cdf2c9c8d1cf0d58860c92c9c74be1'

const marvelApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: 1000,
    apikey: 'bed1b2298235b7d1d3fe21943df384b2',
    hash,
  },
})

export default marvelApi
