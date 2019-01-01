import React from 'react';


class Table extends React.Component{

    render(){
        //simple component 1
        const TableBody = ()  =>{
            return <tbody></tbody>;
        }
        //simple component 2
        const TableHeader = () =>{
            return (
                <thead>
                        <tr>
                                <th>Name</th>
                                <th>Job</th>
                        </tr>
                </thead>
            );
        }
        //passing props from 
        const {characterData } = this.props;

        return (
            <table>
                 <TableBody characterData={characterData} />
                 <TableHeader/>
            </table>
        )
    }
}
export default Table;