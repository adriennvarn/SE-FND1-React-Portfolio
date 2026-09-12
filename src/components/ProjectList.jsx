import Project from "./Project"

function ProjectList({ projects, handleDelete }) {
    return (
        <div className="projectListCard">
            <div className="ui three cards">
                {projects.map((project) => (
                    <Project key={project.id} project={project} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList