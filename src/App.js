import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaginationPage from "./Pagination/index";
import { Table } from 'reactstrap';

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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      currentPage: 1,
      totalUsers: 0
    }
  };
  nextpage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
      users: []
    })
    this.getUsers(pageNumber);
  }
  tenChange = (pageNumber, isposOrneg) => {
    var finalPage;
    if (isposOrneg > 0) //+10 clicked
      finalPage = pageNumber + 10;
    else //-10 clicked
      finalPage = pageNumber - 10;
    this.setState({
      currentPage: finalPage,
      users: [],
    })
    this.getUsers(finalPage);
  }

  hundreadChange = (pageNumber, isposOrneg) => {
    var finalPage;
    if (isposOrneg > 0) //+100 clicked
      finalPage = pageNumber + 100
    else  //-100 Clicked
      finalPage = pageNumber - 100
    this.setState({
      currentPage: finalPage,
      users: [],
    })
    this.getUsers(finalPage);

  }
  componentDidMount() {

    fetch('http://localhost:5000/getUsers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(params)
    })
      .then(data => {
        return data.json()
      })
      .catch(err => {
        //console.log("chartErr", err)
        return err
      })
  }
  render() {
    return (
      <div className="App">
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
