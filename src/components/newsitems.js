import React from 'react';


const Newslistitems = ({item}) =>{
    return(
            <div>
                <h3>{item.title}</h3>
                <div className="Feedclass">{item.feed}</div>
            </div>
    )
}

export default Newslistitems;