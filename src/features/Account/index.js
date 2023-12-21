import React, { useContext, useEffect } from 'react'
import './style.scss'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useCallback } from 'react';

import UserHelper from 'general/helpers/UserHelper';



import BaseLayout from 'general/components/BaseLayout';
import userApi from 'api/userApi';
import authApi from 'api/authApi';
import { AuthContext } from 'AuthContext';
import { Box, Typography, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { func } from 'prop-types';


const gender = [
  {
    value: 'MALE',
    label: 'MALE',
  },
  {
    value: 'FEMALE',
    label: 'FEMALE',
  },
  {
    value: 'OTHER',
    label: 'OTHER',
  },
];


const Account = () => {
  const [user, setUser] = useState({});

  const [updateUsername, setUpdateUsername] = useState(null);
  const [updateEmail, setUpdateEmail] = useState(null);
  const [updateAddress, setUpdateAddress] = useState(null);
  const [updatePhone, setUpdatePhone] = useState(null);
  const [updateDateOfBirth, setUpdateDateOfBirth] = useState(null);
  const [updateGender, setUpdateGender] = useState(null);

  const [updatePassword, setUpdatePassword] = useState(null);


  const { user: currentUser } = useContext(AuthContext);

  const userId = currentUser.id;

  // const getData = useCallback(async () => {
  //   try {
  //     const response = await userApi.getCurrentUser(currentUser)
  //     console.log(response)
  //     setUser(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  const updateAccount = async () => {
    try {
      const response = await userApi.editAccount(userId, {
        username: updateUsername,
        email: updateEmail,
        address: updateAddress,
        phone: updatePhone,
        gender: updateGender,
        dateOfBirth: updateDateOfBirth
      });
    } catch (error) {
      console.error('Error updating account:', error);
    }
  }

  const updatePasswordFunc = async () => {
    try {
      const response = await userApi.updatePasswordApi(userId, {
        password: updatePassword,
      });
    } catch (error) {
      console.error('Error updating account:', error);
    }
  }


  function showUpdatePanel() {
    document.querySelector('.update-panel').style.display = 'flex';
  }

  function hideUpdatePanel() {
    document.querySelector('.update-panel').style.display = 'none';
  }

  function showUpdatePassword() {
    document.querySelector('.update-password').style.display = 'flex';
  }

  function hideUpdatePassword() {
    document.querySelector('.update-password').style.display = 'none';
  }
  
  useEffect(() => {
    const currentUsername = UserHelper.getUsername();
    console.log(currentUsername);
    const getCurrentUser = async () => {
      try {
        const currentUser = await authApi.getCurrentUser(currentUsername);
        if (currentUser) {
            setUser(currentUser.data);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    getCurrentUser(UserHelper.getUsername());
    return () => { };
  }, [user, updateUsername, updateEmail, updateAddress, updatePhone, updateDateOfBirth, updateGender, updatePassword]);

  return (

    <BaseLayout selected='account' className='base-layout'>
      <div className='account'>
        <div className='main-content'>

          <div className='edit-function'>
            <div className='avatar'>
              <img src={Avatar} alt='Logo' />
            </div>
            <div className='button-container'>
              <a href='#' onClick={showUpdatePanel}>
                <Button sx={{ width: 180, height: 44, color: 'black', bgcolor: 'white', borderRadius: '18px' }} variant="text">
                  Edit Profile
                </Button>
              </a>
              <a href='#' onClick={showUpdatePassword}>
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
                      {user.gender ?? 'Null'}
                    </p>
                  </div>
                  <div className='info-item'>
                    <label className='info-title'>
                      Date of birth
                    </label>
                    <p className='info-content'>
                      {user.dateOfBirth ?? 'Null'}
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
                      {user.address ?? 'Null'}
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
                        {user.phone ?? 'Null'}
                      </p>
                    </div>
                    <div className='info-item'>
                      <label className='info-title'>
                        Email
                      </label>
                      <p className='info-content'>
                        {user.email ?? 'Null'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='update-panel'>
        <div className='update-container'>
          <Box
            width={500}
            bgcolor={'#EEF0E5'}
            sx={{ padding: '40px', borderRadius: '20px', position: 'relative' }}
            className='update-box'
          >
            <CloseRoundedIcon sx={{position: 'absolute', left: '90%', top: '4%'}} className='close-icon' onClick={hideUpdatePanel} />
            
            {/* <Typography variant="h4" component="h4" >
              Update profile
            </Typography> */}

            <form>
              <TextField sx={{ marginBottom: '10px' }} 
                id="username" 
                defaultValue={currentUser.username} 
                fullWidth 
                label="Username" 
                variant="standard" 
                value={updateUsername}
                onChange={(e) => setUpdateUsername(e.target.value)}
              />
              <TextField sx={{ marginBottom: '10px' }} 
                id="email" 
                defaultValue={currentUser.email} 
                fullWidth 
                label="Email" 
                variant="standard" 
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
              />
              <TextField sx={{ marginBottom: '10px' }} 
                id="address" 
                defaultValue={currentUser.address ?? ''} 
                fullWidth 
                label="Address" 
                variant="standard" 
                value={updateAddress}
                onChange={(e) => setUpdateAddress(e.target.value)}
              />
              <TextField sx={{ marginBottom: '10px' }} 
                id="phone" 
                defaultValue={currentUser.phone ?? ''} 
                fullWidth 
                label="Phone" 
                variant="standard" 
                value={updatePhone}
                onChange={(e) => setUpdatePhone(e.target.value)}
              />
              <TextField sx={{ marginBottom: '10px' }} 
                id="date-of-birth" 
                defaultValue={currentUser.date_of_birth ?? ''} 
                fullWidth 
                label="Date of birth" 
                variant="standard" 
                value={updateDateOfBirth}
                onChange={(e) => setUpdateDateOfBirth(e.target.value)}  
              />


              <TextField sx={{ marginBottom: '10px' }} fullWidth
                id="gender"
                select
                label="Gender"
                defaultValue="gender"
                helperText="Please select your gender"
                value={updateGender}
                onChange={(e) => setUpdateGender(e.target.value)}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button sx={{ width: 180, height: 44, color: 'black', bgcolor: '#B6C4B6', borderRadius: '18px' }}
                variant="text"
                onClick={() => {
                  updateAccount();
                  hideUpdatePanel();
                  console.log(updateUsername, updateEmail, updateAddress, updatePhone, updateDateOfBirth, updateGender);
                }}
              >
                Update
              </Button>
            </form>
          </Box>
        </div>
      </div>

      <div className='update-password'>
        <div className='update-container'>
          <Box
            width={500}
            bgcolor={'#EEF0E5'}
            sx={{ padding: '40px', borderRadius: '20px', position: 'relative' }}
            className='update-box'
          >
            <CloseRoundedIcon sx={{position: 'absolute', left: '90%', top: '4%'}} className='close-icon' onClick={hideUpdatePassword} />
            
            <Typography variant="h4" component="h4" >
              Update Password
            </Typography>

            <form>
              <TextField sx={{ marginBottom: '10px' }} 
                id="pasword" 
                // defaultValue={currentUser.username} 
                fullWidth 
                label="Password" 
                variant="standard" 
                value={updatePassword}
                onChange={(e) => setUpdatePassword(e.target.value)}
              />

              <Button sx={{ width: 180, height: 44, color: 'black', bgcolor: '#B6C4B6', borderRadius: '18px' }}
                variant="text"
                onClick={() => {
                  updatePasswordFunc();
                  hideUpdatePassword();
                  console.log(updatePassword);
                }}
              >
                Update
              </Button>
            </form>
          </Box>
        </div>
      </div>

    </BaseLayout>

  )
}

export default Account