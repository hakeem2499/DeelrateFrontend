import React from 'react'
import { PrismicText } from '@prismicio/react';

type Props = {
    children: React.ReactNode
}

const FeatureTitle = ({children}: Props) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

export default FeatureTitle