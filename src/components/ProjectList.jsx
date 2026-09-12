import Project from "./Project"

function ProjectList({ projects, handleDelete }) {
    return (
        <div className="projectListCard">
            {/* project search bar */}
            <div className="ui two cards">
                {projects.map((project) => (
                    <Project key={project.id} project={project} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList