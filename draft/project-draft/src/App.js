import './App.css';

// Demonstrate how to use props and destructuring 
const Person = ({name, job, company})=>{
  return(
    <div>
      <h1>Name: {name}</h1>
      <h1>job: {job}</h1>
      <h1>company: {company}</h1>
    </div>
  )
}


const App = () => {
  return (
    <div className="App">
      <Person name='Jaypee' job='Software Engineer' company='Novare'/>
      <Person />
    </div>
  );
}

export default App;
