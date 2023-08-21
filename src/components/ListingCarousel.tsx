import Link from 'next/link'
import { Card } from './Card'

interface Props {
  items: {
    id: string
    title: string
    name?: string
    media_type?: string
    poster_path: string
  }[]
  title?: string
  viewAllHref: string
}

export function ListingCarousel({ items, title, viewAllHref }: Props) {
  if (items.length == 0) {
    return null
  }

  return (
    <div className="listing listing--carousel">
      {(title || viewAllHref) && (
        <div className="listing__head">
          {title && <h2 className="listing__title">{title}</h2>}

          {viewAllHref && (
            <Link href={viewAllHref} className="listing__explore">
              <strong>Explore All</strong>
            </Link>
          )}
        </div>
      )}

      <div className="carousel">
        <button
          className="carousel__nav carousel__nav--left"
          aria-label="Previous"
          type="button"
          // disabled="disableLeftButton"
          // click="moveToClickEvent('left')"
        >
          {/* <ChevronLeftIcon /> */}
        </button>

        <div className="carousel__items">
          {items.map((item) => (
            <Card item={item} key={item.id}/>
          ))}

          <div className="card">
            <Link href={viewAllHref} className="card__link">
              <div className="card__img">
                <span>Explore All</span>
              </div>
            </Link>
          </div>
        </div>

        <button
          className="carousel__nav carousel__nav--right"
          aria-label="Next"
          type="button"
          // disabled="disableRightButton"
          // click="moveToClickEvent('right')"
        >
          {/* <ChevronRightIcon /> */}
        </button>
      </div>
    </div>
  )
}
