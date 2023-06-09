import Step from "./Step";
import { ITutorial } from "./types";
import useTutorial from "./useTutorial";

const Tutorial: React.FC<ITutorial> = ({ title, description, steps }) => {
  const { currentStep, nextStep, previousStep } = useTutorial(steps);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <Step {...currentStep} />

      <button className="btn btn-primary" onClick={previousStep}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default Tutorial;
