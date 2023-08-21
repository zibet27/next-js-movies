'use client'

import { useState } from 'react'
import styles from './Poster.module.scss'

const lerp = (min: number, max: number, percentage: number) =>
  min * (1 - percentage) + max * percentage

type PosterProps = React.HTMLProps<HTMLImageElement> & { path: string }

export function Poster({ className, path, ...imgProps }: PosterProps) {
  //this might have been done with just two signals but it would've required
  //calcs in css and it would've been far less readable
  const [xOffset, setXOffset] = useState(0)
  const [yOffset, setYOffset] = useState(0)
  const [spotX, setSpotX] = useState(50)
  const [spotY, setSpotY] = useState(50)

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { width, height, x, y } = (
      e.currentTarget as HTMLDivElement
    ).getBoundingClientRect()
    const percentageX = (e.clientX - x) / width
    const percentageY = (e.clientY - y) / height
    setXOffset(lerp(-15, 15, percentageX))
    setYOffset(lerp(-15, 15, percentageY))
    setSpotX(percentageX * 100)
    setSpotY(percentageY * 100)
  }

  const onPointerLeave = () => {
    setXOffset(0)
    setYOffset(0)
    setSpotX(50)
    setSpotY(50)
  }

  return (
    <div
      className={styles.wrapper}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        '--x-off': xOffset,
        '--y-off': yOffset,
        '--spot-x': spotX,
        '--spot-y': spotY,
      } as Record<string, number>}
    >
      <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/w342${path}`}
          media="(min-width: 840px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w185${path}`}
          media="(min-width: 640px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w342${path}`}
          media="(min-width: 605px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w185${path}`}
          media="(min-width: 510px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w154${path}`}
          media="(min-width: 300px)"
        />
        <img
          {...imgProps}
          alt={imgProps.alt || ''}
          className={[styles.poster, className].join(' ')}
          src={`https://image.tmdb.org/t/p/w92${path}`}
          width={342}
          height={556}
        />
      </picture>
    </div>
  )
}
