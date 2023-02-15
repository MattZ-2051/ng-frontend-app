import { getCurrentQuests, getSingleQuest } from '@/api/quests'
import QuestDetail from '@/components/QuestDetail'
import { Quest } from '@/types/api'
import { GetStaticPropsContext } from 'next'

import * as S from './styles'

interface IProps {
    quest: Quest
}

function SingleQuest({ quest }: { quest: Quest }) {
    return (
        <S.Container>
            <QuestDetail quest={quest} />
        </S.Container>
    )
}

export async function getStaticPaths() {
    const quests = await getCurrentQuests()
    const paths = quests.map((quest) => ({
        params: { id: `${quest.id}` },
    }))

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params?.id as string
    const quest = await getSingleQuest(id)
    return { props: { quest } }
}

export default SingleQuest
