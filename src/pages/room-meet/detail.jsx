import { VideoCameraIcon } from "@heroicons/react/16/solid";
import { Button, Image, Input, Avatar, AvatarIcon } from "@nextui-org/react";
import {
  CameraIcon,
  Ellipsis,
  MicIcon,
  MonitorSpeaker,
  PhoneOffIcon,
  VideoIcon,
} from "lucide-react";
import consultant from "../../assets/konsultan.png";
import { useState } from "react";
import Webcam from "react-webcam";
import Draggable from "react-draggable";

const videoConstraints = {
  width: 300,
  height: 200,
  facingMode: "user",
};

export default function DetailRoomMeet() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const toggleCamera = () => {
    setIsCameraOpen((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: message, avatar: "https://randomuser.me/api/portraits/women/4.jpg" }]);
      setMessage("");
    }
  };

  return (
    <div>
      <header className="flex justify-end items-center bg-slate-600 space-x-6 p-3">
        <Ellipsis color="white" className="cursor-pointer"/>
        <MicIcon color="white" className="border-l-2 "/>
        <VideoIcon className="cursor-pointer" onClick={toggleCamera} color="white" />
        <Button color="danger">
          <PhoneOffIcon /> Leave
        </Button>
      </header>
      <div className="flex">
        <div className="flex w-3/4">
          <div className="bg-slate-500 relative">
            <Image src={consultant} className="w-full" radius="none" />
            <Draggable bounds="parent">
              <div className="absolute bottom-0 right-0 bg-slate-600 z-30 w-[300px] h-[200px] rounded-2xl">
                {isCameraOpen ? (
                  <Webcam
                    className="rounded-2xl"
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    mirrored={true}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <MonitorSpeaker width={300} />
                  </div>
                )}
              </div>
            </Draggable>
          </div>
        </div>

        {/* Chat Component */}
        <div className="w-1/4 flex flex-col bg-slate-100 p-4 space-y-4">
          <div className="flex-grow overflow-y-auto bg-white p-3 rounded-lg shadow space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className="flex items-center space-x-2 justify-end">
                <p className="p-3 bg-blue-100 rounded-lg max-w-[80%]">
                  {msg.text}
                </p>
                <Avatar src={msg.avatar} alt="avatar" className="w-8 h-8" />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
            <Button onClick={handleSendMessage} color="primary">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
