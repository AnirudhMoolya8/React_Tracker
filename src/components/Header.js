import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {  //de-structuring --> taking only the prope that are assigned to title

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'darkorange'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header >
    )
}

Header.defaultProps = {     //Basically sends a deafualt text to the DOM in case there isn't any props
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Use this and style={headingStyle} to style in-line
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header