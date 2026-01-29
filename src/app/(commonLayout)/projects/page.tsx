import { projects } from "@/data/projects";
import type { TProject } from "@/types/types";
import type { Metadata } from "next";
import ProjectCard from "@/components/views/ProjectCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "HUMAYUN | Projects",
};

const ProjectsPage = () => {

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Background gradients */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header with gradient underline */}
      <div className="flex flex-col items-center justify-center mb-12 relative z-10">
        <ScrollReveal width="100%">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl text-center font-bold text-white relative border-b-2 border-[#64B5F6] inline-block mb-4">
              All{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 text-center max-w-xl">
              A showcase of my technical skills and creative solutions across web development, mobile apps, and more.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Projects Grid */}
      <div className="space-y-10 md:space-y-16 mb-16 relative z-10">
        {projects.map((project: TProject, index: number) => (
          <ScrollReveal key={project._id} width="100%" delay={index * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
