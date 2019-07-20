import React from 'react';
import Newslistitems from './newsitems'


const NewsList = (props) =>{

    const items = props.news.map((item)=>{
        return(
            <Newslistitems key={item.id} item={item}/>
        )
    })

    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;