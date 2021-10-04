import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent, addList } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent, addList }) => {
	const onDelete = () => {
		deleteLog(log._id);
		M.toast({ html: 'Log Deleted' });
	};
	return (
		<>
			<li className='collection-item'>
				<div className='searchAdd'>
					<span className='grey-text'>
						<span className='black-text'>{log.name}</span>
					</span>
					<button onClick={() => addList(log)}>ADD</button>
				</div>
			</li>
		</>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
	addList: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent, addList })(LogItem);
