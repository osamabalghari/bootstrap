import React from 'react'
import './App.css';

function App() {
  const [data, setData] = React.useState('')
  const [newData, setNewData] = React.useState('')
  console.log(data);
  return (
    <div class="container d-flex justify-content-center align-item-center flex-column mt-5">
        <div class="main d-flex justify-content-center flex-column ali ">
        <img class='img w-25' src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""/>
        <h2 class="mt-2">Sign In Page</h2>
        <p class='w-25'>Build a sign in page to display your command on bootstrap:<span>text with color red</span> psuedo element</p>
        <a href="www.google.com"  >Works in latest Chrome, Safari,and Firefox. This is a clickable section that will take use to a new page</a>
    </div>
    <div class="form">
        <form>
            <div class="form-floating mb-3 w-25 mt-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={data} onChange={(e)=>setData(e.target.value)} />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3 w-25">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={newData} onChange={(e)=>setNewData(e.target.value)}  />
                <label for="floatingPassword">Password</label>
              </div>
            <div class="mb-3 form-check w-25">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary w-25 ">Submit</button>

          </form>
    </div>
    </div>
  );
}

export default App;
