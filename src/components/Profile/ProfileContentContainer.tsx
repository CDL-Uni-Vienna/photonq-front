import clsx from 'clsx'
import {Link} from 'gatsby'
import React, {ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {Path} from '../../model/model.routes'

interface ProfileContentContainerProps {
  children: ReactNode
  withSpaceBetween?: boolean
}

export default function ProfileContentContainer({
  children,
  withSpaceBetween
}: ProfileContentContainerProps) {
  const {t} = useTranslation()

  return (
    <>
      <div
        className={clsx('border p-6', {
          'space-y-5': withSpaceBetween
        })}>
        {children}
      </div>
      <Link to={Path.Reset}>
        <p className="transform hover:-translate-y-1">
          {t('Forgot your password?')}
        </p>
      </Link>
    </>
  )
}
