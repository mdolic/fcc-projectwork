import React from 'react';

import Table from './Table';

class App extends React.Component{

    render(){
            const characters = [
                {
                    name: 'charilie',
                    job:'designer'
                },
                {
                    name: 'frank',
                    job:' sys engineer'
                },
                {
                    name: 'bill',
                    job:'front-end developer'
                },
                {
                    name: 'jane',
                    job:'product manager'
                }

            ]
        return(
            <div className="container">
            <Table characterData = {characters}/>
            

            </div>
        )
    }

}
export default App;
