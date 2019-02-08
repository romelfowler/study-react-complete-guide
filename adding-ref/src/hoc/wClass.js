import React, {Component} from 'react';
// Stateless Component
// const wClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

// Statefull component
// Annonymous Class
const wClass = (WrappedComponent, className) => {
  const WClass = class extends Component {
    render() {
      return (
          <div className={className}>
            <WrappedComponent ref={this.props.forwardRef} {...this.props}/>
          </div>
        )
    }
  }
  return React.forwardRef((props, ref) => {
    return < WClass
        {...props }
        forwardRef={ref}
      />;
  });
}
export default wClass;
