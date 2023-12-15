import React, { useContext, useEffect } from 'react'
import './style.scss'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useCallback } from 'react';



import BaseLayout from 'general/components/BaseLayout';
import userApi from 'api/userApi';
import { AuthContext } from 'AuthContext';

const Account = () => {
  const [user, setUser] = useState([]);

  const { user: currentUser } = useContext(AuthContext);

  const getData = useCallback(async () => {
    try {
      const response = await userApi.getCurrentUser(currentUser)
      console.log(response)
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getData()
    
    return () => {
      setUser([])
    }
  }, [])  

  return (

    <BaseLayout selected='account'>
      <div className='account'>
        <div className='main-content'>

          <div className='edit-function'>
            <div className='avatar'>
              <img src={Avatar} alt='Logo' />
            </div>
            <div className='button-container'>
              <a href='#'>
                <Button sx={{ width: 180, height: 44, color: 'black', bgcolor: 'white', borderRadius: '18px' }} variant="text">
                  Edit Profile
                </Button>
              </a>
              <a href='#'>
                <Button sx={{ width: 180, height: 44, color: 'black', bgcolor: 'white', borderRadius: '18px' }} variant="text">
                  Change Password
                </Button>
              </a>
            </div>
          </div>

          <div className='user-info'>

            <div className='left-col'>
              <div className='info-group'>
                <div className='group-title'>
                  Personnal Details
                </div>
                <div className='info'>
                  <div className='info-item'>
                    <label className='info-title'>
                      Username
                    </label>
                    <p className='info-content'>
                      {user.username}
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Gender
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Date of birth
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Nationality
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                </div>
              </div>

              <div className='info-group'>
                <div className='group-title'>
                  Address
                </div>
                <div className='info'>
                  <div className='info-item'>
                    <label className='info-title'>
                      City
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      State
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Country
                    </label>
                    <p className='info-content'>
                      Null
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className='right-col'>
              <div className='info-group'>
                <div className='info-group'>
                  <div className='group-title'>
                    Contact Details
                  </div>
                  <div className='info'>
                    <div className='info-item'>
                      <label className='info-title'>
                        Phone number
                      </label>
                      <p className='info-content'>
                        Null
                      </p>
                    </div>
                    <div className='info-item'>
                      <label className='info-title'>
                        Email
                      </label>
                      <p className='info-content'>
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BaseLayout>

  )
}

export default Account