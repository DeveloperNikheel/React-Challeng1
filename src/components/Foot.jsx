import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Foot() {
  return (
    <footer>
      <p>Copyright &#169; {year}</p>
    </footer>
  );
}

export default Foot;
