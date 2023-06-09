import { IStepFragment } from "./types";

const StepFragment: React.FC<IStepFragment> = ({ description, imageUrl }) => (
  <div>
    <p>{description}</p>
    <img src={imageUrl}></img>
  </div>
);

export default StepFragment;
