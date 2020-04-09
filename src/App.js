import React, { Component } from 'react';
import Customer from './components/customer';
import './App.css';


const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'gildong hong',
  'birthday':'7307231',
  'gender': 'male',
  'job':'student'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/any',
  'name':'jungho park',
  'birthday':'7007231',
  'gender': 'male',
  'job':'student'
}
,
{
  'id':3,
  'image': 'https://placeimg.com/64/64/any',
  'name':'siyun park',
  'birthday':'7207231',
  'gender': 'male',
  'job':'student'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )

          })
        }

        </div>
    );
  }
}

export default App;
