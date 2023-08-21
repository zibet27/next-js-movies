import Link from 'next/link'
import { Poster } from './Poster'
import type { Movie } from './Hero'

interface Props {
  item: Movie
  loading?: 'lazy' | 'eager'
}

export function Card({ item, loading }: Props) {
  const media = item.media_type ? item.media_type : item.name ? 'tv' : 'movie'
  
  return (
    <div className="card">
      <Link className="card__link" href={`/${media}/${item.id}`}>
        <div className="card__img">
          <Poster
            path={item.poster_path}
            alt={item.title || item.name}
            //loading={loading || 'eager'}
          />
        </div>
        <h2>{item.title}</h2>
      </Link>
    </div>
  )
}
