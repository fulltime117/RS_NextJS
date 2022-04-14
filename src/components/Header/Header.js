import styles from "./Header.module.css";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const menuList = [
    { path: '/how-it-works', title: 'How it works' },
    { path: '/feed', title: 'Feed' },
    { path: '/curator', title: 'Curator' },
    { path: '/blog', title: 'Blog' }
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.logoWrapper}>
              <img src='/img/logo.png' alt='logo' className={styles.logoImage} />
              <span variant="h5" className={styles.logoTitle}>artcryption</span>
            </div>
            <div className={styles.menuList}>
              {menuList.map((menu, i) => (
                <Link href={menu.path}>
                  <span className={styles.menuLink}>{menu.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.rightContainer}>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <div className={styles.headerIcons}>
              <IconButton aria-label="search" color="inherit">
                <NotificationsIcon />
              </IconButton>
              <Avatar alt="user" src="/img/user-1.png" />
            </div>
            <div className={styles.menuIcon}>
              <IconButton color="inherit" onClick={() => setIsOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileMenu} style={{ width: isOpen ? '80vw' : '0px'}}>
        <div className={styles.mobileItem}>how it works</div>
        <div className={styles.mobileItem}>feed</div>
        <div className={styles.mobileItem}>curators</div>
        <div className={styles.mobileItem}>blog</div>
      </div>
      {isOpen && (
        <div className={styles.overLay} onClick={() => setIsOpen(false)}></div>
      )}
    </>
  )
}