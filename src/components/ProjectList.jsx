import Project from "./Project"

function ProjectList({ projects, handleDelete }) {
    return (
        <div className="projectListCard">
            {/* project search bar */}

            {projects.map((project) => (
                <Project key={project.id} project={project} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default ProjectList