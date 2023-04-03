import Counter from '../Counter/Counter';
import ExampleEvent from '../ExampleEvent/ExampleEvent';
import ListUsers from '../ListUsers/ListUsers';
import TwoLists from '../TwoLists/TwoLists';
import './App.css';

const list = ['Alex', 'John', 'Robert', 'Max', 'Pitter', 'Jack', 'Bill', 'Will', 'Sam', 'Luis'];
const users = ['Name'];
function App() {

  return (
    <div>
      <h1 className='heading'>Hello, world</h1>
      <hr />
      <Counter/>
      <hr />
      <ListUsers list={list} />
      <hr />
      <TwoLists firstList={list} secondList={users} />
      <hr />
      <ExampleEvent />
    </div>
  );
}

export default App;