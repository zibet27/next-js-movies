'use client'

import { useState, useEffect } from 'react'
import './GlobalLoader.scss'

export function GlobalLoader() {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('navigation-start', () => {
      setVisible(true)
    })

    window.addEventListener('navigation-end', () => {
      setVisible(false)
    })

    window.addEventListener('navigation-error', () => {
      setVisible(false)
    })
  })

  return isVisible ? (
    <div className="global-loader is-loading">
      <div className="global-loader-fill" />
    </div>
  ) : null
}
