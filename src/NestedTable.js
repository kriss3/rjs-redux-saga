
import { Table, Space, Button } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

const expandedRowRender = () => {
    const columns = [
      { title: 'Broker ID', dataIndex: 'brokerId', key: 'brokerId' },
      { title: 'Contract #', dataIndex: 'contractNum', key: 'contractNum' },
      { title: 'Modified By', dataIndex: 'modBy', key: 'modBy' },      
      { title: 'Modified Date', dataIndex: 'modDate', key: 'modDate' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <DeleteTwoTone onClick={handleTerminate} />
          </Space>
        ),
      },
    ];
  
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        brokerId: '04009',
        contractNum: 'BR0400900001',
        modBy: 'KWS',
        modDate: '01-02-2021'
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  
  };
  
  
  const outsideColumns = [
    { title: 'First Name', dataIndex: 'fname', key: 'fname' },
    { title: 'Last Name', dataIndex: 'lname', key: 'lname' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
    { title: 'Action', key: 'operation', render: () => <a href>Publish</a> },
  ];
  
  const outsideData = [];
  for (let i = 0; i < 3; ++i) {
    outsideData.push({
      key: i,
      fname: 'Leon',
      lname: 'Trotsky',
      email: 'no@email.com',
      dob: '01-15-1978',
    });
  }

const handleRedirect = () => {
    alert('Redirect to another page');
};

const handleTerminate = () => {
    alert('Terminate Contract');
};
const NestedTable = () => {
    return (
        <Table
            columns={outsideColumns}
            expandable={{ expandedRowRender }}
            dataSource={outsideData}
            title={() => <Button onClick={handleRedirect}>Redirect</Button>}
            className="nestedTbl"
        />
      );
};

export default NestedTable;