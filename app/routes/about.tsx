import React from "react";

export default function About() {
  const skills = [
    {
      category: "Languages & Tools",
      items: [
        "Golang",
        "Java",
        "Typescript",
        "JavaScript",
        "SQL",
        "Docker",
        "Firebase",
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "Express.js",
        "Next.js",
        "Gin Tonic",
        "Echo",
        "Gorilla Mux",
        "Sprint Boot",
        "GraphQL",
        "AWS SST",
      ],
    },
    {
      category: "Data",
      items: [
        "DynamoDB",
        "ElasticSearch",
        "Mysql",
        "Postgres",
        "Oracle",
        "Redis",
        "MongoDB",
        "Kafka",
        "RabbitMQ",
      ],
    },
  ];

  return (
    <div className="relative pt-14 md:pt-0 mx-4">
      <div
        className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-16 lg:gap-y-32 md:pt-[15vh]"
        style={{ transform: "translate3d(0px, -7.0759px, 0px) scale(0.9965)" }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="text-2xl md:text-4xl relative z-30 flex w-full flex-col justify-center col-span-full leading-none text-[#312450] mix-blend-exclusion lg:col-end-7 mt-4 mb-4 order-2 md:order-1 md:ml-20">
            <span>
              <div className="overflow-hidden">
                <span className="">
                  {"DEVELOPER".split("").map((char, i) => (
                    <span key={"dev-" + i} className="inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              </div>
            </span>
            <span>
              <div className="overflow-hidden">
                <span className="">
                  {"ARCHITECT".split("").map((char, i) => (
                    <span key={"arc-" + i} className="inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              </div>
            </span>
            <span>
              <div className="overflow-hidden">
                <span className="">
                  {"CREATOR".split("").map((char, i) => (
                    <span key={"cre-" + i} className="inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              </div>
            </span>
            <div className="mt-8 mb-4 ">
              <span className="text-base">
                Software Developer with 12+ years of experience, and a passion
                for cutting-edge technologies. My main focus is on usability,
                brand-new web solutions, and the creation of rich experiences
                for users. Worked on various projects related to the fintech
                industry. Always willing to implement the best practices and
                coding standards for the team in order to create an exceptional
                quality product. I'm a responsible problem solver with deep
                analytical and good management skills.
              </span>
            </div>
          </div>
          <div className="relative z-0 lg:col-span-6 col-span-full flex w-full items-center overflow-clip md:items-end order-1 md:order-2">
            <section className="self-start md:px-6 py-5 px-0 text-[#312450] w-full">
              <div className="max-w-6xl mx-auto">
                <h2 className="md:text-4xl text-2xl font-bold mb-8 text-center">
                  Skills
                </h2>
                <div className="grid grid-cols-3 gap-0 md:gap-5 md:p-5 p-0">
                  {skills.map((category) => (
                    <div
                      key={category.category}
                      className="p-2  transition self-start"
                    >
                      <h3 className="hidden md:flex text-xl font-semibold mb-4">
                        {category.category}
                      </h3>
                      <ul className="space-y-3 md:text-base">
                        {category.items.map((skill) => (
                          <div
                            key={skill}
                            className="flex relative items-start gap-2 text-[#3124f0]"
                          >
                            <span className="group relative block h-fit overflow-hidden font-medium select-none">
                              <span className="block w-full transition-transform duration-500 ease-in-out translate-y-0 group-hover:-translate-y-full">
                                <h1 className="font-mono cursor-default ">
                                  {skill}
                                </h1>
                              </span>
                              <span
                                aria-hidden="true"
                                className="absolute top-0 left-0 w-full block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
                              >
                                <h1 className="font-mono cursor-default ">
                                  {skill}
                                </h1>
                              </span>
                            </span>
                          </div>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
