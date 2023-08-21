import { fetchMovie } from '../page'
import { ImagesSection } from './Images'

export default async function Photos({
  params,
}: {
  params: { movieId: string }
}) {
  const data = await fetchMovie(params.movieId)

  return (
    <main>
      <ImagesSection title={'Backdrops'} images={data.item.images.backdrops} />
      <ImagesSection title={'Posters'} images={data.item.images.posters} />
    </main>
  )
}
