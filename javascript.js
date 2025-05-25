// Get User Input as to how many grids the user wants
let userInputRow;
let userInputColumn;
let userInputColor;
let gridArea = document.querySelector(".grid");

function getUserInput() {
  //Get User Input
  userInputRow = Number(document.querySelector(".row").value);
  userInputColumn = Number(document.querySelector(".column").value);
  userInputColor = document.querySelector(".color").value;

  // Clear User Input Field
  document.querySelector(".row").value = "";
  document.querySelector(".column").value = "";
  document.querySelector(".color").value = "";

  //Validate User Date
  if (
    isNaN(userInputRow) ||
    isNaN(userInputColumn) ||
    userInputRow <= 0 ||
    userInputColumn <= 0
  ) {
    alert("Please enter a valid number of rows and columns");
    return;
  }
  //Calculate cell Dimensions
  const containerWidth = 20 * 16;
  const containerHeight = 25 * 16;
  const cellWidth = containerWidth / userInputColumn;
  const cellHeight = containerHeight / userInputRow;

  // Clear existing grid
  gridArea.innerHTML = "";

  // Set CSS variables for sizing
  //   gridArea.style.setProperty("--rows", rows);
  //   gridArea.style.setProperty("--columns", columns);

  //

  //Create gridrows
  if (userInputColumn <= 100 && userInputRow <= 100) {
    for (let row = 0; row < userInputRow; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.style.display = `flex`;
      rowDiv.style.width = "100%";
      rowDiv.style.height = `${100 / userInputRow}%`;

      //Create columns for this row

      for (let col = 0; col < userInputColumn; col++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("newDivs");
        colDiv.style.width = `${100 / userInputColumn}%`;
        colDiv.style.height = "100%";
        colDiv.style.flexShrink = "0";

        // Add hovering effects
        colDiv.addEventListener("mouseover", () => {
          colDiv.style.backgroundColor = userInputColor || "black"; // Default to black if no color provided
        });
        rowDiv.appendChild(colDiv);
      }
      gridArea.appendChild(rowDiv);
    }
  } else {
    alert("Row or column must not excced 100");
  }
}

let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  let cells = document.querySelectorAll(".newDivs");
  cells.forEach((cell) => {
    cell.remove();
  });
});

function setRandomColors() {
  let cells = document.querySelectorAll(".newDivs");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      // Generate random colors
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Apply random colors
      this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}

//Dynamically set the color to the user's preference so that when the div is being hovered on it changes to the set color
