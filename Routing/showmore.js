import React from 'react';

const ShowMoreData = (props) => {
    return(
        <div>
            {props.finalresults.map(function(sort){
                                return(
                                    <div key={sort.id}>
                                       <label>ID: </label>{"    "} {sort.id}<br/>
                                       <label>Name: </label>{"    "} {sort.name}<br/>
                                       <label>Phone: </label>{"    "} {sort.phone}<br/>
                                       <label>Company Name: </label>{"    "} {sort.company.name}<br/>
                                       <label>Email ID: </label>{"    "} {sort.email}<br/>
                                       <label>Address: </label>{"    "} {sort.email}<br/>
                                    </div>
                                )
                            })}

        </div>
    )
}

export default ShowMoreData;