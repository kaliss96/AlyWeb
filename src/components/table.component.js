import TableRow from "../components/tableRow.component";
import React, { Fragment } from "react";
import CustomLabel from "./label.component";

const TableComponent = () => {
 const inputRef = React.useRef(null)
    const request = () => (
    [
        {
            id: 1,
            descripcion: 'Transaccion 1',
            hash: 'dsd5sd7s5d7',
            hora: '04:47 PM',
            fecha: '08/04/2020',
            monto: '0.00032545'
    
        },
        {
            id: 1,
            descripcion: 'Transaccion 1',
            hash: 'dsd5sd7s5d7',
            hora: '04:47 PM',
            fecha: '08/04/2020',
            monto: '0.00032545'
    
        },
        {
            id: 1,
            descripcion: 'Transaccion 1',
            hash: 'dsd5sd7s5d7',
            hora: '04:47 PM',
            fecha: '08/04/2020',
            monto: '0.00032545'
        }
    ])

  return (
    <Fragment>
      <div className="container">
        <table className="table">
          <thead>
            <tr >
              <th scope="col">#</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Hash</th>
              <th scope="col">Hora</th>
              <th scope="col">Fecha</th>
              <th scope="col">Monto</th>
            </tr>
          </thead>
          <tbody>
            <TableRow data={request()} />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TableComponent;
