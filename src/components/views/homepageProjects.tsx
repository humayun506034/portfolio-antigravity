import { projects } from "@/data/projects";
import type { TProject } from "@/types/types";
import type { Metadata } from "next";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export const metadata: Metadata = {
  title: "HUMAYUN | Projects",
};

const HomePageProjects = () => {
  const activeProjects = projects.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Background gradients */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header with gradient underline */}
      <div className="flex flex-col items-center justify-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-white mb-4">
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <div className="max-w-2xl text-center text-gray-400">
          <p>Explore my latest work showcasing modern web technologies and design excellence.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10 md:space-y-16 mb-16 relative z-10">
        {activeProjects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Link href="/projects" className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="relative z-10 flex items-center gap-2">
            View All Projects
            <FaExternalLinkSquareAlt className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default HomePageProjects;
