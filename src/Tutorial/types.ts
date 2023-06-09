export interface IStepFragment {
  description: string;
  imageUrl: string;
}

export interface ILink {
  url: string;
  description: string;
}

export interface IStep {
  title: string;
  description: string;
  links?: ILink[];
  codingSteps: IStepFragment[];
  expectedResults: IStepFragment[];
}

export interface ITutorial {
  title: string;
  description: string;
  steps: IStep[];
}
