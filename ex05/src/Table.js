import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}
const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Larry</td>
                <td>Page</td>
            </tr>
            <tr>
                <td>Ada</td>
                <td>Lovelace</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Turing</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    state = {}
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table;
