import './Main.css'
import React from 'react'
import Header from '../Header/Header'

export default props =>
<React.Fragment>
    <Header {...props}/>
    <main className="content container-fluid">
        <div className='main'>
            {props.children}
        </div>
    </main>
</React.Fragment>
