import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>

            <TwitterFollowCard userName="vxnder">
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}