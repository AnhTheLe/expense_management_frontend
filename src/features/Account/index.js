import React from 'react'
import './style.scss'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';



import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';


import DropdownMenu from './components/DropdownMenu'

const Account = () => {
  return (
    <div className='layout-container'>
      <div className='header'>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='nav-bar'>
          <div className='menu'>
            <DropdownMenu />
          </div>
          <div className='nav-items'>
            <div className='nav-item search'>
              <a href='#'><SearchOutlinedIcon /></a>
            </div>
            <div className='nav-item notification'>
              <a href='#'><NotificationsActiveOutlinedIcon /></a>
            </div>
            <div className='nav-item profile'>
              <a href='#'><AccountCircleOutlinedIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <div className='weed-container'>
          <div className='weed'>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<HomeOutlinedIcon />}>
                Home
              </Button>
            </a>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<DashboardOutlinedIcon />}>
                Recently
              </Button>
            </a>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<CalendarMonthOutlinedIcon />}>
                Category
              </Button>
            </a>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<AssessmentOutlinedIcon />}>
                Statistics
              </Button>
            </a>
            <a href='/acount' className='active'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<AccountBoxOutlinedIcon />}>
                Account
              </Button>
            </a>
          </div>
          <div className='more-setting'>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<InfoOutlinedIcon />}>
                About us
              </Button>
            </a>
            <a href='#'>
              <Button sx={{ width: 180, height: 44, color: 'black', borderRadius: '18px' }} variant="text" startIcon={<SettingsApplicationsOutlinedIcon />}>
                Setting
              </Button>
            </a>
          </div>
        </div>
        <div className='main-content-container'>
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
        </div>
      </div>
    </div>
  )
}

export default Account
