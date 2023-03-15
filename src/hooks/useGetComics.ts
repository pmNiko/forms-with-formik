import { useEffect, useState } from 'react'
import { ComicsResponse, Result } from '../interfaces/comics'
import marvelApi from '../api/marvelAPI'

export const useGetComics = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [comics, setComics] = useState<Array<Result>>([])

  const getCharacters = async () => {
    const { data } = await marvelApi.get<ComicsResponse>('/comics')

    const { results } = data?.data

    console.log('Resultado ', results)

    setComics(results)
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

  return { comics, isLoading }
}
