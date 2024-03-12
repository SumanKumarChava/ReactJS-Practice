const User = ({name, location}) => {
    return (
        <div class="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Occupation : Engineer</h4>
        </div>
    )
}

export default User;