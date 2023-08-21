import FacebookIcon from '~icons/ant-design/facebook-outlined'
import InstagramIcon from '~icons/ant-design/instagram-outline'
import LinkIcon from '~icons/ant-design/link-outlined'
import TwitterIcon from '~icons/ant-design/twitter-outlined'
import IMDBIcon from '~icons/fa-brands/imdb'

export interface Links {
  twitter_id?: string
  facebook_id?: string
  instagram_id?: string
  imdb_id?: string
  homepage?: string
}

interface Props {
  media?: string
  links: Links
}

export function ExternalLinks({ media, links }: Props) {
  return (
    <ul className="nolist">
      {links.twitter_id && (
        <li>
          <a
            href={`https://twitter.com/${links.twitter_id}`}
            target="_blank"
            aria-label="Twitter account"
            rel="noopener"
          >
            <TwitterIcon width={24} height={24} />
          </a>
        </li>
      )}

      {links.facebook_id && (
        <li>
          <a
            href={`https://facebook.com/${links.facebook_id}`}
            target="_blank"
            aria-label="Facebook account"
            rel="noopener"
          >
            <FacebookIcon width={24} height={24} />
          </a>
        </li>
      )}

      {links.instagram_id && (
        <li>
          <a
            href={`https://instagram.com/${links.instagram_id}`}
            target="_blank"
            aria-label="Instagram account"
            rel="noopener"
          >
            <InstagramIcon width={24} height={24} />
          </a>
        </li>
      )}

      {links.imdb_id && (
        <li>
          <a
            href={`https://www.imdb.com/${
              media === 'person' ? 'name' : 'title'
            }/${links.imdb_id}`}
            target="_blank"
            aria-label="IMDb account"
            rel="noopener"
          >
            <IMDBIcon width={24} height={24} />
          </a>
        </li>
      )}

      {links.homepage && (
        <li>
          <a
            href={links.homepage}
            target="_blank"
            aria-label="Homepage"
            rel="noopener"
          >
            <LinkIcon width={24} height={24} />
          </a>
        </li>
      )}
    </ul>
  )
}
