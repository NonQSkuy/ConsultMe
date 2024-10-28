import { HandThumbUpIcon } from "@heroicons/react/20/solid";
import { UserGroupIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/16/solid";

export default function StatsHome() {
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
      </div>
    </div>
  );
}
