import './App.css';
import MemberList from './Member/MemberList.js';

function App() {
  // Load members from json file
  const members = require('./Members.json');
  // Create date objects from date strings
  members.forEach((member) => {
    member.dateOfBirth = new Date(member.dateOfBirth);
  });

  return (
    <div className="App">
      <MemberList members={members}/>
    </div>
  );
}

export default App;
