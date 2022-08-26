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
              backgroundPosition: 'center',
              width: '500px',
            }}
          ></div>

          <div className="tw-p-2 lg:tw-p-10 lg:tw-flex-initial lg:tw-w-[900px] tw-h-[600px] tw-pb-[200px] lg:tw-h-full tw-overflow-auto">
            <h3 className="tw-font-bold tw-text-2xl">Summary</h3>
            <div className="">
              <p>Full-stack developer II</p>
              <p>
                <u>Mistho GMBH</u>
              </p>
              <p>June 2021 - December 2021</p>
              <p>7 months</p>
              <hr />
              <p>
                Worked alongside 2 principal Engineers I reported to where I
                engineered a scraper service using node to collect user’s
                payroll data from payroll provider’s website, structuring,
                persisting user’s salary data and making it available to be
                consumed via a rest json api
              </p>
              <h3>Summary</h3>
              <div className="tw-w-full">
                <Screenshots />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
