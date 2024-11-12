import {Card, Button} from "@nextui-org/react";

export default function CreateForum(){
    return (
        <Card className="max-w-[540px] px-3 py-5 my-5 text-center">
            <p className="font-bold">Hey! How's it going?</p>
            <br />
            <Button  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
            Tell us what's new with you
            </Button>
        </Card>
    )
}