/* eslint-disable react/no-access-state-in-setstate */

import React from 'react';
import Pill from './Pills';

class CustomTextbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      selectedelements: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultOptions !== null) {
      const elements = this.props.defaultOptions.map(element => element.label);
      this.setState({ elements });
      //console.log('element in state are ', elements);
    }
  }

 
  handleSubmit(e) {
    //console.log('submit');
    // console.log(e.target)
    // let selectedelements=[...this.state.selectedelements,this.state.value]
    // this.setState({selectedelements});
    this.setState({ value: '' });
    e.preventDefault();
  }

  handleChange(e) {
    //console.log('change handler called');
    let { selectedelements } = this.state;
    let { elements } = this.state;
    let isValueAdded = false;
    if (
      elements.includes(e.target.value)
      && !selectedelements.includes(e.target.value)
    ) {
      this.setState({ value: e.target.value });
      selectedelements = [...selectedelements, e.target.value];
      //console.log('on change handler', selectedelements);
      this.setState({ selectedelements });
      isValueAdded = true;
      // e.target.value="";
      // console.log(e);
    }
    if (isValueAdded) {
      this.setState({ value: '' });
      elements = elements.filter(
        (element) => {
          return element !== e.target.value;
        }
      );
      isValueAdded = false;
      this.setState({ elements });
    } else {
      this.setState({ value: e.target.value });
    }
  }

  deleteCourse(courseName) {
    const selectedelements = this.state.selectedelements.filter(
      (selectedCourse) => {
        return selectedCourse !== courseName;
      }
    );
    const elements = [...this.state.elements, courseName];
    //console.log(selectedelements);
    this.setState({ selectedelements });
    this.setState({ elements });
  }

  render() {
    const { elements, selectedelements } = this.state;
    let options = null;
    options = elements.map((course) => {
      return (
        <option value={course}>
          {course}
        </option>
      );
    });
    const selectedelementsList = selectedelements.map((selectedCourse) => {
      //console.log('pills generated', selectedCourse);
      return <Pill data={selectedCourse} deleteCourse={this.deleteCourse} />;
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="txtbox">
              {this.props.label}
            </label>
            <div className="textbox">
              <input
                id="txtbox"
                
                placeholder={this.props.placeholder}
                autoComplete="off"
                onChange={this.handleChange}
                list="elements"
                name="elements"
                value={this.state.value}
                aria-autocomplete="list"
                describedby="basic-addon2"
              />
              <span className="glyphicon glyphicon-search" />
            </div>
          </div>
          <datalist  id="elements">
            {options}
          </datalist>
          {/* <input type="submit" value="Submit"></input> */}
        </form>
        <br />
        <div className="row">
          {selectedelementsList}
        </div>
      </div>
    );
  }
}

export default CustomTextbox;
