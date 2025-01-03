import { HandThumbUpIcon } from "@heroicons/react/20/solid";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";

export default function StatsHome() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Transactions every 24 hours
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center justify-center">
              <div className="rounded-full bg-[#EFF9FB] p-4 mb-2">
                <HandThumbUpIcon width={60} className="text-primary-400" />
              </div>
              4.7/5 rating
            </dd>
          </div>

          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Trusted by</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center justify-center">
              <div className="rounded-full bg-[#EFF9FB] p-4 mb-2">
                <UserGroupIcon width={60} className="text-primary-400" />
              </div>
              10k+ users
            </dd>
          </div>

          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Increase in user’s wellbeing
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center justify-center">
              <div className="rounded-full bg-[#EFF9FB] p-4 mb-2">
                <HeartIcon width={60} className="text-primary-400" />
              </div>
              22,4%
            </dd>
          </div>
        </dl>

        <div className="flex w-full mt-44 items-center justify-between">
          <blockquote
            className="tiktok-embed max-w-[605px] min-w-[325px]"
            cite="https://www.tiktok.com/@appleuser69767972/video/7455572170471689479"
            data-video-id="7455572170471689479"
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@appleuser69767972"
                href="https://www.tiktok.com/@appleuser69767972?refer=embed"
              >
                @appleuser69767972
              </a>{" "}
              <p>ConsultMe</p>{" "}
              <a
                target="_blank"
                title="♬ original sound  - appleuser69767972"
                href="https://www.tiktok.com/music/original-sound-appleuser69767972-7455572413015804673?refer=embed"
              >
                ♬ original sound - appleuser69767972
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
          <script async src="https://www.tiktok.com/embed.js"></script>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DDqgmn3SIj0/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "605px",
              minWidth: "325px",
              padding: "0",
              width: "calc(100% - 2px)",
            }}
          >
            <div className="p-4">
              <a
                href="https://www.instagram.com/reel/DDqgmn3SIj0/?utm_source=ig_embed&amp;utm_campaign=loading"
                className="block text-center text-decoration-none w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full h-10 w-10 mr-4"></div>
                  <div className="flex flex-col flex-grow justify-center">
                    <div className="bg-gray-200 rounded h-3.5 mb-1.5 w-24"></div>
                    <div className="bg-gray-200 rounded h-3.5 w-16"></div>
                  </div>
                </div>
                <div className="pt-[19%]"></div>
                <div className="block h-12.5 w-12.5 mx-auto mb-3">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g
                        transform="translate(-511.000000, -20.000000)"
                        fill="#000000"
                      >
                        <g>
                          <path d="M556.869,30.41..." />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <div className="text-blue-500 font-semibold text-sm leading-5">
                    View this post on Instagram
                  </div>
                </div>
                <div className="pt-[12.5%]"></div>
                <div className="flex items-center mb-3.5">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 rounded-full h-3 w-3"></div>
                    <div className="bg-gray-200 h-3 transform rotate-[-45deg] w-3"></div>
                    <div className="bg-gray-200 rounded-full h-3 w-3"></div>
                  </div>
                  <div className="ml-2">
                    <div className="bg-gray-200 rounded-full h-5 w-5"></div>
                    <div className="w-0 h-0 border-t-[2px] border-l-[6px] border-transparent border-gray-200"></div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-0 h-0 border-t-[8px] border-r-[8px] border-transparent border-gray-200"></div>
                    <div className="bg-gray-200 h-3 w-4"></div>
                    <div className="w-0 h-0 border-t-[8px] border-l-[8px] border-transparent border-gray-200"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start mb-6">
                  <div className="bg-gray-200 rounded h-3.5 mb-1.5 w-56"></div>
                  <div className="bg-gray-200 rounded h-3.5 w-36"></div>
                </div>
              </a>
              <p className="text-gray-400 text-sm leading-[1.21rem] mt-2 mb-0 overflow-hidden text-center truncate">
                <a
                  href="https://www.instagram.com/reel/DDqgmn3SIj0/?utm_source=ig_embed&amp;utm_campaign=loading"
                  className="text-gray-400 text-sm font-normal leading-[1.21rem] text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A post shared by ConsultMe (@consultmehc)
                </a>
              </p>
            </div>
          </blockquote>
        </div>

        <div className="flex w-full mt-10 items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W7Hjv8wYgjM?si=JQ5eqFWGEqMUlXdv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
