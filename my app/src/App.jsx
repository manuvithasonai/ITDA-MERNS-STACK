// import MANU  from "./Manu";
// function App(){
//   return(
//     <div>
// <h1> my react app</h1>
// <MANU/>
//     </div>
//   );
// }
// export default App;

import Student from "./Student";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Management</h1>

      <Student
        name="Manu"
        age="20"
        course="React"
      />

      <Student
        name="Ravi"
        age="21"
        course="JavaScript"
      />

      <Student
        name="Sita"
        age="20"
        course="MERN Stack"
      />
      <Student
        name="Suma"
        age="20"
        course="MERN Stack"
      />
      <Student
        name="latha"
        age="20"
        course="MERN Stack"
      />
    </div>
  );
}

export default App;