import React, { Fragment,useState } from 'react'
import DataTable from '../DataTable/DataTable.jsx';
import Pagination from "../Transactions/Pagination";
import { HiUpload } from "react-icons/hi";

const TransactionPages = () => {
    
    const titles = ['#', 'Descripcion', 'Hash', 'Hora', 'Fecha', 'Monto'];
    const request = 
        [
            {
                id: 1,
                descripcion: 'Transaccion 1',
                hash: 'dsd5sd7sddd5d7',
                hora: '04:47 PM',
                fecha: '21/04/2021',
                monto: '5.00'
        
            },
            {
                id: 2,
                descripcion: 'Transaccion 2',
                hash: 'dsd5sd7s545',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032452'
        
            }
			//DTETSET
			,
            {
                id: 3,
                descripcion: 'Transaccion 3',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 4,
                descripcion: 'Transaccion 4',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 5,
                descripcion: 'Transaccion 5',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 6,
                descripcion: 'Transaccion 6',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 7,
                descripcion: 'Transaccion 7',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 8,
                descripcion: 'Transaccion 8',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 9,
                descripcion: 'Transaccion 9',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 10,
                descripcion: 'Transaccion 10',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 11,
                descripcion: 'Transaccion 11',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 12,
                descripcion: 'Transaccion 12',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 13,
                descripcion: 'Transaccion 13',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 14,
                descripcion: 'Transaccion 14',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 15,
                descripcion: 'Transaccion 15',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 16,
                descripcion: 'Transaccion 16',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 17,
                descripcion: 'Transaccion 17',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 18,
                descripcion: 'Transaccion 18',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 19,
                descripcion: 'Transaccion 19',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 20,
                descripcion: 'Transaccion 20',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 21,
                descripcion: 'Transaccion 21',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 22,
                descripcion: 'Transaccion 22',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 23,
                descripcion: 'Transaccion 23',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 24,
                descripcion: 'Transaccion 24',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 25,
                descripcion: 'Transaccion 25',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 26,
                descripcion: 'Transaccion 26',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 27,
                descripcion: 'Transaccion 27',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 28,
                descripcion: 'Transaccion 28',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 29,
                descripcion: 'Transaccion 29',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 30,
                descripcion: 'Transaccion 30',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 31,
                descripcion: 'Transaccion 31',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },
            {
                id: 32,
                descripcion: 'Transaccion 32',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 33,
                descripcion: 'Transaccion 33',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 34,
                descripcion: 'Transaccion 34',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 35,
                descripcion: 'Transaccion 35',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 36,
                descripcion: 'Transaccion 36',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 37,
                descripcion: 'Transaccion 37',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 38,
                descripcion: 'Transaccion 38',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 39,
                descripcion: 'Transaccion 39',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 40,
                descripcion: 'Transaccion 40',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 41,
                descripcion: 'Transaccion 41',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 42,
                descripcion: 'Transaccion 42',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 43,
                descripcion: 'Transaccion 43',
                hash: 'dsd5sd7s578',
                hora: '04:47 PM',
                fecha: '08/04/2020',
                monto: '0.00032023'
            },{
                id: 44,
                descripcion: 'Transaccion 44',
                hash: 'dsd5sd7s5ddss78',
                hora: '04:47 PM',
                fecha: '23/04/2021',
                monto: '2.63'
            }
        ]
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(10);
        const [transac, setTransac] = useState([]);

    const rows = request.map(transaction => {
       return {
           "id": transaction.id,
           "descripcion": transaction.descripcion,
           "hash": transaction.hash,
           "hora": transaction.hora,
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

export default TransactionPages;