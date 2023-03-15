import { useEffect, useState } from 'react'
import { CharactersResponse, Result } from '../interfaces/characters'
import marvelApi from '../api/marvelAPI'

export const useGetCharacters = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [characteres, setCharacteres] = useState<Array<Result>>([])

  const getCharacters = async () => {
    const { data } = await marvelApi.get<CharactersResponse>('/characters')

    const { results } = data?.data

    console.log('Resultado ', results)

    setCharacteres(results)
  }

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        await getCharacters()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    })()
  }, [])

  return { characteres, isLoading }
}
