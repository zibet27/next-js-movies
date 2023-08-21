'use client'

import Link, { LinkProps } from 'next/link'
import styles from './layout.module.scss'
import { usePathname } from 'next/navigation'

type NavLinkProps = LinkProps & {
  className: string
  currentPath: string
  activeClassName: string
  children: string
}

const NavLink: React.FC<NavLinkProps> = ({
  activeClassName,
  currentPath,
  ...props
}) => {
  const className =
    currentPath == props.href
      ? `${props.className} ${activeClassName}`
      : `${props.className}`
  return <Link {...props} className={className} />
}

export function Links({ movieId }: { movieId: string }) {
  const path = usePathname()

  return (
    <div className={`spacing ${styles.nav}`}>
      <NavLink
        currentPath={path}
        href={`/movie/${movieId}`}
        className={styles.button}
        activeClassName={styles.buttonActive}
      >
        Overview
      </NavLink>
      <NavLink
        currentPath={path}
        href={`/movie/${movieId}/videos`}
        activeClassName={styles.buttonActive}
        className={styles.button}
      >
        Videos
      </NavLink>
      <NavLink
        currentPath={path}
        href={`/movie/${movieId}/photos`}
        activeClassName={styles.buttonActive}
        className={styles.button}
      >
        Photos
      </NavLink>
    </div>
  )
}
