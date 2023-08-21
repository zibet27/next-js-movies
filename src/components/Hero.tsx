import { formatRuntime } from '@/utils/format'
import styles from './Hero.module.scss'
import type { Links } from './ExternalLinks'
import type { Person } from '@/app/movie/[movieId]/CreditsItem'

interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  media_type: string
  production_companies?: { name: string }[]
  original_language?: string
  status?: string
  credits?: {
    crew: Person[]
  }
  title?: string
  name?: string
  overview?: string
  poster_path: string
  homepage?: string
  release_date?: string
  runtime?: number
  budget?: number
  vote_average?: number
  first_air_date?: string
  number_of_seasons?: number
  backdrop_path: string
  vote_count: number
  revenue?: number
  genres?: Genre[]
  external_ids: Links
}

interface Props {
  item: {
    name: string
    title?: string
    vote_average?: number
    release_date?: string
    first_air_date?: string
    number_of_seasons?: number
    backdrop_path: string
    vote_count: number
    runtime?: number
    overview: string
  }
  trailer?: string
}

export function Hero({ item, trailer }: Props) {
  const stars = item.vote_average ? item.vote_average * 10 : 0
  const name = item.title ? item.title : item.name
  const date = item.release_date || item.first_air_date
  const yearStart = date ? date.split('-')[0] : ''

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.backdrop}>
          <div>
            {trailer && (
              <button
                className={styles.play}
                type="button"
                aria-label="Play Trailer"
              />
              /* <CirclePlayIcon /> */
            )}
            <picture>
              <source
                srcSet={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                media="(min-width: 780px)"
              />
              <source
                srcSet={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`}
                media="(min-width: 300px)"
              />
              <img
                alt={item.title || item.name}
                className={styles.image}
                style={{
                  height: '100%',
                }}
                src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
              />
            </picture>
          </div>
        </div>

        <div className={styles.pane}>
          <div>
            <h1 className={styles.name}>
              {name}

              {/* <template >
          <A to="{ name: `${type}-id`, params: { id: item.id } }">
            { props.item.name }
          </A>
        </template> */}
            </h1>
            <div className={styles.meta}>
              <div className={styles.rating}>
                {stars && (
                  <div className={styles.stars}>
                    <div style={{ width: `${stars}%` }} />
                  </div>
                )}

                {item.vote_count > 0 && <div>{item.vote_count} Reviews</div>}
              </div>

              <div className={styles.info}>
                {item.number_of_seasons && (
                  <span>Season {item.number_of_seasons}</span>
                )}
                {yearStart && <span>{yearStart}</span>}
                {item.runtime && <span>{formatRuntime(item.runtime)}</span>}
                {/* <span>Cert. {{ cert }}</span> */}
              </div>
            </div>
            <div className={styles.desc}>{item.overview}</div>
          </div>
          {/* <transition
        appear
        name="hero">
        <div>
          <h1 className="$style.name">
            <template>
              {{ name }}
            </template>

            <template >
              <nuxt-link :to="{ name: `${type}-id`, params: { id: item.id } }">
                {{ name }}
              </nuxt-link>
            </template>
          </h1>

          <div className="$style.meta">
            <div

              className="$style.rating">
              <div

                className="$style.stars">
                <div :style="{ width: `${stars}%` }" />
              </div>

              <div>
                {{ item.vote_count | numberWithCommas }} Reviews
              </div>
            </div>

            <div className="$style.info">
              <span >Season {{ item.number_of_seasons }}</span>
              <span>{{ yearStart }}</span>
              <span >{{ item.runtime | runtime }}</span>
              <span>Cert. {{ cert }}</span>
            </div>
          </div>

          <div className="$style.desc">
            {{ item.overview | truncate(200) }}
          </div>

          <button
            className="button button--icon"
            className="$style.trailer"
            type="button"
            onClick="openModal">
            <PlayIcon className="icon" />
            <span className="txt">Watch Trailer</span>
          </button>
        </div> */}
        </div>
      </div>
    </div>
  )
}
