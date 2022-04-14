import { Typography, Breadcrumbs, Link, Box } from '@mui/material';
import { BlogContent } from '../BlogContent';
import { RightSideBar } from '../RightSideBar';


import {
  Container,
  InnerContainer,
  SingleBlogHeader,
  BlogBanner,
  BlogWidget,
  BlogWrapper
} from './styles'

export const SingleBlog = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <SingleBlogHeader>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Blog
              </Link>
              <Typography color="text.primary">Digital Canapes</Typography>
            </Breadcrumbs>
          </SingleBlogHeader>
          <BlogBanner>
            <img src='/img/CCBanner.jpg' alt='blog-banner' />
          </BlogBanner>
          <BlogWrapper>
            <BlogContent />
            <BlogWidget />
          </BlogWrapper>
        </InnerContainer>
      </Container >
      {/* <RightSideBar /> */}
    </>
  )
}
