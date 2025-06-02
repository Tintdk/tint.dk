import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ project: slug }));
}

export default function ProjectPage({ params }) {
  const project = projects[params.project];

  if (!project) return <div>Projekt ikke fundet</div>;

  return (
    <div className="flex flex-col lg:flex-row lg:overflow-x-auto h-svh">
      {/* Section 1: Full-screen cover */}
      <section className="relative w-full lg:w-screen h-screen lg:h-full shrink-0">
        {project.cover.type === "image" && (<img src={project.cover.src} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />)}
        {project.cover.type === "video" && (<video src={project.cover.src} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />)}
        <div className="absolute inset-0 size-full bg-black opacity-50"></div>

        {/* Grid-based overlay */}
        <div className="text-white absolute inset-0 flex flex-col justify-center">
          {/* Title & description */}
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 px-4">
            <div className="col-span-4 md:col-span-3 lg:col-start-4 lg:col-span-3">
              <h2 className="text-xl lg:text-2xl font-light leading-tight tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm leading-tight mt-4 opacity-90">
                {project.description}
              </p>
            </div>
          </div>

          {/* Client */}
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 px-4 pb-3 pt-12 lg:pt-32 items-center">
            <p className="text-xs uppercase leading-none col-span-1 lg:col-start-4">
              Client
            </p>
            <h3 className="text-sm leading-none col-span-1 lg:col-span-4">
              {project.client}
            </h3>
          </div>

          {/* Topic */}
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 px-4 pb-3 items-center">
            <p className="text-xs uppercase col-span-1 lg:col-start-4">
              Topic
            </p>
            <p className="text-sm  leading-none col-span-2 lg:col-span-4">
              {project.topic}
            </p>
          </div>
        </div>

      </section>

      {/* Section 2: Expands horizontally on lg */}
      <section className="min-h-screen lg:h-full shrink-0 px-2 py-20 lg:py-10 lg:px-40">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 h-full">
          {project.projectMedia.map((media, index) => {
            if (media.type === "image") {
              return (<img key={index} src={media.src} alt={`Media ${index + 1}`} className="w-full lg:w-auto object-contain" />);
            } else if (media.type === "video") {
              return (<video key={index} src={media.src} autoPlay loop muted playsInline className="w-full lg:w-auto object-contain" />);
            } else {
              return null;
            }
          })}
        </div>
      </section>
    </div>
  );
}