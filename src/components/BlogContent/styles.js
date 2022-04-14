import { styled } from '@mui/system';

export const BlogContentWrapper = styled('div')`
    width: 100%;

    @media (min-width: 1024px) {
        width: 60%;
    }

`
export const BlogWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
})

export const BlogMeta = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vw;

    @media (min-width: 768px) { 
        flex-direction: row;
        justify-content: space-between;
        div {
            display: flex;
            column-gap: 3vw;
        }
    }
`


export const BlogTitle = styled('div')`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2vw;

    & h2 {
        max-width: 100%;
        font-size: 1.5em;
        margin: 0;
        margin-bottom: 3vw;
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 3vw;

        svg {
            margin-right: 15px;
        }

    }


    @media (min-width: 768px) { 
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        h2 {
            width: 75%;
            font-size: 4vw;
        }

        div {
            flex: 1;
            justify-content: space-evenly;
            align-items: center;

            svg {
                width: 22px;
                height: auto;
            }
        }
    }


    @media (min-width: 1400px) { 
        h2 {
            font-size: 60px;
        } 
    }

`

export const BlogWidget = styled('div')`
    width: 38%;
`
export const Summary = styled('div')`
    margin-bottom: 20px;
    b {
        font-weight: bold;
    }
`

export const Content = styled('div')`
    display: block;
    margin-bottom: 3vw;

    h3 {
        margin: 0;
        font-size: 24px;
        text-transform: uppercase;

        @media (min-width: 768px) { 
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
        }
    }

    h4 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 35px;

        b {
            font-weight: bold;
            display: block;
        }
    }
`

export const Auth = styled('div')`
    div {
        display: flex;
        align-items: flex-end;
        column-gap: 15px;
    }

    h3 {
        margin: 0;
        font-size: 24px;
        text-transform: uppercase;

        @media (min-width: 768px) { 
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
        }
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 35px;
    }  
`