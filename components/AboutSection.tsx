import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "React" },
  { skill: "MySQL" },
  { skill: "HTML" },
  { skill: "Pandas" },
  { skill: "Seaborn" },
  { skill: "AWS" },
  { skill: "Github" },
  { skill: "Computer Vision" },
  { skill: "OpenCV" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pt-16 pb-12 md:pt-24 md:pb-48 mt-50">
        <h1 className="text-center font-bold text-4xl text-slate-700 ">
          Hi There, I&#39;m Nithyasri!
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col text-slate-700 space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-slate-700 text-2xl font-bold mb-6 md:text-left mt-10">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Nithyasri and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" innovative"}</span>, and
              <span className="font-bold">{" creative"}</span> student.
            </p>
            <br />
            <p>
              I&#39;m currently a senior at California High School and I&#39;m
              planning on majoring in Computer Science next year.
            </p>
            <br />
            <p>
              I love tinkering around with technology, and I am currently
              working on projects that involve AI. Because of my passion for
              this subject, I have dedicated much of my time to developing cool
              projects, and I have actively participated in research studies at
              the intersection of computer science, medicine, and biology. Fun
              fact: I developed this website using Next.js and Tailwind CSS!
            </p>
            <br />
            <p>
              In my free time, I like to play the electric guitar and listen to
              music. Favorite artists are Don Toliver and Tame Impala!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mt-10 text-2xl text-slate-700 font-bold mb-6">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {/* Skill 1 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[0].skill}</p>
                <Image
                  src="/skills/python.png"
                  alt="Skill 1"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 2 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[1].skill}</p>
                <Image
                  src="/skills/java.png"
                  alt="Skill 2"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 3 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[2].skill}</p>
                <Image
                  src="/skills/next.png"
                  alt="Skill 3"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 4 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[3].skill}</p>
                <Image
                  src="/skills/tailwind1.png"
                  alt="Skill 4"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 5 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[4].skill}</p>
                <Image
                  src="/skills/react.webp"
                  alt="Skill 5"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 6 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[5].skill}</p>
                <Image
                  src="/skills/mysql.png"
                  alt="Skill 6"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 7 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[6].skill}</p>
                <Image
                  src="/skills/html.png"
                  alt="Skill 7"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 8 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[7].skill}</p>
                <Image
                  src="/skills/pandas4.png"
                  alt="Skill 7"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Skill 9 */}
              <div className="bg-gray-50 drop-shadow-lg px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold hover:scale-105 flex items-center">
                <p>{skills[8].skill}</p>
                <Image
                  src="/skills/seaborn.png"
                  alt="Skill 7"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </div>

              {/* Add more skills and corresponding images here */}
            </div>
            <Image
              src="/skills-img.avif"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-[-30px] md:left-50 rounded-lg md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
