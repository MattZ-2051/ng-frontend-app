import { Quest } from '@/types/api'

import * as S from './styles'

interface IProps {
    quest: Quest
}

export default function QuestDetail({ quest }: IProps) {
    return (
        <S.SingleQuestContainer>
            <S.StyledQuestImg
                src={quest.cover}
                height={270}
                width={748}
                alt=""
            />
        </S.SingleQuestContainer>
    )
}
