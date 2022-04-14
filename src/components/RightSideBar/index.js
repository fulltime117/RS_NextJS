import styles from './index.module.css'
import {
  UploadIcon,
  CloudIcon,
  FeedIcon,
  CartIcon,
  CalendarIcon
} from '../SvgIcons'
import { useState } from 'react'

export const RightSideBar = () => {
  const [selectedItem, setSelectedItem] = useState('upload')

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundColor: selectedItem === 'upload' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('upload')}
      >
        <UploadIcon />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'cloud' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('cloud')}
      >
        <CloudIcon />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'feed' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('feed')}
      >
        <FeedIcon />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'activity' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('activity')}
      >
        <img src='/img/activity.png' alt='activity' />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'comment' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('comment')}
      >
        <img src='/img/comment.png' alt='comment' />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'ip' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('ip')}
      >
        <img src='/img/IP.png' alt='ip' />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'cart' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('cart')}
      >
        <CartIcon />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'calendar' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('calendar')}
      >
        <CalendarIcon />
      </div>
      <div
        style={{ backgroundColor: selectedItem === 'user' ? '#2B6DAB' : '#E9F4F8'}}
        onClick={() => setSelectedItem('user')}
      >
        <img src='/img/user.png' alt='user' />
      </div>
    </div>
  )
}