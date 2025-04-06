

import React from 'react';
import Image from 'next/image';
import { Copyright } from '@/app/components/layout/Footer';
import Bounded from '@/app/components/ui/Bounded';





const Footer = () => {
    return (
        <Bounded className='flex flex-col px-8 py-24 mt-26 md:mt-0  items-center justify-between gap-4 md:gap-8 mx-auto w-full'>
            <div className="text-xs md:text-base  text-balance w-full mx-auto py-24 md:py-2 text-muted-foreground">
                <span className="font-semibold">DISCLAIMER:</span>
                THIS WEBSITE IS OPERATED BY DEELRATE (“DEELRATE”), A TECHNOLOGY PROVIDER OFFERING BLOCKCHAIN-BASED SOLUTIONS FOR TOKENIZING REAL ESTATE, SMALL AND MEDIUM ENTERPRISES (SMEs), COMMODITY ASSETS, AND INFRASTRUCTURE PROJECTS. DEELRATE IS NOT A REGISTERED BROKER-DEALER, INVESTMENT ADVISER, OR FINANCIAL ADVISOR AND IS NOT REGISTERED WITH ANY REGULATORY AGENCY OR BODY IN NIGERIA OR ELSEWHERE. DEELRATE DOES NOT PROVIDE INVESTMENT OR LEGAL ADVICE, ENDORSEMENTS, ANALYSIS, OR RECOMMENDATIONS REGARDING ANY ISSUERS, SECURITIES, OR DIGITAL ASSETS. NOTHING ON THIS WEBSITE SHALL CONSTITUTE OR BE CONSTRUED AS AN OFFERING, DISTRIBUTION, OR SOLICITATION OF SECURITIES OR AS INVESTMENT ADVICE OR INVESTMENT RECOMMENDATIONS BY DEELRATE OR ANY OF ITS AFFILIATES. ALL SECURITIES OFFERINGS AND DIGITAL ASSETS POWERED BY DEELRATE’S TECHNOLOGY ARE OFFERED BY, AND ALL INFORMATION RELATED THERETO IS THE RESPONSIBILITY OF, THE APPLICABLE ISSUER OF SUCH SECURITIES OR DIGITAL ASSETS. DEELRATE DOES NOT CUSTODY ANY DIGITAL SECURITIES OR DIGITAL ASSETS.


            </div>
            <div className='space-y-2 flex flex-col items-center justify-center'>
                <div className="size-50 rounded-full not-dark:bg-foreground bg-background">

                    <Image
                        src="/Deelrate.svg"
                        alt="Logo"
                        width={200}
                        height={100}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <p className='text-sm inline-flex gap-2 items-center text-muted-foreground'>
                    <span className='text-lg'><Copyright /> </span> 2025 Deelrate. All Right Reserved
                </p>
            </div>
        </Bounded>
    )
}

export default Footer