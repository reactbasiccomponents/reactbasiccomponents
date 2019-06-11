import React from 'react';
import MultilineSelect from './components/multilineSelect';
import './App.css';
import EditableTextPanel from './components/editableTextArea'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      courses:['Course 1','Course 2','Course 3','Course 4','Java','C#']
     }
  }
  render() { 
    const courses=[{
      id:1,
      label:'Course One'
    },
    {
      id:2,
      label:'Course Two'
    },
    {
      id:3,
      label:'Course Three'
    }
  ];
    return (<div>
      <MultilineSelect defaultOptions={courses}/>
      <EditableTextPanel text='salkjd asdlkj asdlkkjas aslkdkj aslkdjsa asdjsj s ' />
    </div>  );
  }
}
 
export default App;