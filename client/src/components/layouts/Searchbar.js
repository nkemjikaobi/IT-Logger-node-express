import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { searchLogs, clearLogs } from '../../actions/logActions'

const Searchbar = ({ searchLogs, clearLogs, log: { filtered } }) => {

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !== ''){
            searchLogs(text.current.value);
        }
        else{
            clearLogs();
        }
        
    }

    return (
        <nav style={{ marginBottom: '30px'}} className='blue'>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search Logs' ref={text} onChange={onChange} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons" onClick={clearLogs}>close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

Searchbar.propTypes = {
    searchLogs: PropTypes.func.isRequired,
    clearLogs: PropTypes.func.isRequired,
    log: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { searchLogs, clearLogs })(Searchbar)
