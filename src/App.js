import React from 'react'

class App extends React.Component {
  state = {
    person: {
      fullName: 'Akin Holo',
      bio: 'lorem lorem',
      imgSrc: "myPhoto",
      profession: 'web developer'
    },
    appear: false
  };

  handleClick=()=>this.setState({
    ...this.state,
    appear: !this.state.appear
  });

  render(){
    return(
      <div className='App'>
      <>
        {this.state.appear && (
          <>
            <h2>{this.state.person.fullName}</h2>
            <h2>{this.state.person.bio}</h2>
            <img src={this.state.person.imgSrc} alt='myPhoto'></img>
            <h2>{this.state.person.profession}</h2>
          </>
        )};

        <button onClick={this.handleClick}> see profile</button>
        
      </>
      </div>
    );
  };

};









// function App() {
//   return (
//     <div>
//     <Welcome /> 
//     </div>
//   );
// }

export default App;
