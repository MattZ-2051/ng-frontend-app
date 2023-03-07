import { Quest } from '@/types/api'

import * as S from './styles'

interface IProps {
    quest: Quest
}
export default function QuestTile({ quest }: IProps) {
    console.log('quest', quest)
    return (
        <S.Container>
            <S.StyledImg src={quest.cover} width={306} height={100} alt="" />
            <S.Title>{quest.title}</S.Title>
            <S.TextContainer>
                <div>
                    <S.RowGrid>
                        <S.Text color="gold">Skill Tree</S.Text>
                        <S.Text color="blue">{quest.skillTree}</S.Text>
                    </S.RowGrid>
                    <S.RowGrid>
                        <S.Text color="gold">Skill</S.Text>
                        <S.Text>{quest.skill}</S.Text>
                    </S.RowGrid>
                    <S.RowGrid>
                        <S.Text color="gold">Type</S.Text>
                        <S.Text>Build</S.Text>
                    </S.RowGrid>
                </div>
                <div>
                    <S.RowGrid>
                        <S.Text color="gold">Difficulty</S.Text>
                        <S.Text>{quest.difficulty}</S.Text>
                    </S.RowGrid>
                    <S.RowGrid>
                        <S.Text color="gold">Experience</S.Text>
                        <S.Text>{quest.experience}</S.Text>
                    </S.RowGrid>
                    <S.RowGrid>
                        <S.Text color="gold">Gold</S.Text>
                        <S.Text>{quest.gold}</S.Text>
                    </S.RowGrid>
                </div>
            </S.TextContainer>
        </S.Container>
    )
}
