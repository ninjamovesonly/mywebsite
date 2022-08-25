export * from './pomodoro-timer';
export * from './show-me-love';

export type SelectedDataType = {
  route: string;
  details: {
    jobTitle: string;
    companyName: string;
    from: string;
    to: string;
    months: string;
    jobDescription: string;
    screenshots: string[];
  };
};

export type MoreDetailsModalProps = {
  closeModal: () => void;
  selectedData: SelectedDataType;
};
