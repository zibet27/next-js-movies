import { Hero } from '@/components/Hero'
import { getTvShow } from '@/services/tmdbAPI'

export async function routeData(id: string) {
  try {
    const item = await getTvShow(id)

    if (item.adult) {
      throw new Error('Data not available')
    } else {
      return { item }
    }
  } catch {
    throw new Error('Data not available')
  }
}

export default async function MoviePage({
  params,
}: {
  params: { id: string }
}) {
  const data = await routeData(params.id)

  return (
    <main>
      <Hero item={data?.item} />
    </main>
  )
}
