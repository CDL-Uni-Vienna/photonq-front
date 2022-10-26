import clsx from 'clsx'
import React, {ReactNode} from 'react'

interface ProfileContentContainerProps {
  children: ReactNode
  withSpaceBetween?: boolean
}

export default function ProfileContentContainer({
  children,
  withSpaceBetween
}: ProfileContentContainerProps) {
  return (
    <div
      className={clsx('border p-6', {
        'space-y-5': withSpaceBetween
      })}>
      {children}
    </div>
  )
}
