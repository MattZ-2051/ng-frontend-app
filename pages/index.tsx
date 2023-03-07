import Head from 'next/head'
import { getCurrentQuests } from '@/api/quests'

export default function Home() {
    return (
        <>
            <Head>
                <title>Node Guardians</title>
                <meta name="description" content="Node Guardians frontend" />
            </Head>

            <main>
                <h1>main</h1>
            </main>
        </>
    )
}
