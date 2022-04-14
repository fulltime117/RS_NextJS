import styles from "./index.module.css";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { BlogCard } from '../BlogCard';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
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

export const Blog = () => {
  const blogList = [
    { id : 1, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 2, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 3, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 4, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 5, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 6, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 7, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' },
    { id : 8, category: 'category', title: 'Blog title', photo: '/img/blog.png', description: 'Commencing October 1st, Bompas & Parr will be bringing edible NFTs and digital', date: 'Date' }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <div className={styles.search}>
            <TextField id="standard-search" label="Search" variant="standard" />
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className={styles.blogList}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' } }}>
            {blogList.map((blog, i) => (
              <Item key={i}>
                <BlogCard blog={blog} />
              </Item>
            ))}
          </Box>
        </div>
      </div>
    </div>
  )
}
