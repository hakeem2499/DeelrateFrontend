

import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    children?: React.ReactNode;
    className?: string;
}

const FeatureCard = ({ children, className }: Props) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    )
}

export default FeatureCard