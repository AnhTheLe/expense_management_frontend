import React from 'react'
import './style.scss'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/profile-avatar.png'
import Button from '@mui/material/Button';

import BaseLayout from 'general/components/BaseLayout';

const About = () => {
  return (

    <BaseLayout selected='about'>
      <div className='main-content'>
        <div className='box'>
            <div className='box-content'>
                <div className='content'>
                    <b>Website information</b> <br></br>
                    Website name: Money+ <br></br>
                    Team: ENDO<br></br>
                    Version: 2.0<br></br>
                    <br></br>
                    <b>About this site:</b><br></br>
                    The website was built to serve the spending management needs of the main users, which are students.<br></br>
                    <br></br>
                    <b>Target:</b><br></br>
                    Optimize the spending management process: help users plan, manage and track spending effectively.<br></br>
                    Providing solutions to spending management problems: providing tools and features to help users solve problems related to spending management and dividing money properly.<br></br>
                    <a href='#'>Community standards</a>
                </div>
            </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default About