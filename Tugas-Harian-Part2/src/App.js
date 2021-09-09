import './style.css';
import logo from './logo.png';

function App(props) {
  return (
    <div class="container">
      <img src={logo} alt="logo"/>
      <h1>{props.title}</h1>
      <h3>During Bootcamp in JabarCodingCamp</h3>
      <hr></hr>
      <div class="checkbox-area">
        <label class="checkbox-label"><span class="todo"> {props.todo[0]} </span>
        <input type="checkbox"/>
        <span class="checkmark"></span>
      </label>
      <hr class="light"></hr>
      <label class="checkbox-label"> <span class="todo"> {props.todo[1]}  </span>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <hr class="light"></hr>
      <label class="checkbox-label"> <span class="todo"> {props.todo[2]}  </span>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <hr class="light"></hr>
      <label class="checkbox-label"> <span class="todo"> {props.todo[3]}  </span>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <hr class="light"></hr>
      <label class="checkbox-label"> <span class="todo"> {props.todo[4]}  </span>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <hr class="light"></hr>
      </div>
      <div class="button" >
          <h4>Send</h4>
      </div>
      
    </div>
  );
}



export default App;
