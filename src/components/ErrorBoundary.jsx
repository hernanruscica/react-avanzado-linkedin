// ErrorBoundary.js
import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {error: false};
  }
  static getDerivedStateFromError(error) {
    return {error: true};
  }

  render() {
    if (this.state.error){
      return (
        <span>ERROR</span>
      )
    }else{
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
