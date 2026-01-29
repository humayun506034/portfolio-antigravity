"use client"
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiPostman,
  SiNetlify,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiRedux,
  SiVercel,
} from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { ScrollReveal } from "../animations/ScrollReveal"

const MySkills = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    const iconSize = 30
    const iconColor = "#fff"

    switch (iconName) {
      case "tailwind":
        return <SiTailwindcss size={iconSize} color="#06B6D4" />
      case "javascript":
        return <SiJavascript size={iconSize} color="#F7DF1E" />
      case "typescript":
        return <SiTypescript size={iconSize} color="#3178C6" />
      case "react":
        return <SiReact size={iconSize} color="#61DAFB" />
      case "nextjs":
        return <SiNextdotjs size={iconSize} color={iconColor} />
      case "nodejs":
        return <SiNodedotjs size={iconSize} color="#339933" />
      case "expressjs":
        return <SiExpress size={iconSize} color={iconColor} />
      case "mongodb":
        return <SiMongodb size={iconSize} color="#47A248" />
      case "git":
        return <SiGit size={iconSize} color="#F05032" />

      case "postman":
        return <SiPostman size={iconSize} color="#FF6C37" />
      case "netlify":
        return <SiNetlify size={iconSize} color="#00C7B7" />
      case "postgresql":
        return <SiPostgresql size={iconSize} color="#336791" />
      case "sql":
        return <SiMysql size={iconSize} color="#4479A1" />
      case "prisma":
        return <SiPrisma size={iconSize} color="#2D3748" />
      case "valentina":
        return <FaDatabase size={iconSize} color="#FF6B6B" />
      case "pgadmin":
        return <FaDatabase size={iconSize} color="#336791" />
      case "redux":
        return <SiRedux size={iconSize} color="#764ABC" />
      case "rtk-query":
        return <SiRedux size={iconSize} color="#6A45EC" />
      case "vercel":
        return <SiVercel size={iconSize} color="#6A45EC" />
      default:
        return <div className="w-[30px] h-[30px] bg-blue-300 rounded-full"></div>
    }
  }

  return (
    <div>
      <div>
        <div className="flex items-center justify-center pb-5 ">
          <ScrollReveal width="fit-content">
            <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
              My <span className="text-[#64B5F6]">Skills</span>
            </h1>
          </ScrollReveal>
        </div>
      </div>
      {/*  */}
      <div className=" mx-auto px-5 lg:pt-10 pt-5 min-h-screen">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Frontend Technologies Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <ScrollReveal width="100%">
                <div className="flex items-center pb-10 ml-2 relative">
                  <div className="absolute left-0 top-0 w-px h-full bg-white" />
                  <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                  <h2 className="text-2xl text-white ml-5">Frontend Technologies</h2>
                </div>
              </ScrollReveal>

              {/* Items */}
              {[
                {
                  icon: "tailwind",
                  title: "Tailwind CSS",
                  text: "Experienced in using Tailwind CSS for rapid and efficient UI development.",
                },
                {
                  icon: "javascript",
                  title: "JavaScript",
                  text: "Proficient in JavaScript for dynamic, interactive web application development.",
                },
                {
                  icon: "typescript",
                  title: "Typescript",
                  text: "Proficient in Typescript for dynamic, interactive web application development.",
                },
                {
                  icon: "react",
                  title: "React JS",
                  text: "Skilled in building dynamic, efficient, and scalable user interfaces with React JS.",
                },
                {
                  icon: "nextjs",
                  title: "Next.js",
                  text: "Expert in Next.js for building fast, SEO-friendly, and scalable web applications.",
                },
                {
                  icon: "redux",
                  title: "Redux",
                  text: "Experienced with Redux for state management in complex React applications.",
                },
                {
                  icon: "rtk-query",
                  title: "RTK Query",
                  text: "Skilled in using RTK Query for efficient data fetching and caching in Redux applications.",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                  <div className="relative pb-8 pl-8 ml-2">
                    <div className="absolute left-0 top-0 w-px h-full bg-white" />
                    <div className="absolute left-[-15px] top-0 w-[30px] h-[30px] flex items-center justify-center">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex items-start">
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white ">{item.title}</h3>
                        <p className="text-gray-400 mt-2">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Backend Technologies Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <ScrollReveal width="100%" delay={0.2}>
                <div className="flex items-center pb-10 ml-2 relative">
                  <div className="absolute left-0 top-0 w-px h-full bg-gray-700" />
                  <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                  <h2 className="text-2xl text-white  ml-5">Backend Technologies</h2>
                </div>
              </ScrollReveal>

              {[
                {
                  icon: "typescript",
                  title: "Typescript",
                  text: "Proficient in Typescript for dynamic, interactive web application development.",
                },
                {
                  icon: "nodejs",
                  title: "Node JS",
                  text: "Proficient in using Node JS for developing fast and scalable server-side applications.",
                },
                {
                  icon: "expressjs",
                  title: "Express JS",
                  text: "Experienced in building robust web applications and APIs using Express JS.",
                },
                {
                  icon: "sql",
                  title: "SQL",
                  text: "Skilled in writing complex SQL queries for data manipulation and retrieval.",
                },
                {
                  icon: "postgresql",
                  title: "PostgreSQL",
                  text: "Experienced with PostgreSQL for reliable and scalable relational database management.",
                },
                {
                  icon: "prisma",
                  title: "Prisma",
                  text: "Proficient with Prisma ORM for type-safe database access and migrations.",
                },
                {
                  icon: "mongodb",
                  title: "Mongo DB",
                  text: "Proficient in using MongoDB for scalable, flexible, and efficient database management.",
                },
                {
                  icon: "mongoose",
                  title: "Mongoose",
                  text: "Skilled in using Mongoose for seamless MongoDB integration with schema-based data modeling.",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                  <div className="relative pb-8 pl-8 ml-2">
                    <div className="absolute left-0 top-0 w-px h-full bg-white" />
                    <div className="absolute left-[-15px] top-0 w-[30px] h-[30px] flex items-center justify-center">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex items-start">
                      <div className="ml-4">
                        <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                        <p className="text-gray-400 mt-2">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="relative">
            <div className="flex flex-col">
              {/* Header */}
              <ScrollReveal width="100%" delay={0.4}>
                <div className="flex items-center pb-10 ml-2 relative">
                  <div className="absolute left-0 top-0 w-px h-full bg-white" />
                  <div className="w-5 h-5 rounded-full bg-blue-300 z-10 absolute left-[-9px] top-0" />
                  <h2 className="text-2xl text-white  ml-5">Tools</h2>
                </div>
              </ScrollReveal>

              {/* Items */}
              {[
                {
                  icon: "git",
                  title: "Git & GitHub",
                  text: "Proficient in Git for version control and GitHub for collaborative development.",
                },
                {
                  icon: "vscode",
                  title: "VS Code",
                  text: "VS Code is a powerful, lightweight code editor with support for extensions, making it ideal for web development across different languages and frameworks.",
                },
                {
                  icon: "postman",
                  title: "Postman",
                  text: "Postman is an API testing tool that allows developers to send requests and analyze responses, making API integration and debugging easier.",
                },
                {
                  icon: "pgadmin",
                  title: "pgAdmin",
                  text: "Experienced with pgAdmin for PostgreSQL database administration and management.",
                },
                {
                  icon: "valentina",
                  title: "Valentina Studio",
                  text: "Skilled in using Valentina Studio for database design, management, and query execution.",
                },
                {
                  icon: "netlify",
                  title: "Netlify",
                  text: "Netlify is a platform for deploying static sites and web applications, offering continuous integration and automated deployments from Git repositories.",
                },
                {
                  icon: "vercel",
                  title: "Vercel",
                  text: "Vercel is a platform for deploying frontend and backend applications, providing seamless integration with Git repositories for continuous deployment, optimized performance, and serverless functions support.",
                },
                {
                  icon: "mongodb",
                  title: "MongoDB Atlas",
                  text: "MongoDB Atlas is a cloud-based database service that simplifies MongoDB deployments, providing automatic scaling, backups, and monitoring.",
                },
              ].map((item, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                  <div className="relative pb-8 pl-8 ml-2">
                    <div className="absolute left-0 top-0 w-px h-full bg-white" />
                    <div className="absolute left-[-15px] top-0 w-[30px] h-[30px] flex items-center justify-center">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex items-start">
                      <div className="ml-4">
                        <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                        <p className="text-gray-400 mt-2">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills
