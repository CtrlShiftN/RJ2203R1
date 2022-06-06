import { useParams } from 'react';
export default function Home() {
    const { id } = useParams();
    return (
        <Form mode='edit' id={id} />
    )
}