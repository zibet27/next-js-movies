import { Card } from '@/components/Card'
import { getListItem, getTrending, getTvShows } from '@/services/tmdbAPI'
import Link from 'next/link'

export async function routeData(name: string) {
  try {
    const items =
      name === 'trending' ? await getTrending('tv') : await getTvShows(name)
    return { items }
  } catch {
    throw new Error('Data not available')
  }
}
export default async function MovieCategories({
  params,
}: {
  params: { name: string }
}) {
  const data = await routeData(params.name)

  return (
    <main className="main">
      <div className="listing">
        <div className="listing__head">
          <h2 className="listing__title">
            {getListItem('tv', params.name)?.TITLE}
          </h2>
          <Link href="viewAllUrl" className="listing__explore">
            <strong>Explore All</strong>
          </Link>
        </div>
        <div className="listing__items">
          {data?.items.results.map((item: any) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
