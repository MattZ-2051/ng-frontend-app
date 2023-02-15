import { Quest } from '@/types/api'
import axios from 'axios'

export const getCurrentQuests = async (): Promise<Quest[]> => {
    const res: Quest[] = await (
        await axios.get('http://localhost:3000/api/quests')
    ).data
    return res
}
