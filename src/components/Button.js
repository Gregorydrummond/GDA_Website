import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {
    return (
        <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Add Task',
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
