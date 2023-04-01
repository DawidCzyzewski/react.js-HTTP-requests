import { Component, PureComponent } from "react";

export class ValueIndicator extends Component {
  // I can use PureComponent in place of Component. It's almost the same, but PureComponent has shouldComponentUpdate builded in, so we don't need to use this functin in it
  // export class ValueIndicator extends PureComponent {

  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  // With this function it will be rerender just one clicked element. I can check next props by buildIn parameters:
  // In this function I can't use setState!
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("this.props in shouldComponentUpdate: ", this.props);
    // console.log("nextProps and nextState in shouldComponentUpdate: ", {
    //   nextProps,
    //   nextState,
    // });
    const oldProps = this.props;
    if (nextProps.value === oldProps.value) {
      return false;
    }

    // This function returns true or false, so create always true:
    return true;
  }

  render() {
    const { value, onClick, name } = this.props;

    // As I see till now if I click one element, stil two of them are rendering, so I will create shouldComponentUpdate
    console.log(`${name} rendered`);

    return (
      <>
        <div>Counter value: {value}</div>
        {/* <button onClick={onClick}>{name}</button> */}
        <button onClick={() => onClick(name)}>Up</button>
      </>
    );
  }
}
