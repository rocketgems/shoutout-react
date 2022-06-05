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
        'https://platform.shoutout.so',
        ''
      )}`}
      id={embedId.current}
      src={`https://platform.shoutout.so/${url}`}
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
