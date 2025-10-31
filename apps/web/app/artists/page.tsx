type Artist = {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function ArtistsPage() {
    return (
        <div>
            <h1>Artists</h1>
        </div>
    )
}