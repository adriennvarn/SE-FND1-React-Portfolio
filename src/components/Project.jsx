function Project({ project, handleDelete }) {
    return (
        <div className="projectItem">
            <img src={null} alt="delete button" onClick={() => handleDelete(project)} />
            <div className="projectInfo">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default Project