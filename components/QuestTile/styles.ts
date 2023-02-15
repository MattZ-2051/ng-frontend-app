import styled, { DefaultTheme } from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
    width: 20.125rem;
    height: 100%;
    background: ${(props) => props.theme.colors.lighterBlack};
    border: 1px solid rgba(58, 58, 58, 0.5);
    border-radius: ${(props) => props.theme.radius.xl};
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing['4xs']};
`

export const StyledImg = styled(Image)`
    border-radius: ${(props) => props.theme.radius.l};
`

export const Title = styled.p`
    margin: 0;
    margin-top: 6px;
    font-family: 'Cinzel';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    text-transform: capitalize;

    color: #ffffff;
`

export const TextContainer = styled.div`
    display: grid;
    grid-column-gap: 32px;
    grid-template-columns: repeat(2, auto);
    padding: 0 0 6px 0;
`

export const RowGrid = styled.div`
    padding: 4px 0;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`

export const Text = styled.p<{
    color?: DefaultTheme['colors']['gold' | 'blue']
    padding?: string
}>`
    margin: 0;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    padding: ${(props) => props.padding};

    /* Accent/Gold */

    color: ${(props) =>
        props.color
            ? (props.color === 'gold' && props.theme.colors.gold) ||
              (props.color === 'blue' && props.theme.colors.blue)
            : 'white'};
`
