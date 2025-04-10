import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

type Props = {
  scale?: number // 0.5 for 50%, 1 for 100%, 1.5 for 150%, etc.
  width?: number // Base width for the logo icon
  height?: number // Base height for the logo icon
  textWidth?: number // Base width for the text logo
  textHeight?: number // Base height for the text logo
  noLogoName?: boolean
}

const Brand = ({ 
  scale = 1, 
  width = 50, 
  height = 20, 
  textWidth = 150, 
  textHeight = 38, 
  noLogoName 
}: Props) => {
  return (
    <Link 
      className={clsx(
        'inline-flex transition-transform max-sm:scale-75 duration-200 items-center gap-1',
      )} 
      href="/"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'left center' // Adjust as needed
      }}
    >
      <Image
        src="/LogoIconDR.svg"
        alt="Company Logo"
        width={width}
        height={height}
        priority
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
      {!noLogoName && (
        <Image
          className="not-dark:invert"
          src="/DeelRateLogoName.svg"
          alt="Company Name"
          width={textWidth}
          height={textHeight}
          priority
          style={{
            width: `${textWidth}px`,
            height: `${textHeight}px`,
          }}
        />
      )}
    </Link>
  )
}

export default Brand