import {navigate} from '@jaenjs/jaen'
import {Alert, Button, Snackbar} from '@mui/material'
import {red} from '@mui/material/colors'
import {deleteUser, resetPassword} from '@snek-functions/origin'
import clsx from 'clsx'
import React, {ReactNode, useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Path} from '../../model/model.routes'
import LoadingButton from '../LoadingButton'

import {AuthContext} from '../../providers/AuthProvider'

interface ProfileContentContainerProps {
  children: ReactNode
  withSpaceBetween?: boolean
}

export default function ProfileContentContainer({
  children,
  withSpaceBetween
}: ProfileContentContainerProps) {
  const {t} = useTranslation()
  const [isLoadingReset, setIsLoadingReset] = useState(false)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)
  const [error, setError] = useState('')
  const [resetRequested, setResetRequested] = useState(false)
  const [deleteRequested, setDeleteRequested] = useState(false)

  const {value: user, setValue: setUser} = useContext(AuthContext)

  const onDeleteUser = async () => {
    setIsLoadingDelete(true)
    try {
      setError('')

      await deleteUser({
        email: user!.email
      })
      setDeleteRequested(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoadingDelete(() => false)
    }
  }
  const onResetPassword = async () => {
    setIsLoadingReset(true)
    try {
      setError('')

      await resetPassword({
        email: user!.email
      })

      setResetRequested(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoadingReset(() => false)
    }
  }

  return (
    <>
      <div
        className={clsx('border p-6', {
          'space-y-5': withSpaceBetween
        })}>
        {children}
      </div>
      <Button
        sx={{mr: 2}}
        onClick={() => navigate(Path.Reset)}
        variant={'contained'}
        size={'medium'}>
        {t('Update Details')}
      </Button>
      <Button
        sx={{mr: 2}}
        onClick={() => onResetPassword()}
        variant={'contained'}
        size={'medium'}>
        {t('Update Password')}
      </Button>
      <Button
        sx={{mr: 2}}
        onClick={() => onDeleteUser()}
        variant={'contained'}
        size={'medium'}>
        {t('Delete Account')}
      </Button>
      <LoadingButton
        disabled={resetRequested}
        text={t('Update password')}
        isLoading={isLoadingReset}
        fullWidth
        variant={'contained'}
      />
      <LoadingButton
        disabled={deleteRequested}
        text={t('Delete account')}
        isLoading={isLoadingDelete}
        fullWidth
        variant={'contained'}
      />
      {error.length ? (
        <div style={{color: red.A700}} className={'flex justify-center'}>
          *{t(error)}
        </div>
      ) : null}
      <Snackbar open={resetRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Reset password email sent! Please check your inbox.
        </Alert>
      </Snackbar>
      <Snackbar open={deleteRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Delete account email sent! Please check your inbox.
        </Alert>
      </Snackbar>
    </>
  )
}
