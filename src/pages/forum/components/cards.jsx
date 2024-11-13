import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { Download, MessagesSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const forums = [
    {
        title: "Lecturer Rescheduling",
        name: "Leslie Alexander",
        username: "@lesliealexander",
        text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        title: "Final Exam",
        name: "Michael Foster",
        username: "@michaelfoster",
        text: "“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        title: "Retake",
        name: "Dries Vincent",
        username: "@driesvincent",
        text: "“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.”",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        title: "Lecturer",
        name: "Brenna Goyette",
        username: "@brennagoyette",
        text: "“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.”",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

export default function Cards() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/forumdetail")} className="cursor-pointer">
        {forums.map((forum, index) => (
            <Card key={index} className="max-w-[540px] p-3 my-5">
                <p className="px-3 text-[30px] font-bold">{forum.title}</p>
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={forum.image} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{forum.name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{forum.username}</h5>
                    </div>
                    </div>
                    {/* <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                    >
                    {isFollowed ? "Unfollow" : "Follow"}
                    </Button> */}
                </CardHeader>
                <CardBody className="px-3 py-5 text-small">
                    <p>
                    Hi Mates, <br />
                    {forum.text}
                    </p>
                    <span className="pt-2">
                    #FrontendWithZoey 
                    <span className="py-2" aria-label="computer" role="img">
                        💻
                    </span>
                    </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                    <p className=" text-default-400 text-small"><Download /></p>
                    
                    </div>
                    <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small"><MessagesSquare /></p>
                    {/* <p className="text-default-400 text-small">Add Response</p> */}
                    </div>
                </CardFooter>
            </Card>
        ))}
    </div>
    
  );
}
