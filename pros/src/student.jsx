
function Student(pros){
    return(
        <div className="student">
           <p>Name : {pros.name}</p>
           <p>age : {pros.age}</p>
           <p>Student: {pros.isStudent ? "YES" : "NO"}</p>
        </div>
    )
}

export default Student;