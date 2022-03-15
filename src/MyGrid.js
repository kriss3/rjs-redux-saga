import React, {useState} from 'react';
import { useTable } from 'react-table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Toast, ToastContainer} from 'react-bootstrap';

const columns = [
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'DoB',
        accessor: 'dob',
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: (prop) => {
            console.log('Prop:', prop);
            return(
                <>
                    <Row>
                        <Col>
                            <Form.Control size="sm" type="text" value={prop.data[prop.i].id} placeholder="Small text" />
                        </Col>
                        <Col>
                            <Button onClick={() => prop.handleOnClick(prop.data[prop.i].firstName)}>Call It</Button>
                        </Col>
                    </Row>
                </>
            )
        }
    },
];

const data = [
    {
        id: 0,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'no@email.com',
        dob: '01-12-1978',
      },
      {
        id: 1,
        firstName: 'Mike',
        lastName: 'Ford',
        email: 'no@email.com',
        dob: '01-12-1978',
      },
      {
        id: 2,
        firstName: 'John',
        lastName: 'Smith',
        email: 'no@email.com',
        dob: '01-12-1978',
      },
      {
        id: 7,
        firstName: 'Ip',
        lastName: 'Freely',
        email: 'no@email.com',
        dob: '04-07-2000',
      },
]; 

const messages = [
    {
        title:'t1', 
        msg: 'this is msg 1',
        status: 'success'
    },
    {
        title:'t2', 
        msg: 'this is msg 2',
        status: 'fail'
    }
];

const MyGrid = () => {   
const [show, setShow] = useState(true);

const toggleShow = () => {
    setShow(!show);
};

const handleOnClick = (value) => {
    alert('Call was made with value: ' + value);
};

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = useTable({
    columns,
    data,
});

return(
    <>
    <ToastContainer className="p-3" position="top-end">
        {messages.map(m => {
            return (
                <Toast show={show} onClose={toggleShow}>
                    <Toast.Header closeButton={true} style={ m.status === 'success' ? {background: 'green'} : {background: 'red'}}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>{m.title}</small>
                    </Toast.Header>
                    <Toast.Body>{m.msg}</Toast.Body>
                </Toast>)}
        )}
    </ToastContainer>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map(hg => (
                <tr {...hg.getHeaderGroupProps()}>
                    {hg.headers.map(c => (
                        <th {...c.getHeaderProps()}>
                            {c.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((r,i) => {
                prepareRow(r);
                return(
                    <tr {...r.getRowProps()}>
                        {r.cells.map(c => {
                            return(
                                <td {...c.getCellProps()}>
                                    {c.render('Cell', {r, i, handleOnClick})}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
)};

export default MyGrid;