function Project({ project, handleDelete }) {
    return (
        <div className="projectItem ui card">
            <div className="projectInfo">
                <h3 className="header">{project.title}</h3>
                <p className="description">{project.description}</p>
            </div>
            <img className="ui bottom attached basic button" src={null} alt="delete button" onClick={() => handleDelete(project)} />
        </div>
    )
}

export default Project