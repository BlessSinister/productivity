import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faTelegram,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'

export default function Nav() {
  return (
    <nav>
      <div className="logo"></div>
      <div className="nav_links">
        <ul>
          <li className="active">Home</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Documentation</li>
        </ul>
      </div>
      <div className="nav_social">
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTelegram} />
        <FontAwesomeIcon icon={faTwitter} className="active" />
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <div className="nav_btn">Get started</div>
    </nav>
  )
}
