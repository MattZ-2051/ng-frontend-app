import styled from 'styled-components'
import Image from 'next/image'

export const QuestGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20.125rem);
    grid-row-gap: ${(props) => props.theme.spacing.s};
    grid-column-gap: ${(props) => props.theme.spacing.s};
`

export const SingleQuestContainer = styled.div``

export const StyledQuestImg = styled(Image)`
    border-radius: ${(props) => props.theme.radius.xl};
`
