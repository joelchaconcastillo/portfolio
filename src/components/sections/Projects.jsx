import React from "react";
import ProjectCard from "../cards/projectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
      <div className="flex justify-center">
        <div className="max-w-[960px] w-full">
          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Projects</h2>
            <p className="text-sm text-slate-600 dark:text-[#9fc1df]">Selected work and prototypes</p>
          </div>

          {/* Frosted container to match Research/Details styling and respect dark mode */}
          <div className="p-4 bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-sm rounded-2xl">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {projects.map((p) => (
                <ProjectCard key={p.id} title={p.title} image={p.image} description={p.description} url={p.url} tags={p.tags} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
