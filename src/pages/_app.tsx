import '../styles/pages/global.css';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
