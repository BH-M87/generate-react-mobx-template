import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* IF mobx */
import { observable, computed, action, toJS } from 'mobx';
import { observer } from 'mobx-react';
/* ENDIF */
import './__ComponentName__.scss';

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
      <div className="container">
        __ComponentName__
      </div>
    );
  }
}

export default __ComponentName__;
