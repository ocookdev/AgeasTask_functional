import React  from 'react';

const MemberStatusIcon = (props) => {
  let classNames = 'statusBoxIcon';
  switch(props.status) {
    case 'active':
      classNames += ' statusBoxIcon--active';
      break;
    case 'away':
      classNames += ' statusBoxIcon--away';
      break;
    case 'inactive':
      classNames += ' statusBoxIcon--inactive';
      break;
  }
  return <span className={classNames} />;
};

export default MemberStatusIcon;