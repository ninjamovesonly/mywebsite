import { SmlFooterProps } from '../../types';
import ProfileFooter from './profile/profile-footer';
import WebsiteFooter from '../footer';

function HomeFooter() {
  return (
    <div className="sml-home-footer">
      <WebsiteFooter page="others" />
    </div>
  );
}

export default function Footer({ index }: SmlFooterProps) {
  return index ? <HomeFooter /> : <ProfileFooter />;
}
