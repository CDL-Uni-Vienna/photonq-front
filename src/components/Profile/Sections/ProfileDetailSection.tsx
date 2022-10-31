import {
  Alert,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField
} from '@mui/material'
import {red} from '@mui/material/colors'
import {
  deleteAccount,
  requestForInformation,
  resetPassword,
  updateAccount
} from '@snek-functions/origin'
import React, {useContext, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {User} from '../../../model/types/type.user'
import {AuthContext} from '../../../providers/AuthProvider'
import LoadingButton from '../../LoadingButton'
import ProfileContentContainer from '../ProfileContentContainer'
import ProfileSection from '../ProfileSection'
import ProfileSectionHeader from '../ProfileSectionHeader'

const tableKeys: (keyof User)[] = ['firstName', 'lastName', 'email']

export default function ProfileDetailSection() {
  const {t} = useTranslation()
  const [error, setError] = useState('')
  const {value: user, setValue: setUser} = useContext(AuthContext)
  const [isEditing, setIsEditing] = useState(false)

  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
  const [isLoadingReset, setIsLoadingReset] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const [dataRequested, setDataRequested] = useState(false)
  const [updateRequested, setUpdateRequested] = useState(false)
  const [resetRequested, setResetRequested] = useState(false)
  const [deleteRequested, setDeleteRequested] = useState(false)

  const resetSnekbar = () => {
    setResetRequested(false)
    setUpdateRequested(false)
    setDeleteRequested(false)
    setDataRequested(false)
  }
  const onDataRequest = async () => {
    setIsLoadingData(true)
    try {
      setError('')

      await requestForInformation({
        additional: JSON.stringify({dataRequested: true})
      })

      resetSnekbar()
      setDataRequested(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoadingData(() => false)
    }
  }
  const onUpdateAccount = async () => {
    setIsLoadingUpdate(true)
    setIsEditing(false)

    try {
      setError('')

      await updateAccount({
        firstName: user!.firstName || '',
        lastName: user!.lastName || ''
      })

      resetSnekbar()
      setUpdateRequested(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoadingUpdate(() => false)
    }
  }
  const onDeleteAccount = async () => {
    setIsLoadingDelete(true)
    try {
      setError('')

      await deleteAccount({
        email: user!.email
      })

      resetSnekbar()
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

      resetSnekbar()
      setResetRequested(true)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoadingReset(() => false)
    }
  }

  if (!user) return null

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: keyof User
  ) => {
    setUser(prev => ({
      ...prev!,
      [key]: e.target.value!
    }))
  }

  return (
    <ProfileSection withBottomSpace>
      <ProfileSectionHeader header={t('Details')} />
      <ProfileContentContainer>
        <Table>
          <TableBody>
            {Object.keys(user)
              .filter(key => tableKeys.includes(key as keyof User))
              .map((key, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {key === 'email' ? 'E-MAIL' : t(key).toUpperCase()}
                  </TableCell>
                  <TableCell>
                    {key !== 'email' && isEditing ? (
                      <TextField
                        onChange={e => handleOnChange(e, key as keyof User)}
                        value={user[key as keyof User]}
                        variant={'standard'}
                        fullWidth
                      />
                    ) : (
                      user[key as keyof User]
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <LoadingButton
          sx={{mt: 3, mr: 2}}
          onClick={() =>
            isEditing ? onUpdateAccount() : setIsEditing(!isEditing)
          }
          text={t('Update Informations')}
          isLoading={isLoadingUpdate}
          size={'medium'}
          variant={'contained'}
        />
        <LoadingButton
          sx={{mt: 3, mr: 2}}
          onClick={() => onResetPassword()}
          disabled={resetRequested}
          text={t('Update password')}
          isLoading={isLoadingReset}
          size={'medium'}
          variant={'contained'}
        />
        <LoadingButton
          sx={{mt: 3, mr: 2}}
          onClick={() => onDataRequest()}
          disabled={dataRequested}
          text={t('Send GDPR Data')}
          isLoading={isLoadingData}
          size={'medium'}
          variant={'contained'}
        />
        <LoadingButton
          sx={{mt: 3, mr: 2}}
          onClick={() => onDeleteAccount()}
          disabled={deleteRequested}
          text={t('Delete account')}
          isLoading={isLoadingDelete}
          size={'medium'}
          style={!deleteRequested ? {backgroundColor: red.A700} : undefined}
          variant={'contained'}
        />
        {error.length ? (
          <div style={{color: red.A700}} className={'flex justify-center'}>
            *{t(error)}
          </div>
        ) : null}
      </ProfileContentContainer>
      <Snackbar open={resetRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Reset password email sent! Please check your inbox.
        </Alert>
      </Snackbar>
      <Snackbar open={dataRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          GDPR data email sent! Please check your inbox.
        </Alert>
      </Snackbar>
      <Snackbar open={updateRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Saved to Account.
        </Alert>
      </Snackbar>
      <Snackbar open={deleteRequested} autoHideDuration={2000}>
        <Alert variant="filled" severity="success" sx={{width: '100%'}}>
          Delete account email sent! Please check your inbox.
        </Alert>
      </Snackbar>
    </ProfileSection>
  )
}
