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
  return class extends Component {
    render() {
      return (
          <div className={className}>
            <WrappedComponent {...this.props}/>
          </div>
        )
    }
  }
}
export default wClass;
