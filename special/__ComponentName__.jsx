import React, { Component } from 'react';
/* IF mobx */
import { observable, computed, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
import http from 'common/http';
/* ENDIF */
import PropTypes from 'common/PropTypes';
import utils from 'common/utils';
import styles from './__ComponentName__.less';

const PREFIX = '__ComponentName__';
const cx = utils.classnames(PREFIX, styles);

/* IF !class */
const __ComponentName__ = () => (
  <div>
    __ComponentName__
  </div>
);

__ComponentName__.propTypes = {

};
/* ENDIF *//* IF mobx*/
class __ComponentName__Model {

}

@observer
/* ENDIF */
class __ComponentName__ extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }
/* IF mobx*/

  constructor() {
    super();
    this.model = new __ComponentName__Model();
  }

/* ENDIF */
  render() {
    return (
      <div className={cx('container')}>
        __ComponentName__
      </div>
    );
  }
}

export default __ComponentName__;
