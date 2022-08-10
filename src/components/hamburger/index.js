import { Component } from "react";
import { connect } from "react-redux";
import {
  addBread,
  removeBread,
  addMeat,
  removeMeat,
  addCheese,
  removeCheese,
  addSalad,
  removeSalad,
} from "../../redux/hamburger/action";

class Hamburger extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="text-6xl font-bold mb-8">Hamburger !</h1>

          <div class="w-1/4 justify-center mb-10">
            {this.props.bread && (
              <div className="bread w-full bg-yellow-600 p-12  rounded-b-lg rounded-t-full"></div>
            )}

            {this.props.cheese && (
              <div className="bread w-full bg-yellow-300 p-3 rounded"></div>
            )}

            {this.props.salad && (
              <div className="bread w-full bg-green-800 p-3 rounded"></div>
            )}

            {this.props.meat && (
              <div className="bread w-full bg-red-800 p-4 rounded"></div>
            )}

            {this.props.bread && (
              <div className="bread w-full bg-yellow-600 p-8 rounded-b-2xl rounded-t-md"></div>
            )}
          </div>

          {/* create flex */}
          <div class="flex">
            <div class="w-1/2 mx-2">Bread</div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.addBread()}
              >
                Add
              </button>
            </div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.removeBread()}
              >
                Remove
              </button>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 mx-2">Meat</div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.addMeat()}
              >
                Add
              </button>
            </div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.removeMeat()}
              >
                Remove
              </button>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 mx-2">Cheese</div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.addCheese()}
              >
                Add
              </button>
            </div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.removeCheese()}
              >
                Remove
              </button>
            </div>
          </div>

          <div class="flex">
            <div class="w-1/2 mx-2">Salad</div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.addSalad()}
              >
                Add
              </button>
            </div>
            <div class="w-1/2 mx-2">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => this.props.removeSalad()}
              >
                Remove
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bread: state.bread,
    meat: state.meat,
    cheese: state.cheese,
    salad: state.salad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBread: () => dispatch(addBread()),
    removeBread: () => dispatch(removeBread()),
    addMeat: () => dispatch(addMeat()),
    removeMeat: () => dispatch(removeMeat()),
    addCheese: () => dispatch(addCheese()),
    removeCheese: () => dispatch(removeCheese()),
    addSalad: () => dispatch(addSalad()),
    removeSalad: () => dispatch(removeSalad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
