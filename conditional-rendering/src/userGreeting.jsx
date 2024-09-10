function UserGreeting(pros) {
  if (pros.userLogged) {
    return <h2 className="message">Welcome {pros.username}</h2>;
  } else {
    return <h2 className="prompt">Please Logged In</h2>;
  }
}

export default UserGreeting;
