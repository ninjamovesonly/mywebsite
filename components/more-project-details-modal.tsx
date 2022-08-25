import { MoreDetailsModalProps } from '../types';

export default function MoreProjectDetailsModal({
  selectedData,
  closeModal,
}: MoreDetailsModalProps) {
  return (
    <>
      <div
        onClick={() => closeModal()}
        className="tw-bg-black tw-opacity-80 tw-fixed tw-inset-0 tw-w-full tw-h-full"
      ></div>
      <div className="tw-bg-white tw-fixed tw-left-10 tw-top-10 tw-right-10 tw-rounded-xl tw-p-10">
        <p>{selectedData.details.jobDescription}</p>
        <a href={selectedData.route}>
          <u>Go to project</u>
        </a>{' '}
        <br />
        <a
          onClick={() => closeModal()}
          style={{ color: 'red', cursor: 'pointer' }}
        >
          close x
        </a>
      </div>
    </>
  );
}
