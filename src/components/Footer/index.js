import styles from './index.module.css'
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export const Footer = () => {
  const firstMenuList = [
    { key: '', title: 'About us' },
    { key: '', title: 'creators' },
    { key: '', title: 'collectors' },
    { key: '', title: 'curators' },
    { key: '', title: 'upload assets' }
  ];

  const secondMenuList = [
    { key: '', title: 'Resources' },
    { key: '', title: 'how it works' },
    { key: '', title: 'blog' },
    { key: '', title: 'blog' },
    { key: '', title: 'blog' }
  ]

  const thirdMenuList = [
    { key: '', title: 'Resources' },
    { key: '', title: 'help & knowledgebase' },
    { key: '', title: 'faqs' },
    { key: '', title: 'community' },
    { key: '', title: 'support' }
  ]

  const handleClickSubmit = () => {
    // code here
  }

  return (
    <div>
      <div className={styles.topFooter}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>artcryption</h1>
          <Box
            sx={{
              display: 'grid',
              gridAutoColumns: '1fr',
              gap: 1,
            }}
          >
            <Item sx={{ gridRow: { xs: 'span 6', md: '1' }, gridColumn: { xs: '1', md: 'span 8'} }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' } }}>
                <Item>
                  {firstMenuList.map((menu, i) => (
                    <p key={i} className={styles.menuLink}>{menu.title}</p>
                  ))}
                </Item>
                <Item>
                  {secondMenuList.map((menu, i) => (
                    <p key={i} className={styles.menuLink}>{menu.title}</p>
                  ))}
                </Item>
                <Item>
                  {thirdMenuList.map((menu, i) => (
                    <p key={i} className={styles.menuLink}>{menu.title}</p>
                  ))}
                </Item>
              </Box>
            </Item>
            <Item sx={{ gridRow: { xs: 'span 6', md: '1' }, gridColumn: { xs: '1', md: 'span 4'} }}>
              <h3 className={styles.newsletter}>Join Newsletter</h3>
              <div className={styles.subscribe}>
                <p>Subscribe to our newsletter</p>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  placeholder='Enter your email address'
                  style={{ padding: 10}}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickSubmit}
                        edge="end"
                      >
                        <ArrowForwardIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </div>
            </Item>
          </Box>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.innerContainer}>
          <div className={styles.socialList}>
            <img src='/img/twitter.png' alt='twitter' />
            <img src='/img/facebook.png' alt='facebook' />
            <img src='/img/instagram.png' alt='instagram' />
          </div>
          <div className={styles.description}>Artcryption Inc. 2021, All Rights Reserved (Artcryption logo, Gary Taxali)</div>
          <div className={styles.menuList}>
            <span>Press enquiries</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </div>
  )
}
