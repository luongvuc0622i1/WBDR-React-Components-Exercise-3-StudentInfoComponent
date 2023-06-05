// import logo from './logo.svg';
// import './App.css';

import StudentInfoComponent from "./components/StudentInfoComponent";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const students = [
  {
      id: 1,
      name: 'Nguyễn Văn A',
      age: 30,
      address: 'Hà Nội'
  },
  {
      id: 2,
      name: 'B',
      age: 52,
      address: 'D'
  }
];

function App() {
  return (
    <StudentInfoComponent data={students}/>
  );
}
export default App;