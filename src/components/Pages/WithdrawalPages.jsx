import React, { Fragment,useState } from 'react'
import { HiUpload } from 'react-icons/hi';
import DataTable from '../DataTable/DataTableWithdrawal.jsx';
import Pagination from "../Transactions/Pagination";
import transactions from '../../data/transactions.utils'

const WithdrawalPages = () => {

    const titles = ['', '#', 'Descripción', 'Hash', 'Hora', 'Fecha', 'Monto'];
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const rows = transactions.map(transaction => {
        return {
            "id": <div style={{display: 'none'}}>{transaction.id}</div>,
            "hashtag": transaction.hashtag,
            "descripcion": transaction.descripcion,
            "hash": transaction.hash,
            "horas": transaction.horas,
            "fecha": transaction.fecha,
            "monto": <div style={{color: 'red'}}><i><HiUpload /></i>{transaction.monto}</div>
        }
    })
    console.log(rows)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentTrans = rows.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    return (
        <Fragment>
            <DataTable numerable={false} rows={currentTrans} titles={titles}/>
		<Pagination
            postsPerPage={postsPerPage}
            totalPosts={rows.length}
            paginate={paginate}
        />
        </Fragment>
    )
}

export default WithdrawalPages;