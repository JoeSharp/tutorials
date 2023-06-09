import { ITutorial } from "../Tutorial/types";

const InteractiveSimulation: ITutorial = {
  title: "A Simple Interactive Simulation",
  description: `You will build a program that uses common concepts in game design. 
    Setting initial state, drawing frames, animation and event driven programming.`,
  steps: [
    {
      title: "Access Development Environment",
      description: `To write programs you require an environment,
    for this tutorial you will use p5.js`,
      links: [
        { url: "https://editor.p5js.org/", description: "P5 JS Web Editor" },
      ],
      codingSteps: [],
      expectedResults: [],
    },
    {
      title: "Draw a Circle",
      description: `The p5.js library provides functions to drawing primitive shapes (as well as building more complex custom shapes). Any good language will provide documentation of all the available functions, how to call them, and with examples.
        Click on Help -> Reference to find the p5.js reference documentation.
        In this step, we will be using a couple of functions to draw a green circle.
        `,
      links: [
        {
          url: "https://p5js.org/reference/",
          description: "P5 JS Reference Documentation",
        },
      ],
      codingSteps: [],
      expectedResults: [],
    },
  ],
};

export default InteractiveSimulation;
