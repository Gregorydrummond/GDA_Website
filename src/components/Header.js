import PropTypes from 'prop-types'
import '../css/Header.css'
import Button from './Button'

const Header = ({name, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{name}'s Task Tracker</h1>
            <Button 
                text={showAdd ? 'Close' : 'Add'}
                color={showAdd ? 'red': 'blue'}
                onClick={onAdd}/>
        </header>
    )
}

Header.propTypes = {
    name: PropTypes.string.isRequired
}

Header.defaultProps = {
    name: 'Greg'
}

export default Header
