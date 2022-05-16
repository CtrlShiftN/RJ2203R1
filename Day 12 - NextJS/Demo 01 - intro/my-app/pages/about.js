import Link from 'next/link';

export default function About() {
    return (
        <ul>
            <li>
                <Link href="/post/abc">
                    Go to page /post/[pid].js
                </Link>
            </li>
            <li>
                <Link href="/post/abc?state=idddd">
                    Go to page /post/[pid].js
                </Link>
            </li>
            <li>
                <Link href="/post/abc/xyz">
                    Go to page /post/[pid]/[comment].js
                </Link>
            </li>
        </ul>
    )
}
