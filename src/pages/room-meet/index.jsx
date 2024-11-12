import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/16/solid";
import { Checkbox, Slider, Switch } from "@nextui-org/react";
import {
  AudioLines,
  FileAudio,
  MicIcon,
  MonitorSpeaker,
  PhoneCall,
  SlidersVertical,
  SpeakerIcon,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import Webcam from "react-webcam";

export default function PrepareMeeting() {
  const videoConstraints = {
    height: 500,
    facingMode: "user",
  };

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  return (
    <div className="px-52 py-56">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#75ecf0] to-[#4034f3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <p className="text-center font-semibold text-2xl">
        Choose your video and audio options
      </p>
      <div className="flex justify-between items-center space-x-10">
        <div className="bg-gray-800 w-1/2">
          <Webcam
            audio={false}
            height={600}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          ></Webcam>
          <div className="px-10 py-5">
            <Switch>
              <VideoIcon fill="white" color="white" size={40} />
            </Switch>
          </div>
        </div>
        <div className="w-1/2 h-[500px] space-y-3">
          <div className="flex shadow-xl justify-between bg-gray-400 p-6 w-full">
            <div className="flex items-center">
              <SpeakerWaveIcon color="white" width={30} className="mr-10" />
              <p className="font-semibold">Computer Audio</p>
            </div>
            <Checkbox size="lg"></Checkbox>
          </div>

          <div className="bg-gray-500 p-10 w-full space-y-5">
            <div className="flex items-center justify-between w-full px-2">
              <p>PC Mic and Speakers</p>
              <SlidersVertical />
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <MicIcon className="mr-5" />
                <Switch className="mr-8" />
              </div>
              <div className="flex items-center w-2/3">
                <SpeakerWaveIcon width={30} className="mr-5" />
                <Slider
                  radius="full"
                  step={0.01}
                  maxValue={1}
                  minValue={0}
                  defaultValue={0.7}
                  aria-label="Temperature"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between shadow-xl bg-gray-400 p-6 w-full">
            <div className="flex items-center">
              <PhoneCall color="white" width={30} className="mr-10" />
              <p className="font-semibold">Phone Audio</p>
            </div>
            <Checkbox size="lg"></Checkbox>
          </div>
          <div className="flex justify-between shadow-xl bg-gray-400 p-6 w-full">
            <div className="flex items-center">
              <SpeakerWaveIcon color="white" width={30} className="mr-10" />
              <p className="font-semibold">Room Audio</p>
            </div>
            <Checkbox size="lg"></Checkbox>
          </div>
          <div className="flex justify-between shadow-xl bg-gray-400 p-6 w-full">
            <div className="flex items-center">
              <SpeakerXMarkIcon color="white" width={30} className="mr-10" />
              <p className="font-semibold">Don't Use Audio</p>
            </div>
            <Checkbox size="lg"></Checkbox>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#75ecf0] to-[#4034f3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
