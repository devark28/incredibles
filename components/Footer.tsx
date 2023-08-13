import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div>
      <EmailIcon className="inc-bottom-icons"/>
      <CallIcon className="inc-bottom-icons"/>
      <GitHubIcon className="inc-bottom-icons"/>
      {/*<LinkedInIcon className="inc-bottom-icons"/>*/}
      <ShareIcon className="inc-bottom-icons"/>
    </div>
  )
}
