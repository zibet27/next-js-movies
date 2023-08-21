import { Hero } from '@/components/Hero'
import { fetchMovie } from './page'
import { Links } from './Links'

export default async function MovieLayout({
  children,
  params: { movieId },
}: {
  children: React.ReactNode
  params: { movieId: string }
}) {
  const data = await fetchMovie(movieId)

  return (
    <main>
      <Hero item={data.item} />
      <Links movieId={movieId}/>
      {children}
    </main>
  )
}
