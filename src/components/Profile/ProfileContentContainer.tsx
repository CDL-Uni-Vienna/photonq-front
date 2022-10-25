import clsx from 'clsx'
import React, {ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {Path} from '../../model/model.routes'

import {navigate} from '@jaenjs/jaen'
import {Button} from '@mui/material'

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
      <Button
        onClick={() => navigate(Path.Reset)}
        variant={'contained'}
        size={'large'}>
        {t('Update Details')}
      </Button>
      <Button
        onClick={() => navigate(Path.Reset)}
        variant={'contained'}
        size={'large'}>
        {t('Update Password')}
      </Button>
      <Button
        onClick={() => navigate(Path.Reset)}
        variant={'contained'}
        size={'large'}>
        {t('Delete Account')}
      </Button>
    </>
  )
}
