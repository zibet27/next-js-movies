import Image from 'next/image'
import Link from 'next/link'
import './CreditItems.scss'

export interface Person {
  id: string
  job: string
  name: string
  character: string
  profile_path: string
}

interface Props {
  person: Person
}

export function CreditsItem({ person }: Props) {
  return (
    <div className="credits-item">
      <Link className="credits-item__link" href={`/person/${person.id}`}>
        <div className="credits-item__img">
          <Image
            loading="lazy"
            width="370"
            height="556"
            sizes="xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342"
            alt={person.name}
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${person.profile_path}`}
          />
          {/* <PlaceholderIcon v-else /> */}
        </div>

        <h2 className="credits-item__name">{person.name}</h2>

        <div className="credits-item__character">{person.character}</div>
      </Link>
    </div>
  )
}
