import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import LogItem from './LogItem'
import PreLoader from '../layouts/PreLoader';
import PropTypes from 'prop-types'
import { getLogs, clearLogs, searchLogs } from '../../actions/logActions'


const Logs = ({ log: { logs, loading ,list, filtered }, getLogs, searchLogs}) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    if(loading || logs === null){
        return <PreLoader />
    }
    if(!loading && logs.length === 0 ){
        return <p className='center'>No logs to show...</p>
    }
    if (list !== null) {
        console.log("list is busy");
    }
    // if(logs !== null && filtered === null ){
    //     return <p className='center'>No logs from search</p>
    // }
    // if(filtered === null){
    //     return <p className='center'>No logs from search</p>
    // }
    return (
        <ul className='collection with-header searchContainer'>
            <li className="collection-header">
                <h4 className="center">Search Results</h4>
            </li>
                {filtered !== null
                 ? filtered.map(log =>
                    <LogItem key={log._id} log={log}/>)
                : <div>No result</div>
                }
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
    clearLogs: PropTypes.func.isRequired,
    searchLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs, clearLogs, searchLogs})(Logs);
