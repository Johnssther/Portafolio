import Tasks from './components/tasks'
import AddTasks from './components/addtasks'
import Header from './components/header'

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <AddTasks/>
        <Tasks />
      </div>
    </>
  );
}

export default App;
