function SearchBar({ filter, setFilter }) {
    return (
        <div className="ui centered grid">
            <form className="ui form eight wide column">
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search..."
                />
            </form>
        </div>
    )
}

export default SearchBar