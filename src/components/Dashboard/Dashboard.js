import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
       
    }



    render(props) {
        // let list = props.list.map((element, index) => {
            // return (
                <div>
                    {/* <h2><Product key={index} product={element.text} /></h2> */}
                    {/* /* //handleUpdate={props.handleUpdate} */}
                </div>
            // )
        // })
        return (
            <div>
                <Product />
                Dashboard
                <div>
                    {/* {list} */}
                </div>

            </div>
        )
    }
}

export default Dashboard;