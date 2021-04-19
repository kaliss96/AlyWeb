import React, { Fragment, useEffect, useState } from 'react'

const TableRow = ({data}) =>{

    const [dataRow, setData] = useState([])
 const inputRef = React.useRef(null)
 
const fetchDetails = (e) => {
	console.log("test event vamos a levantar modal");
 inputRef.current.click()
	 
	}

	const Hover = (e) => {
	console.log("test Hover");
 
	}
	
	
    useEffect(()=>{

        const rows = data.length > 0 ? data.map(row => {
            console.log(row)
            return ( 
            <tr key={row.id} onClick={fetchDetails} onMouseMove={Hover} >
                <td scope="row" >{row.id}</td>
                <td>{row.descripcion}</td>
                <td>{row.hash}</td>
                <td>{row.hora}</td>
                <td>{row.fecha}</td>
                <td>{row.monto}</td>
            </tr>
            ) 
        }) : []

        setData(rows)
    },[data])

    return(
	
        <Fragment>
		 <a className="linka" ref={inputRef} href="#miModalTran">Abrir Modal</a>
            { dataRow.length > 0 ? dataRow: null}
        </Fragment>
    )
}

export default TableRow;