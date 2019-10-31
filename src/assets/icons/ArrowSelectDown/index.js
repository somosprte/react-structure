import React from 'react';

import { colors } from 'assets/styles';

function ArrowSelectDown(props) {
  const { color } = props;

  return (
    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.22314 0.763707C1.34638 0.633213 1.5462 0.633213 1.66944 0.763707L5.72314 5.05585C5.84638 5.18635 5.84638 5.39792 5.72314 5.52841C5.59989 5.6589 5.40007 5.6589 5.27683 5.52841L1.22314 1.23627C1.09989 1.10577 1.09989 0.8942 1.22314 0.763707Z"
        fill={color ? color : colors.darkGray}
        stroke={colors.black}
        strokeWidth="0.3"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.77686 0.763707C9.65362 0.633213 9.4538 0.633213 9.33056 0.763707L5.27686 5.05585C5.15362 5.18635 5.15362 5.39792 5.27686 5.52841C5.40011 5.6589 5.59993 5.6589 5.72317 5.52841L9.77686 1.23627C9.90011 1.10577 9.90011 0.8942 9.77686 0.763707Z"
        fill={color ? color : colors.darkGray}
        stroke={colors.black}
        strokeWidth="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ArrowSelectDown;
