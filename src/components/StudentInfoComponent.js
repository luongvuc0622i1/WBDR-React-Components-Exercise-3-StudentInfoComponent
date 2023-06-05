import './styleTable.css';

function StudentInfoComponent(props) {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            {props.data.map(student => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
        </table>
    );
}
export default StudentInfoComponent;