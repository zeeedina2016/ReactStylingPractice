import React from "react";
import ReactDOM from "react-dom";

const today = new Date(2019, 12, 12, 8);
const time = today.getHours();

const styles = {
  color: " "
};

let greeting;

if (time < 12) {
  greeting = "Good Morning";
  styles.color = "blue";
} else if (time < 18) {
  greeting = "Good Afternoon";
  styles.color = "green";
} else {
  greeting = "Good Night";
  styles.color = "red";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={styles}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
