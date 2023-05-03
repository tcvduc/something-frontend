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
   * @param {String} px
   */
  function convertPixelToNumber(px) {
    /**
     * + px: 12px
     * + result: 12
     *
     */
    let number = 0;

    for (let i = 0; i <= px.length - 1 - 1 - 1; ++i) {
      const pxi = +px[i];
      number = number * 10 + pxi;
    }

    return number;
  }

  /**
   *
   * @param {HTMLElement} element
   */
  function enableDragElement(element) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    element.onmousedown =
      /**
       *
       * @param {MouseEvent} event
       */
      function (event) {
        const { pageX, pageY } = event;
        x1 = pageX;
        y1 = pageY;

        window.onmousemove =
          /**
           *
           * @param {MouseEvent} event
           */
          function (event) {
            const { pageX, pageY } = event;
            x2 = pageX;
            y2 = pageY;

            const deltaX = x2 - x1;
            x1 = x2;

            const deltaY = y2 - y1;
            y1 = y2;

            const leftValue = convertPixelToNumber(element.style.left);
            const topValue = convertPixelToNumber(element.style.top);

            element.style.left = `${leftValue + deltaX}px`;
            element.style.top = `${topValue + deltaY}px`;
          };
      };

    window.onmouseup = function () {
      window.onmousemove = null;
    };
  }

  /**
   *
   * @param {HTMLElement} layer
   * @param {Array} squares
   *
   */
  function applySquareElementsToUI(layer, squares) {
    squares.forEach((element) => {
      enableDragElement(element);
      layer.appendChild(element);
    });
  }

  function main() {
    const n = 12;
    const squares = generateSquareElement(n);
    const layer = window.document.getElementsByClassName(classes.layer)[0];
    applySquareElementsToUI(layer, squares);
  }

  main();
})();
