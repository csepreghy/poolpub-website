import React, {Component} from 'react';
import { TEXT } from './TEXT';

class Package extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className={ 'package ' + this.props.frameClass }>
        <h2 className="package-title">{ this.props.packageLabels.title[this.props.lang] }</h2>
        <ul>
          {
            this.props.packageLabels.list[this.props.lang].map(function(item, index) {
              return <li key={ index }>{ item }</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default Package;
