function Student ({ name,age,course}){
    return(
        <div classname="student-card">
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <p>course:{course}</p>
        </div>
    );
}
export default Student;
