import React from "react";
import { IStep } from "./Tutorial/types";

interface UseTutorialApi {
  nextStep: () => void;
  previousStep: () => void;
  currentStep: IStep;
}

const useTutorial = (steps: IStep[]): UseTutorialApi => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setCurrentStepIndex(0);
  }, [steps]);

  const previousStep = React.useCallback(
    () => setCurrentStepIndex((i) => Math.max(0, i - 1)),
    []
  );

  const nextStep = React.useCallback(
    () => setCurrentStepIndex((i) => Math.min(i + 1, steps.length - 1)),
    []
  );

  return {
    previousStep,
    nextStep,
    currentStep: steps[currentStepIndex],
  };
};

export default useTutorial;
