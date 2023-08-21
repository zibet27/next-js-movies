'use client'

import { useRouter } from 'next/navigation'
import { useDeferredValue, useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { SearchResults } from './SearchResults'

interface Props {
  data: any
  initialQuery?: string
}

export function Search(props: Props) {
  const [value, setValue] = useState(props.initialQuery || '')

  const deferred = useDeferredValue(value)

  const router = useRouter()

  useEffect(() => {
    router.push(`${location.pathname}?q=${deferred}`)
  }, [router, deferred])

  const goBack = () => {
    // !TODO
  }

  return (
    <>
      <div className={styles.form}>
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <label className="visuallyhidden" htmlFor="q">
            Search
          </label>

          <div className={styles.field}>
            <input
              id="q"
              name="q"
              type="text"
              placeholder="Search for a movie, tv show or person..."
              // keyup="goToRoute"
              // blur="unFocus"
              value={value}
              onInput={(e) => setValue(e.currentTarget.value)}
            />
            <button
              //v-if="showButton"
              type="button"
              aria-label="Close"
              onClick={goBack}
            >
              {/* <CrossIcon /> */}
            </button>
          </div>
        </form>
      </div>
      <SearchResults query={deferred} data={props.data} />
    </>
  )
}
