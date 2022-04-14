import styles from './index.module.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

export const BlogCard = (props) => {
  const {
    blog
  } = props

  return (
    <Link href={`/blog/${blog.id}`}>
      <Card className={styles.container}>
        <CardMedia
          className={styles.media}
          image={blog.photo}
          title="Contemplative Reptile"
        />
        <CardContent className={styles.cardContet}>
          <p className={styles.category}>{blog.category}</p>
          <h2 className={styles.title}>{blog.title}</h2>
          <p className={styles.description}>{blog.description}</p>
          <p className={styles.date}>{blog.date}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
