import { PropTypes } from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h3>Im a page component</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
