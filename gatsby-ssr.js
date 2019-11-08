import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Share+Tech+Mono&display=swap"
      rel="stylesheet"
    />,
  ])
}
