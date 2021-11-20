import './App.css';
import Member from './Member.js';
import MemberList from './Member/MemberList.js';

function App() {
  // Load members from json file
  const memberData = require('./Members.json');
  // Create member objects from raw JSON
  const members = memberData.map((object) => {
    return new Member(object);
  });

  return (
    <div className="App">
      <MemberList members={members}/>
    </div>
  );
}

export default App;
