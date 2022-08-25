import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import ProfileBody from './profile/profile-body';
import { SmlBodyProps } from '../../types';

function HomeBody() {
  const handleClick = (e: any) => {
    e.preventDefault();

    toast('Still under development! Kindly check back tomorrow :)');
  };
  return (
    <div className="sml-home-body-container">
      <Toaster />
      <p className="app-for-designers">
        This App is designed for{' '}
        <b>
          <u>creators</u>
        </b>{' '}
        , not for businesses.
      </p>

      <div className="sml-landing-flex">
        <div className="sml-landing-img-container">
          <Image
            alt="Oga show love gif"
            src="/sml/twale.gif"
            width={315}
            height={160}
          />
        </div>

        <div className="sml-landing-caption">
          <p className="show-love-text">
            <b>Oga show love na!</b>
          </p>
          <p>
            support the{' '}
            <span style={{ color: '#69AF85', fontWeight: '600' }}>
              nigerian
            </span>{' '}
            way
          </p>
        </div>
      </div>

      <p className="accept-donations-landing">
        Accept donations. Start a membership. Sell anything you like. It’s
        easier than you think.
      </p>

      <div className="smp-input-container">
        <div className="sml-startpage-input-container">
          <span>
            Show<b>Me</b>Love / &nbsp;
          </span>
          <input placeholder="username" className="startpage-input"></input>
        </div>
        <button className="startpage-btn" onClick={handleClick}>
          Start My Page
        </button>
      </div>
    </div>
  );
}

export default function Body({ index }: SmlBodyProps) {
  return index ? <HomeBody /> : <ProfileBody />;
}
