import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* IF mobx */
import { observable, computed, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
import http from 'core/http';
/* ENDIF */
import utils from 'core/utils';
import styles from './__ComponentName__.scss';

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
