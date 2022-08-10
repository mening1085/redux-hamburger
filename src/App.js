import "./App.css";
import Hamburger from "./components/hamburger";

const mapStateToProps = state => {
  return {
    bread: state.bread,
    meat: state.meat,
    cheese: state.cheese,
  };
}

function App() {
  return (
    <div className="App">
      <Hamburger />
    </div>
  );
}

export default App;
