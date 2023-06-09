import StepFragment from "./StepFragment";
import { IStep } from "./types";

const Step: React.FC<IStep> = ({
  title,
  description,
  links = [],
  codingSteps,
  expectedResults,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {links.length > 0 && (
        <>
          <h3>Links</h3>
          {links.map(({ description, url }) => (
            <a href={url}>{description}</a>
          ))}
        </>
      )}
      <h3>Coding Steps</h3>
      {codingSteps.map((step) => (
        <StepFragment {...step} />
      ))}
      <h3>Expected Results</h3>
      {expectedResults.map((result) => (
        <StepFragment {...result} />
      ))}
    </div>
  );
};

export default Step;
