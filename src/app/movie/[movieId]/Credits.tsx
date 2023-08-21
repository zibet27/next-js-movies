import { CreditsItem, Person } from './CreditsItem'

interface Props {
  people: Person[]
}

export function Credits(props: Props) {
  const disableLeftButton = false
  return (
    <div className="listing listing--carousel">
      <div className="listing__head">
        <h2 className="listing__title">Cast</h2>
      </div>

      <div className="carousel">
        <button
          className="carousel__nav carousel__nav--left"
          aria-label="Previous"
          type="button"
          disabled={disableLeftButton}
          //click="moveToClickEvent('left')"
        >
          {/* <ChevronLeftIcon /> */}
        </button>

        <div
          //ref="carouselElement"
          className="carousel__items"
          // scroll="scrollEvent"
        >
          {props.people.map((person) => (
            <CreditsItem person={person} key={person.id}/>
          ))}
        </div>

        <button
          className="carousel__nav carousel__nav--right"
          aria-label="Next"
          type="button"
          //disabled="disableRightButton"
          //click="moveToClickEvent('right')"
        >
          {/* <ChevronRightIcon /> */}
        </button>
      </div>
    </div>
  )
}
