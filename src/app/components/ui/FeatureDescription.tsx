
import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const FeatureDescription = ({children}: Props) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  )
}

export default FeatureDescription;