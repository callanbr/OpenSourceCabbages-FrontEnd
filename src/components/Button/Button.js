import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';

const Button = React.forwardRef((props, ref) => {
   const { children, color, size, circle } = props;

   const btnClasses = classnames({
      [color]: color,
      [size]: size,
      circle: circle,
   });

   return (
      <button className={btnClasses} ref={ref}>
         {children}
      </button>
   );
});

Button.propTypes = {
   children: PropTypes.node,
   color: PropTypes.oneOf(['dark', 'light']),
   size: PropTypes.oneOf(['sm', 'lg']),
   circle: PropTypes.bool,
};

export default Button;