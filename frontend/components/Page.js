import { PropTypes } from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h3>Im a page component</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
