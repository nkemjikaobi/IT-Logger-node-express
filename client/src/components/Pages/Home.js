import React from 'react'
import AddBtn from '../layouts/AddBtn';
import Searchbar from '../layouts/Searchbar';
import AddLogModal from '../logs/AddLogModal';
import EditLogModal from '../logs/EditLogModal';
import Logs from '../logs/Logs';
import Table from '../Table';
import AddTechModal from '../techs/AddTechModal';
import TechListModal from '../techs/TechListModal';

const Home = () => {
    return (
			<div>
				<Searchbar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
					<Table />
				</div>
			</div>
		);
}

export default Home
