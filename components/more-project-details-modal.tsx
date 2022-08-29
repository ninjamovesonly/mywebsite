import { MoreDetailsModalProps } from '../types';
import Screenshots from './screenshots';

export default function MoreProjectDetailsModal({
  selectedData,
  closeModal,
}: MoreDetailsModalProps) {
  return (
    <>
      <div
        onClick={() => closeModal()}
        className="tw-bg-black tw-opacity-80 tw-fixed tw-inset-0 tw-w-full tw-h-full tw-cursor-pointer"
      ></div>
      <div className="tw-bg-white tw-fixed md:tw-left-10 md:tw-top-10 tw-top-16 md:tw-right-10 tw-rounded-3xl tw-shadow-md tw-overflow-auto lg:tw-overflow-clip">
        <div className="tw-block lg:tw-flex lg:tw-h-[600px]">
          <div
            className="tw-w-full lg:tw-hidden"
            style={{
              backgroundImage:
                "url('https://chineduabaloguswebsite.s3.eu-west-2.amazonaws.com/modal-mobile-bg-img.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '250px',
              margin: 'auto',
            }}
          ></div>
          <div
            className="tw-hidden lg:tw-block lg:tw-flex-initial tw-w-[500px] tw-h-full"
            style={{
              backgroundImage:
                "url('https://chineduabaloguswebsite.s3.eu-west-2.amazonaws.com/modal-desktop-bg-img.png')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '500px',
            }}
          ></div>

          <div className="tw-p-2 lg:tw-p-10 lg:tw-flex-initial lg:tw-w-[900px] tw-h-[600px] tw-pb-[200px] lg:tw-h-full tw-overflow-auto">
            <h3 className="tw-font-bold tw-text-xl tw-pb-2">Summary</h3>
            <div
              onClick={() => {
                window
                  .open(`${selectedData.route}`, '_blank', 'noopener')
                  ?.focus();
              }}
              className="tw-p-3 tw-border tw-border-slate-200 tw-rounded-xl hover:tw-bg-slate-100 tw-cursor-pointer hover:tw-shadow-lg"
            >
              <p>{selectedData.details.jobTitle}</p>
              <p>
                <u>
                  <b>{selectedData.details.companyName}</b>
                </u>
              </p>
              <p
                style={{
                  lineHeight: '0',
                  paddingTop: '10px',
                  paddingBottom: '3px',
                }}
              >
                {selectedData.details.from}
              </p>
              <small style={{ color: '#69af85', fontWeight: 'bold' }}>
                {selectedData.details.months}
              </small>
              <hr style={{ margin: '1em 0' }} />
              <p className="tw-pb-5">{selectedData.details.jobDescription}</p>
            </div>
            <h3 className="tw-font-bold tw-text-xl tw-p-2">Screenshots</h3>
            <Screenshots screenshots={selectedData.details.screenshots} />
          </div>
        </div>
      </div>
    </>
  );
}
