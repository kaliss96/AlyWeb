import React, { Fragment,useState } from 'react'
import DataTable from '../DataTable/DataTableTrade.jsx';
import Pagination from "../Transactions/Pagination";

const ExecutivePages = () => {

    const titles = ['', 'Comercio','Comisión', 'Ganancias'];
    const request = 
        [
            {
                id: 1,
                comercio: 'Mi Tiendita',
                comision: '0.01',
                ganancias: '0 USDT'
        
            },
            {
                id: 2,
                comercio: 'Mi Tiendita2',
                comision: '0.02',
                ganancias: '0 USDT2'
        
            }
			//DTETSET
			,
            {
                id: 3,
                comercio: 'Mi Tiendita3',
                comision: '0.03',
                ganancias: '0 USDT3'
            },
            {
                id: 4,
                comercio: 'Mi Tiendita4',
                comision: '0.04',
                ganancias: '0 USDT4'
            },
            {
                id: 5,
                comercio: 'Mi Tiendita5',
                comision: '0.05',
                ganancias: '0 USDT5'
            },
            {
                id: 6,
                descripcion: 'Transaccion 6',
                comercio: 'Mi Tiendita6',
                comision: '0.06',
                ganancias: '0 USDT6'
            },
            {
                id: 7,
                comercio: 'Mi Tiendita7',
                comision: '0.07',
                ganancias: '0 USDT7'
            },
            {
                id: 8,
                comercio: 'Mi Tiendita8',
                comision: '0.08',
                ganancias: '0 USDT8'
            },
            {
                id: 9,
                comercio: 'Mi Tiendita9',
                comision: '0.09',
                ganancias: '0 USDT9'
            },
            {
                id: 10,
                comercio: 'Mi Tiendita10',
                comision: '0.010',
                ganancias: '0 USDT10'
            },
            {
                id: 11,
                comercio: 'Mi Tiendita11',
                comision: '0.11',
                ganancias: '0 USDT11'
            },
            {
                id: 12,
                comercio: 'Mi Tiendita12',
                comision: '0.12',
                ganancias: '0 USDT12'
            },
            {
                id: 13,
                descripcion: 'Transaccion 13',
                comercio: 'Mi Tiendita13',
                comision: '0.13',
                ganancias: '0 USDT13'
            },
            {
                id: 14,
                comercio: 'Mi Tiendita14',
                comision: '0.14',
                ganancias: '0 USDT14'
            },
            {
                id: 15,
                comercio: 'Mi Tiendita15',
                comision: '0.15',
                ganancias: '0 USDT15'
            }
        ]
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const rows = request.map(transaction => {
        return {
            "id": <div style={{display: 'none'}}>{transaction.id}</div>,
            "comercio": transaction.comercio,
            "comision": transaction.comision,
            "ganancias": transaction.ganancias
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

export default ExecutivePages;