import React from "react";
import "./login.css"
const Login=()=>{
return(
    <div class="container">
      <div class="heading">FIND A ROOM</div>
      <form action="#">
        <div class="input-details">
          <div class="input-box">
            <label for="Name">Name*</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <br />
          <div class="input-box">
            <label for="Phone">Phone*</label>
            <input type="phone" placeholder="Phone" />
          </div>
          <br />
          <div class="input-box">
            <label for="Checkin">Check-in*</label>
            <input type="date" />
          </div>
          <br />
          <div class="input-box">
            <label for="Checkout">Check-out*</label>
            <input type="date" />
          </div>
          <br />
          <div class="input-box">
            <label for="Adults">Adults*</label>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <br />
          <div class="input-box">
            <label for="Children">Children*</label>
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <br />
          <div class="checkbox">
            <input type="checkbox" />No one rejects dislikes, or avoids pleasure
            itself.
          </div>
          <br />
          <div class="btn">
            <button type="submit">BOOK ROOM</button>
          </div>
        </div>
      </form>
    </div>
)
} 
export default Login