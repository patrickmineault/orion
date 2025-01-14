// Useful to test plotly (ref: https://stackoverflow.com/a/62768292)
import 'jest-canvas-mock';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
// Increase test timeout to support long tests
jest.setTimeout(600000);
// Add necessary mock to test plotly (ref: https://github.com/plotly/react-plotly.js/issues/115#issuecomment-448687417)
window.URL.createObjectURL = function() {};
global.CONFIG_WAIT_FOR_LONG = { interval: 1000, timeout: 500000 };
