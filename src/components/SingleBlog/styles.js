import { styled } from '@mui/system';

export const Container = styled('div')({
    backgroundColor: 'var(--background-color-gray)',
})

export const InnerContainer = styled('div')`
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    padding: 0 30px;

    
    @media (min-width: 768px) {
        width: 80%;
    }
`
export const SingleBlogHeader = styled('div')`
    display: flex;
    padding: 4vw 0;

    @media (min-width: 1400px) {
        padding: 53px 0;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
`

export const BlogBanner = styled('div')`
    width: 100vw;
    margin-left: -20px;

    img {
        width: 100%;
        height: 170px;
    }

    @media (min-width: 576px) {
        img {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        margin-left: -19%;
        margin-bottom: 4vw;

        img {
            height: auto;
        }
    }

    @media (min-width: 1024px) {
        margin-left: -17%;
    }
`



export const BlogWrapper = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

`


export const BlogTitle = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & h2 {
        max-width: 75%;
        font-size: 2.5em;
        margin: 0;
    }

    & div {
        width: 25%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

`

export const BlogWidget = styled('div')`
    width: 38%;
`
export const Summary = styled('div')`
    b {
        font-weight: bold;
    }
`

export const Content = styled('div')`
    display: block;

    h3 {
        margin: 0;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 27px;
    }
`

