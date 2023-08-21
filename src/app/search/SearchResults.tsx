'use client'

import { memo } from 'react'
import { Card } from '@/components/Card'

interface Props {
  data: { results: any[] }
  query: string
}

function Results({ data, query }: Props) {
  return (
    <div className="listing">
      <div className="listing__head">
        <h2 className="listing__title">
          Searching for {"'"}
          {query} {"'"}
        </h2>
      </div>

      <div className="listing__items">
        {data?.results?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export const SearchResults = memo(Results, (prev, next) => {
  return prev.query === next.query && prev.data === next.data
})
