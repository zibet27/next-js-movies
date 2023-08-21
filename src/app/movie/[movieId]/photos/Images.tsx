'use client'
import Image from 'next/image'
import './Images.scss'

interface ImageData {
  file_path?: string
  aspect_ratio: number
}

interface Props {
  title: string
  images?: ImageData[]
}

export function ImagesSection(props: Props) {
  return (
    <div className="spacing">
      <div className="images__head">
        <h2 className="images__title">{props.title}</h2>
        <strong className="images__count">
          {' '}
          {props.images?.length} Images{' '}
        </strong>
      </div>
      <div className="images__items">
        {props.images?.map((image) => (
          <ImagesItem
            type={props.title.toLowerCase()}
            image={image}
            key={image.file_path}
          />
        ))}
      </div>
    </div>
  )
}

interface ItemProps {
  type: string
  image: ImageData
}

function ImagesItem(props: ItemProps) {
  const thumbWidth = props.type === 'posters' ? 370 : 533
  const thumbHeight = props.type === 'posters' ? 556 : 300

  return (
    <div className={`images-item images-${props.type}`}>
      <div className="images-item__img">
        <Image
          // loading="lazy"
          alt=""
          width={thumbWidth}
          height={thumbHeight}
          // sizes="xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342"
          src={`https://image.tmdb.org/t/p/w${thumbWidth}_and_h${thumbHeight}_bestv2${props
            .image.file_path!}`}
          style={{ aspectRatio: props.image.aspect_ratio }}
        />
      </div>
    </div>
  )
}
