import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import LogItem from './LogItem'
import PreLoader from '../layouts/PreLoader';
import PropTypes from 'prop-types'
import { getLogs, clearLogs, searchLogs } from '../../actions/logActions'


const Logs = ({ log: { logs, loading , filtered }, getLogs, searchLogs}) => {

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
    // if(logs !== null && filtered === null ){
    //     return <p className='center'>No logs from search</p>
    // }
    // if(filtered === null){
    //     return <p className='center'>No logs from search</p>
    // }
    return (
        <ul className='collection with-header'>
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
                {filtered !== null
                 ? filtered.map(log =>
                    <LogItem key={log._id} log={log}/>)
                : logs.map(log =>
                    <LogItem key={log._id} log={log}/>)
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
