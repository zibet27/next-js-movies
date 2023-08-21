import { Credits } from './Credits'
import { MovieInfo } from './MovieInfo'
import { getMovie } from '@/services/tmdbAPI'

interface Props {
  params: {
    movieId: string
  }
}

export async function fetchMovie(id: string) {
  try {
    const item = await getMovie(id)
    if (item.adult) {
      throw new Error('Data not available')
    } else {
      return { item }
    }
  } catch {
    throw new Error('Data not available')
  }
}

export default async function MoviePage({ params }: Props) {
  const data = await fetchMovie(params.movieId)
  return (
    <main>
      <MovieInfo item={data.item} />
      {data.item?.credits?.cast?.length && (
        <Credits people={data.item?.credits?.cast} />
      )}
    </main>
  )
}
