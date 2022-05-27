import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <div className="container pt-5">
            <h2>Create page</h2>
            <button onClick={(e) => router.back()}>Back</button>
        </div>
    )
}