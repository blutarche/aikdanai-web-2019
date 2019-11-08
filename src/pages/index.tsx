import React from 'react'
import { css, Global } from '@emotion/core'
import { Helmet } from 'react-helmet'

import { MainSection } from '../components/MainSection'

export default () => (
  <>
    <Helmet>
      <title>Aikdanai Sidhikosol</title>
    </Helmet>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          background-color: #000;
        }
      `}
    />
    <MainSection />
  </>
)
