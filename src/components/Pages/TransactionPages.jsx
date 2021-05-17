import React, { Fragment,useState } from 'react'
import DataTable from '../DataTable/DataTable.jsx';
import Pagination from "../Transactions/Pagination";
import { HiUpload } from "react-icons/hi";
import {format} from 'date-fns'
import { connect } from 'react-redux';

const TransactionPages = ({statecomp,searchtext, history_fr, ...props}) => {
    
    const titles = ['#', 'Descripcion', 'Hash', 'Hora', 'Fecha', 'Monto'];
	
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const rows = history_fr !== null && history_fr !== undefined ? history_fr.filter(item => item.hash.includes(searchtext)).map(item => {
        return {
            "id": item.id,
            "descripcion": item.description,
            "hash": <p style={{textOverflow: 'ellipsis', whiteSpace: 'break-spaces', overflow: 'hidden', whiteSpace: 'nowrap', width: '200px', color: 'yellow'}}>{item.hash}</p>,
            "hora": format(new Date(item.date_create),'hh:mm:ss a'),
            "fecha": format(new Date(item.date_create),'dd/MM/yyyy'),
            "monto": <div style={{color: 'red'}}><i><HiUpload /></i>{item.amount}</div>
        }
    }): []

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentTrans = rows.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    return (
        <Fragment>
            <DataTable  
                className={`${props.className} ${!statecomp === false?  'table-component__content2':'activater'}`}   
                numerable={true} 
                rows={currentTrans} 
                titles={titles}
            />
		<Pagination
            postsPerPage={postsPerPage}
            totalPosts={rows.length}
            paginate={paginate}
        />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    statecomp: state.wallets.statecomp,
    history_fr: state.wallets.history,
    searchtext: state.wallets.searchtext
});
export default connect(mapStateToProps)(TransactionPages);