"use client"
import { ScrollReveal } from "../animations/ScrollReveal";

const MyEducation = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <ScrollReveal width="fit-content">
            <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
              My <span className="text-[#64B5F6]">Education</span>
            </h1>
          </ScrollReveal>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto px-5 py-5 h-full">
        <div>
          <ScrollReveal width="100%">
            <h1 className="text-2xl font-semibold text-center text-blue-300 pt-10 pb-10">
              Academic Educational Qualification
            </h1>
          </ScrollReveal>
        </div>
        <div className="text-white">
          <div>
            <ScrollReveal width="100%" delay={0.1}>
              <div className="flex gap-10">
                <div className="w-1/2 text-end hidden md:block">
                  <h1 className="text-2xl font-semibold">
                    Diploma In Engineering (Computer Technology){" "}
                  </h1>
                  <h2>Rangpur Polytechnic Institute, Rangpur</h2>
                  <p>August 2020 - January 2025</p>
                  <p>Result - 3.77 out of 4.00</p>
                </div>{" "}
                <div className="flex flex-col justify-center items-center">
                  <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                  <div className="h-44 w-[2px] bg-blue-300"></div>
                </div>
                <div className="text block md:hidden">
                  <h1 className="text-2xl font-semibold">
                    Diploma In Engineering (Computer Technology){" "}
                  </h1>
                  <h2>Rangpur Polytechnic Institute, Rangpur</h2>
                  <p>August 2020 - January 2025</p>
                  <p>Result - 3.77 out of 4.00</p>
                </div>
                <div className="w-1/2 hidden md:block"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.2}>
              <div className="flex gap-10">
                <div className="w-1/2 hidden md:block"></div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                  <div className="h-44 w-[2px] bg-blue-300"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-2xl font-semibold">
                    Secondary School Certificate (SSC){" "}
                  </h1>
                  <h2>Bondiara High School, Pirganj, Thakurgaon</h2>
                  <p>January 2015 - December 2019</p>
                  <p>Result - 4.83 (Out of 5.00)</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div>
          <ScrollReveal width="100%" delay={0.1}>
            <h1 className="text-2xl font-semibold text-center text-blue-300 pt-20 pb-10">
              Special Short Courses
            </h1>
          </ScrollReveal>
        </div>
        <div className="text-white">
          <div>
            <ScrollReveal width="100%" delay={0.1}>
              <div className="flex gap-10">
                <div className="w-1/2 hidden md:block"></div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                  <div className="h-44 w-[2px] bg-blue-300"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-2xl font-semibold">
                    Complete Web Development
                  </h1>
                  <h2>Programming Hero</h2>
                  <p>January 2024 - October 2024</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.2}>
              <div className="flex gap-10">
                <div className="w-1/2 hidden md:block text-end">
                  <h1 className="text-2xl font-semibold">
                    Industrial Attachment In Professional Web Design{" "}
                  </h1>
                  <h2>Creative IT Insitute, Uttara Branch, Dhaka</h2>
                  <p>September 2023 - December 2023</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                  <div className="h-44 w-[2px] bg-blue-300"></div>
                </div>
                <div className="w-full md:hidden">
                  <h1 className="text-2xl font-semibold">
                    Industrial Attachment In Professional Web Design{" "}
                  </h1>
                  <h2>E-Learning & Earning LTD</h2>
                  <p>August 2024 - October 2024</p>
                </div>
                <div className="w-1/2 hidden md:block"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.3}>
              <div className="flex gap-10">
                <div className="w-1/2 hidden md:block"></div>
                <div className="flex flex-col">
                  <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-2xl font-semibold">
                    Next Level Web Developemet
                  </h1>
                  <h2>Programming Hero</h2>
                  <p>November 2024 - May 2025</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
