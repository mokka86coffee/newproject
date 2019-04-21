import React from 'react';
import PropTypes from 'prop-types';

export default function Confirmation ( Component ) {
    class HOC extends React.Component {

        state = {
            isVisible: true
        }
        
        handleClick = ( { target: { dataset } } ) => {
            const { val } = dataset
            this.setState({ isVisible: false, val })
            this.props[val]()
        }
        
        render () {
            const { isVisible } = this.state

            if ( !isVisible ) return <Component { ...this.props } />

            return (
                <Component { ...this.props } >
                    <div data-val='accept' onClick={ this.handleClick } className="btn btn-primary">OK</div>
                    <div  data-val='decline' onClick={ this.handleClick } className="btn btn-danger">Cancel</div>
                </Component>
            )
        }
    }

    HOC.displayName = `Confirmation(${Component.displayName || Component.name || 'Component'})`

    return HOC
}

Confirmation.propTypes = {
  accept: PropTypes.func,
  decline: PropTypes.func
}

Confirmation.defaultProps = {
  accept: () => null,
  decline: () => null
}

// Working with HOC
// Working with HOC2