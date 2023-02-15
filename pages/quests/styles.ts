import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const QuestGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20.125rem);
    grid-row-gap: ${(props) => props.theme.spacing.s};
    grid-column-gap: ${(props) => props.theme.spacing.s};
`
