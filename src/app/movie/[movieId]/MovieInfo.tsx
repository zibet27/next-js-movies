import { Poster } from '@/components/Poster'
import { ExternalLinks } from '@/components/ExternalLinks'
import {
  formatCurrency,
  formatDate,
  formatLanguage,
  formatRuntime,
} from '@/utils/format'
import styles from './MovieInfo.module.scss'
import Link from 'next/link'
import type { Movie } from '@/components/Hero'

interface Props {
  item: Movie
}

export function MovieInfo({ item }: Props) {
  const people = item.credits?.crew
  const directors = people
    ? people.filter((person) => person.job === 'Director')
    : []

  const externalIds = item.external_ids
  const homepage = item.homepage
  const links = homepage ? { ...externalIds, homepage } : externalIds

  return (
    <div className={`spacing ` + styles.info}>
      <div className={styles.left}>
        <div className={styles.poster}>
          <Poster path={item.poster_path} alt={item.title || item.name} />
          {/* <PlaceholderIcon v-else /> */}
        </div>
      </div>

      <div className={styles.right}>
        {item.overview && (
          <div className={styles.overview}>
            <h2 className={styles.title}>Storyline</h2>

            <div>{item.overview}</div>
          </div>
        )}
        <div className={styles.stats}>
          <ul className="nolist">
            {item.release_date && (
              <li>
                <div className={styles.label}>Released</div>

                <div className={styles.value}>
                  {formatDate(item.release_date)}
                </div>
              </li>
            )}
            {item.runtime && (
              <li>
                <div className={styles.label}>Runtime</div>

                <div className={styles.value}>
                  {formatRuntime(item.runtime)}
                </div>
              </li>
            )}
            {directors.length > 0 && (
              <li>
                <div className={styles.label}>Director</div>

                <div className={styles.value}>
                  {directors.map((person, i) => (
                    <span key={person.id}>
                      <Link href={`/person/${person.id}`}>{person.name}</Link>
                      {i < directors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </li>
            )}
            {item.budget && (
              <li>
                <div className={styles.label}>Budget</div>

                <div className={styles.value}>
                  {formatCurrency(item.budget)}
                </div>
              </li>
            )}
            {item.revenue && (
              <li>
                <div className={styles.label}>Revenue</div>

                <div className={styles.value}>
                  {formatCurrency(item.revenue)}
                </div>
              </li>
            )}

            {item.genres && item.genres.length && (
              <li>
                <div className={styles.label}>Genre</div>

                <div className={styles.value}>
                  {item.genres.map((genre, i) => (
                    <span key={genre.id}>
                      <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
                      {i < (item.genres?.length || 0) - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </li>
            )}
            {item.status && (
              <li>
                <div className={styles.label}>Status</div>

                <div className={styles.value}>{item.status}</div>
              </li>
            )}
            {item.original_language && (
              <li>
                <div className={styles.label}>Language</div>

                <div className={styles.value}>
                  {formatLanguage(item.original_language)}
                </div>
              </li>
            )}
            {item.production_companies && item.production_companies.length && (
              <li>
                <div className={styles.label}>Production</div>

                <div className={styles.value}>
                  {item.production_companies.map((c) => c.name).join(', ')}
                </div>
              </li>
            )}
          </ul>
        </div>

        <div className={styles.external}>
          <ExternalLinks links={links} />
        </div>
      </div>
    </div>
  )
}
