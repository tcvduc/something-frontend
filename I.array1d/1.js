(() => {
  const classes = {
    square: "square",
    layer: "layer",
  };

  function createSquareElement() {
    const element = window.document.createElement("div");
    element.classList.add(classes.square);
    return element;
  }

  /**
   *
   * @param {Number} n
   */
  function generateSquareElement(n) {
    const result = [];

    for (let i = 1; i <= n; ++i) {
      const element = createSquareElement();
      result.push(element);
    }

    return result;
  }

  /**
   *
   * @param {HTMLElement} layer
   * @param {Array} squares
   *
   */
  function applySquareElementsToUI(layer, squares) {
    squares.forEach((element) => {
      layer.appendChild(element);
    });
  }

  function main() {
    const n = 10;
    const squares = generateSquareElement(n);
    const layer = window.document.getElementsByClassName(classes.layer)[0];
    applySquareElementsToUI(layer, squares);
  }

  main();
})();
