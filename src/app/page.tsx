import { Hero } from '@/components/Hero'
import { ListingCarousel } from '@/components/ListingCarousel'
import { Nav } from '@/components/Nav'
import {
  getListItem,
  getMovie,
  getTrending,
  getTvShow,
} from '@/services/tmdbAPI'

async function routeData() {
  try {
    const [trendingMovies, trendingTv] = await Promise.all([
      getTrending('movie'),
      getTrending('tv'),
    ])

    // feature a random item from movies or tv
    const items = [...trendingMovies.results, ...trendingTv.results]
    const randomItem = items[Math.floor(Math.random() * items.length)]
    const media = randomItem.title ? 'movie' : 'tv'

    const featured =
      media === 'movie'
        ? await getMovie(randomItem.id)
        : await getTvShow(randomItem.id)

    return {
      trendingMovies,
      trendingTv,
      featured,
    }
  } catch {
    throw new Error('Data not available')
  }
}

export default async function Home() {
  const data = await routeData()

  return (
    <main className="main">
      <Hero item={data.featured} />
      <ListingCarousel
        items={data.trendingMovies.results}
        viewAllHref={`/movie/categories/trending`}
        title={getListItem('movie', 'trending')?.TITLE}
      />
      <ListingCarousel
        items={data?.trendingTv.results}
        viewAllHref={`/tv/categories/trending`}
        title={getListItem('tv', 'trending')?.TITLE}
      />
      {/* <Show when={trendingMoviesShown}></Show> */}
    </main>
  )
}
