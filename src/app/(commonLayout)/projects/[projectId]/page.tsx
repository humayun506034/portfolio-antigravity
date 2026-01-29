import { projects } from "@/data/projects"
import type { TProject } from "@/types/types"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FaExternalLinkSquareAlt, FaGithub, FaArrowLeft } from "react-icons/fa"

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project._id,
  }))
}

interface IProps {
  params: Promise<{
    projectId: string
  }>
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const projectId = (await params).projectId
  const project = projects.find((p) => p._id === projectId)
  return {
    title: project ? `${project.title} - Project Details` : 'Project Details',
  }
}

const ProjectDetailsPage = async ({ params }: IProps) => {
  const projectId = (await params).projectId
  const project: TProject | undefined = projects.find((project: TProject) => project._id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />

        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-3xl">
            <Link href="/projects" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors gap-2 group">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              {project.short_description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.live_link}
                target="_blank"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-600/30 flex items-center gap-2"
              >
                Live Site <FaExternalLinkSquareAlt />
              </a>
              <a
                href={project.client_link}
                target="_blank"
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium transition-all flex items-center gap-2"
              >
                Client Code <FaGithub />
              </a>
              <a
                href={project.server_link}
                target="_blank"
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium transition-all flex items-center gap-2"
              >
                Server Code <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {project.long_description}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700/50 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technology.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm font-medium"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Author</h4>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <Image
                      src={project.author.image || "/placeholder.svg"}
                      alt={project.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{project.author.name}</p>
                    <p className="text-gray-400 text-sm">{project.author.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
