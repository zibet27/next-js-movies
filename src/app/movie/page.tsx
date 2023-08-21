import { Hero } from '@/components/Hero'
import { ListingCarousel } from '@/components/ListingCarousel'
import { getListItem, getMovie, getMovies } from '@/services/tmdbAPI'

async function routeData() {
  try {
    const [popular, topRated, nowPlaying] = await Promise.all([
      getMovies('popular'),
      getMovies('top_rated'),
      getMovies('now_playing'),
    ])

    const featured = await getMovie(topRated.results[0].id)

    return {
      popular,
      topRated,
      nowPlaying,
      featured,
    }
  } catch (e) {
    console.log((e as Error).stack)
    throw new Error((e as Error).message)
  }
}

export default async function MoviesPage() {
  const data = await routeData()

  return (
    <main className="main">
      <Hero item={data.featured} />
      <ListingCarousel
        items={data.popular.results}
        title={getListItem('movie', 'popular')?.TITLE}
        viewAllHref={`/movie/categories/popular`}
      />
      <ListingCarousel
        items={data.topRated.results}
        viewAllHref={`/movie/categories/top_rated`}
        title={getListItem('movie', 'top_rated')?.TITLE}
      />
      <ListingCarousel
        items={data.nowPlaying.results}
        title={getListItem('movie', 'now_playing')?.TITLE}
        viewAllHref={`/movie/categories/now_playing`}
      />
    </main>
  )
}
