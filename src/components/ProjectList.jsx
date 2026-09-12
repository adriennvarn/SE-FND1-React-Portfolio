import Project from "./Project"

function ProjectList({ projects, handleDelete }) {
    return (
        <div className="ui three doubling cards" style={{ padding: "2rem" }}>
            {projects.map((project) => (
                <Project key={project.id} project={project} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default ProjectList