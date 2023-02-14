import React, { useRef } from 'react'
import IframeResizer from 'iframe-resizer-react'
import shortid from 'shortid'

const ShoutoutEmbed = ({ url }) => {
  if (!url) {
    console.error('A url is required')
    return null
  }
  const embedId = useRef(shortid.generate())

  return (
    <IframeResizer
      title={`Shoutout Embed ${url.replace(
        'https://shoutout.io/embed/',
        ''
      )}`}
      id={embedId}
      src={`https://shoutout.io/embed/${url}`}
      frameBorder='0'
      scrolling='yes'
      width='100%'
      style={{
        border: 0
      }}
    />
  )
}

export default ShoutoutEmbed
