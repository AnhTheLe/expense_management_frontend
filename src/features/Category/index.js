import React from 'react'
import './style.scss'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';

import BaseLayout from 'general/components/BaseLayout';

const Category = () => {
  return (

    <BaseLayout selected='category'>
      <div className='main-content'>
        Home
      </div>

    </BaseLayout>

  )
}

export default Category