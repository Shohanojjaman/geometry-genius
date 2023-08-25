/**
 * This function for get value from input field.
 * @param {string} inputId - Input field id
 * @returns {number} Input value
 */
function getValueFromInput(inputId) {
  let inputValue = document.getElementById(inputId).value;
  return Number.parseFloat(inputValue);
}

/**
 * This function for set the a value to specific element.
 * @param {string} elementId - Element Id where output will show.
 * @param {number} value - The value which is result.
 */
function setValue(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

function areaCalculation(type, area) {
  let areaCalculation = document.getElementById('areaCalculation');
  const count = areaCalculation.childElementCount;
  let areaCalculationContent = document.createElement('p');
  areaCalculationContent.innerHTML = `${count}. ${type} ${area}cm<sup>2</sup>`;
  areaCalculationContent.setAttribute('class', 'area-calculation-p');
  areaCalculation.appendChild(areaCalculationContent);
}

// Calculate Triangle Area
document.getElementById('calculateTriangleArea').addEventListener('click', function () {
  const triangleBase = getValueFromInput('triangleBase');
  const triangleHeight = getValueFromInput('triangleHeight');

  //   Input validation
  if (isNaN(triangleBase) || isNaN(triangleHeight)) {
    alert('Please provide a number.');
    return;
  }

  const triangleArea = 0.5 * triangleBase * triangleHeight;

  setValue('triangleArea', triangleArea);

  // Set Value to Area Calculation
  areaCalculation('Triangle', triangleArea);
});

// Calculate Rectangle Area
document.getElementById('calculateRectangleArea').addEventListener('click', function () {
  const rectangleLength = getValueFromInput('rectangleLength');
  const rectangleWidth = getValueFromInput('rectangleWidth');

  //   Input Validation
  if (isNaN(rectangleLength) || isNaN(rectangleWidth)) {
    alert('Please provide a number.');
    return;
  }

  const rectangleArea = rectangleLength * rectangleWidth;
  setValue('rectangleArea', rectangleArea);

  areaCalculation('Rectangle', rectangleArea);
});

// Calculate Parallelogram Area
document.getElementById('calculateParallelogramArea').addEventListener('click', function () {
  const parallelogramBase = getValueFromInput('parallelogramBase');
  const parallelogramHeight = getValueFromInput('parallelogramHeight');

  //   Input validation
  if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
    alert('Please provide a number.');
    return;
  }

  const parallelogramArea = 0.5 * parallelogramBase * parallelogramHeight;
  setValue('parallelogramArea', parallelogramArea);

  areaCalculation('Parallelogram', parallelogramArea);
});

// Calculate Rhombus Area
document.getElementById('calculateRhombusArea').addEventListener('click', function () {
  const rhombusD1 = getValueFromInput('rhombusD1');
  const rhombusD2 = getValueFromInput('rhombusD2');

  //   Input validation
  if (isNaN(rhombusD1) || isNaN(rhombusD2)) {
    alert('Please provide a number.');
    return;
  }
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  setValue('rhombusArea', rhombusArea);

  areaCalculation('Rhombus', rhombusArea);
});

// Calculate Pentagon Area
document.getElementById('calculatePentagonArea').addEventListener('click', function () {
  const pentagonP = getValueFromInput('pentagonP');
  const PentagonB = getValueFromInput('pentagonB');

  //   Input validation
  if (isNaN(pentagonP) || isNaN(PentagonB)) {
    alert('Please provide a number.');
    return;
  }

  const pentagonArea = 0.5 * pentagonP * PentagonB;
  setValue('pentagonArea', pentagonArea);

  areaCalculation('Pentagon', pentagonArea);
});

// calculate Ellipse Area
document.getElementById('calculateEllipseArea').addEventListener('click', function () {
  const ellipseA = getValueFromInput('ellipseA');
  const ellipseB = getValueFromInput('ellipseB');

  // Input validation
  if (isNaN(ellipseA) || isNaN(ellipseB)) {
    alert('Please provide a number.');
    return;
  }
  const PI = Math.PI;
  const ellipseArea = (PI * ellipseA * ellipseB).toFixed(2);
  setValue('ellipseArea', ellipseArea);

  areaCalculation('Ellipse', ellipseArea);
});
