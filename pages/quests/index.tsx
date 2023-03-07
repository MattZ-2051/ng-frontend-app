import { getCurrentQuests } from '@/api/quests'
import { useQuery } from '@tanstack/react-query'
import { Quest } from '@/types/api'
import QuestTile from '@/components/QuestTile'

import * as S from './styles'

function QuestPage(props: any) {
    const { isLoading, isError, data, error } = useQuery<Quest[]>(
        ['quests'],
        getCurrentQuests,
        { initialData: props.quests }
    )

    return (
        <S.Container>
            <S.QuestGrid>
                {data?.map((quest, index) => {
                    if (index < 6) {
                        return <QuestTile quest={quest} key={quest.id} />
                    }
                })}
            </S.QuestGrid>
        </S.Container>
    )
}

export default QuestPage

export async function getStaticProps() {
    const quests = await getCurrentQuests()
    return { props: { quests } }
}
