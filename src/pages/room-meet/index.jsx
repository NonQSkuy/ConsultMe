import Webcam from "react-webcam";

export default function PrepareMeeting() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  return (
    <div>
      <p>Choose your video and audio options</p>
      <div>
        <Webcam
          audio={false}
          height={720}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot();
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
      </div>
    </div>
  );
}
