import {Field, navigate} from '@jaenjs/jaen'
import {Alert, Snackbar, TextField} from '@mui/material'
import {red} from '@mui/material/colors'
import {deleteAccount} from '@snek-functions/origin'
import {Link} from 'gatsby'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Path} from '../../model/model.routes'
import AuthFormContainer from '../Authentification/AuthFormContainer'
import PasswordField from '../Authentification/PasswordField'
import LoadingButton from '../LoadingButton'

interface userDeleteValues {
  password: string
}

interface userDeleteRequestValues {
  email: string
}

const getDeleteTokenFromWindowLocation = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  // get the token from the window location query string
  const searchParams = new URLSearchParams(window.location.search)
  const token = searchParams.get('token')

  return token
}

export default function UserDeleteForm() {
  const location = typeof window !== 'undefined' ? window.location : null

  const {t} = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [deleteRequested, setDeleteRequested] = React.useState(false)
  const [userDeleteValues, setUserDeleteValues] = useState<userDeleteValues>({
    password: ''
  })

  const [userDeleteRequestValues, setUserDeleteRequestValues] =
    useState<userDeleteRequestValues>({
      email: ''
    })

  // If the token is present in the window location, we are in the delete step.
  // Otherwise, we are in the request step.
  const [deleteToken, setDeleteToken] = useState(
    getDeleteTokenFromWindowLocation()
  )

  React.useEffect(() => {
    setDeleteToken(getDeleteTokenFromWindowLocation())
  }, [location])

  const handleDeleteOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof userDeleteValues
  ) => {
    setUserDeleteValues(prev => ({...prev, [key]: e.target.value}))
  }

  const handleDeleteRequestOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof userDeleteRequestValues
  ) => {
    setUserDeleteRequestValues(prev => ({...prev, [key]: e.target.value}))
  }

  const delUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      setError('')

      if (deleteToken === null) {
        await deleteAccount({
          email: userDeleteRequestValues.email
        })
        setDeleteRequested(true)
      } else {
        if (userDeleteValues.password) {
          await deleteAccount({
            password: userDeleteValues.password,
            token: deleteToken
          })

          // Redirect to the login page
          navigate(Path.Login)
        } else {
          throw new Error('Passwords do not match')
        }
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(() => false)
    }
  }

  return (
    <>
      <AuthFormContainer
        header={<Field.Text name="delete" defaultValue="Delete account" />}
        onSubmit={e => delUser(e)}>
        {deleteToken === null ? (
          <>
            <Field.Text
              name="deleteRequest"
              defaultValue="Delete your account by entering your email address below. You will
            receive an email with a link to delete your account."
            />

            <TextField
              disabled={deleteRequested}
              value={userDeleteRequestValues.email}
              onChange={e => handleDeleteRequestOnChange(e, 'email')}
              fullWidth
              required
              variant={'outlined'}
              type={'email'}
              label={t('Email Address')}
            />
          </>
        ) : (
          <>
            <PasswordField
              value={userDeleteValues.password}
              handleOnChange={e => handleDeleteOnChange(e, 'password')}
              required
              fullWidth
              label={'Password *'}
            />
          </>
        )}

        <LoadingButton
          disabled={deleteRequested}
          text={t('Delete account')}
          isLoading={isLoading}
          fullWidth
          variant={'contained'}
          type={'submit'}
        />
        {error.length ? (
          <div style={{color: red.A700}} className={'flex justify-center'}>
            *{t(error)}
          </div>
        ) : null}
        <div className={'flex justify-center'}>
          <div
            className={
              'flex space-x-5 underline cursor-pointer text-primary duration-300'
            }>
            <Link to={Path.Login}>
              <p>{t('Back to login')}</p>
            </Link>
          </div>
        </div>
      </AuthFormContainer>
      <Snackbar open={deleteRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Delete account email sent! Please check your inbox.
        </Alert>
      </Snackbar>
    </>
  )
}
