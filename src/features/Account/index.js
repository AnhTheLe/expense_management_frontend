import React from 'react'
import './style.scss'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';



import DropdownMenu from './components/DropdownMenu'
import BaseLayout from 'general/components/BaseLayout';

const Account = () => {
  return (

    <BaseLayout selected='account'>
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
                    Name
                  </label>
                  <p className='info-content'>
                    Nguyen Van A
                  </p>
                </div>
                <div className='info-item'>
                  <label className='info-title'>
                    Gender
                  </label>
                  <p className='info-content'>
                    Male
                  </p>
                </div>
              </div>
            </div>

            <div className='info-group'>
              <div className='group-title'>
                Personnal Details
              </div>
              <div className='info'>
                <div className='info-item'>
                  <label className='info-title'>
                    Name
                  </label>
                  <p className='info-content'>
                    Nguyen Van A
                  </p>
                </div>
                <div className='info-item'>
                  <label className='info-title'>
                    Gender
                  </label>
                  <p className='info-content'>
                    Male
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='right-col'>
            <div className='info-group'>
              <div className='info-group'>
                <div className='group-title'>
                  Personnal Details
                </div>
                <div className='info'>
                  <div className='info-item'>
                    <label className='info-title'>
                      Name
                    </label>
                    <p className='info-content'>
                      Nguyen Van A
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Gender
                    </label>
                    <p className='info-content'>
                      Male
                    </p>
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
