import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="space-y-2">
        {Object.entries(projects).map(([slug, project]) => (
          <li key={slug}>
            <Link
              href={`/projekter/${slug}`}
              className="text-blue-600 hover:underline text-lg"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}