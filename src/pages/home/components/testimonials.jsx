const testimonials = [
  {
    name: "Leslie Alexander",
    username: "@lesliealexander",
    text: "“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Foster",
    username: "@michaelfoster",
    text: "“Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.”",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Dries Vincent",
    username: "@driesvincent",
    text: "“Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.”",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Brenna Goyette",
    username: "@brennagoyette",
    text: "“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.”",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    text: "“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsum ut officia rem nulla blanditiis.”",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Courtney Henry",
    username: "@courtneyhenry",
    text: "“Nam nesciunt dolorem dolor asperiores cum.”",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Leonard Krasner",
    username: "@leonardkrasner",
    text: "“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut vel incidunt excepturi rerum voluptatem.”",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Floyd Miles",
    username: "@floydmiles",
    text: "“Architecto libero natus est. Sunt reiciendis quasi eaque.”",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Tom Cook",
    username: "@tomcook",
    text: "“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repellendusa corrupti.”",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Whitney Francis",
    username: "@whitneyfrancis",
    text: "“Aliquid dolore praesentium ratione. Vitae quod id explicabo non sunt.”",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Emily Selman",
    username: "@emilyselman",
    text: "“Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid.”",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="container mx-auto">
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
          <p className="text-base text-center font-semibold leading-7 text-indigo-600">
            Testimonials
          </p>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
            We have worked <br /> with thousands of amazing people
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-900 font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.username}</p>
                  </div>
                </div>
              </div>
            ))}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
