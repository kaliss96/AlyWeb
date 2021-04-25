import React, { Fragment,useState } from 'react'
import { HiUpload } from 'react-icons/hi';
import DataTable from '../DataTable/DataTableWithdrawal.jsx';
import Pagination from "../Transactions/Pagination";

const WithdrawalPages = () => {

    const titles = ['', '#', 'Descripción', 'Hash', 'Hora', 'Fecha', 'Monto'];
    const request = 
        [
            {
                id: 1,
                hashtag: '01',
                descripcion: 'Transaccion 1',
                hash: '633077a9420809449a89c7fbe1f798fd1b50bedf',
                horas: '04:47 PM',
                fecha: '01/01/2020',
                monto: '0.000032552 BTC'
        
            },
            {
                id: 2,
                hashtag: '02',
                descripcion: 'Transaccion 2',
                hash: '633077a9420809449a89cgjg8e8fd1gdr546df',
                horas: '02:43 PM',
                fecha: '02/01/2020',
                monto: '0.000034752 BTC'
        
            }
			//DTETSET
			,
            {
                id: 3,
                hashtag: '03',
                descripcion: 'Transaccion 3',
                hash: '63307enf8942080rhgf79k7fbe1f798fd1b50bedf',
                horas: '08:53 PM',
                fecha: '03/01/2020',
                monto: '0.000033552 BTC'
            },
            {
                id: 4,
                hashtag: '03',
                descripcion: 'Transaccion 3',
                hash: '63307enf8942080rhgf79k7fbe1f798fd1b50bedf',
                horas: '08:53 PM',
                fecha: '03/01/2020',
                monto: '0.000033552 BTC'
            },
            {
                id: 5,
                hashtag: '04',
                descripcion: 'Transaccion 4',
                hash: '63307egfgg9034,nhgf79k7fbe1ffhfjkjfdf7562',
                horas: '07:14 PM',
                fecha: '04/01/2020',
                monto: '0.000033555 BTC'
            },
            {
                id: 6,
                hashtag: '06',
                descripcion: 'Transaccion 6',
                hash: 'hf70kjd344208fdjgkk7ldflf98fd1b54859ngit84o',
                horas: '09:29 PM',
                fecha: '06/01/2020',
                monto: '0.000033556 BTC'
            },
            {
                id: 7,
                hashtag: '07',
                descripcion: 'Transaccion 7',
                hash: '74lfjf803mffse42f79jmvn83fncaslsld90dvctw7',
                horas: '02:04 PM',
                fecha: '07/01/2020',
                monto: '0.000033557 BTC'
            },
            {
                id: 8,
                hashtag: '08',
                descripcion: 'Transaccion 8',
                hash: '75mdng93404080rhgf79k7fhff93jfhf63mdbfh935',
                horas: '04:37 PM',
                fecha: '08/01/2020',
                monto: '0.000033558 BTC'
            },
            {
                id: 9,
                hashtag: '09',
                descripcion: 'Transaccion 9',
                hash: '74hfk864mf080rhgf79k7fbe1f798fmgkg84ig80',
                horas: '05:55 PM',
                fecha: '09/01/2020',
                monto: '0.000033559 BTC'
            },
            {
                id: 10,
                hashtag: '10',
                descripcion: 'Transaccion 10',
                hash: 'kfh8553mfnf7942hcjdugf79k7fbe1fjff836gj',
                horas: '01:06 PM',
                fecha: '10/01/2020',
                monto: '0.000033560 BTC'
            },
            {
                id: 11,
                hashtag: '11',
                descripcion: 'Transaccion 11',
                hash: 'fkfk,vc8o3942hcjdugf79k7fbe1fjhf7f8k',
                horas: '05:05 AM',
                fecha: '11/01/2020',
                monto: '0.000033561 BTC'
            },
            {
                id: 12,
                hashtag: '12',
                descripcion: 'Transaccion 12',
                hash: 'dc8md9f7942hcjfgf79k7fbe1fjffonf79j',
                horas: '11:16 PM',
                fecha: '12/01/2020',
                monto: '0.000033562 BTC'
            },
            {
                id: 13,
                hashtag: '13',
                descripcion: 'Transaccion 13',
                hash: 'jfirfjfi794mkrf7942hcjdugf79k7hfjfmm8',
                horas: '07:49 PM',
                fecha: '13/01/2020',
                monto: '0.000033563 BTC'
            },
            {
                id: 14,
                hashtag: '14',
                descripcion: 'Transaccion 14',
                hash: 'mfmf93lc57hcjdugf79k7fbe1fjmg83mngfstr8',
                horas: '06:16 AM',
                fecha: '14/01/2020',
                monto: '0.000033564 BTC'
            },
            {
                id: 15,
                hashtag: '15',
                descripcion: 'Transaccion 15',
                hash: 'fjfmuel5jdugf79k7fbe1fjfmee8imrjffue',
                horas: '01:06 PM',
                fecha: '10/01/2020',
                monto: '0.000033560 BTC'
            }
        ]
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const rows = request.map(transaction => {
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