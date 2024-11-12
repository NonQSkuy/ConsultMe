import {Card, CardHeader, Avatar} from "@nextui-org/react";

const creators = [
    {
        number: "1",
        name: "Leslie Alexander",
        username: "@lesliealexander",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        number: "2",
        name: "Michael Foster",
        username: "@michaelfoster",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        number: "3",
        name: "Dries Vincent",
        username: "@driesvincent",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        number: "4",
        name: "Brenna Goyette",
        username: "@brennagoyette",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

export default function Creators() {
    return (
        <Card className="max-w-[540px] p-3 my-5">
            <p className="pl-1 text-sm font-bold">Top Creators</p>
            <br />
            <div className="flex justify-start">
                <p className="px-1 text-sm font-bold underline">Week</p>
                <p className="px-1 text-sm font-bold">All Time</p>
            </div>
            
            {creators.map((creator, index) => (
                <CardHeader key={index}>
                    <div className="flex gap-5">
                    <p>{creator.number}</p>
                    <Avatar isBordered radius="full" size="md" src={creator.image} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{creator.name}</h4>
                            <h5 className="text-small tracking-tight text-default-400">{creator.username}</h5>
                        </div>
                    </div>
                </CardHeader>
            ))}
        </Card>
    )
} 