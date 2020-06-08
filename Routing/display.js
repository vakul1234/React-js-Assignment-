import React from 'react';
const DisplayJsonData = (props) => {
    return(
        <div>
             {console.log("json data",props.res)}
            {/* <h1>Below is for Logic</h1> */}
                {"Below is Your Details: "}
                {console.log("final search ",props.finalresults)}
                {console.log("flag: ",props.flag)}
                {console.log("expanded: ",props.expandall)}
                
                {props.finalresults.map(function(sort){
                                return(
                                    <div key={sort.email}>
                                        {console.log(" Sort Value",sort)}
                                       <label>ID: </label>{"    "} {sort.id}<br/>
                                       <label>Name: </label>{"    "} {sort.name}<br/>
                                       <label>Phone: </label>{"    "} {sort.phone}<br/>
                                       <label>Company Name: </label>{"    "} {sort.company.name}<br/>
                                       <label>Email ID: </label>{"    "} {sort.email}<br/>
                                       {props.expandall ? (<div>
                                                             <p style={{fontSize:'17px',fontFamily:'New Times Roman'}}>Click on Show More to Get More Details</p>
                                                        </div>)
                                                        :
                                                        (<div>
                                                            <label>Address: </label>{"    "} 
                                                            {sort.address.city}{" , "}<br/>
                                                            {sort.address.street}{" , "}{sort.address.suite}<br/>
                                                            <label>Geo Co-ordinates: </label>{"    "}<br/>
                                                            Latitude : {sort.address.geo.lat}{" , "}<br/>
                                                            Longitude : {sort.address.geo.lng}<br/>
                                                            <label>Zip-Code: </label>{"    "} 
                                                            {sort.address.zipcode}<br/>
                                                        </div>)
                                        }
                                        <p>
                                          {/* {console.log("expandall ",props.expandall)} */}
                                        <button type="button" onClick={props.showMoreMethod}
                                        className="btn btn-primary">
                                        {props.expandall ? 'Show More' : 'Show Less'}
                                        </button>
                                        {/* {console.log("expanded after show more: ",props.expandall)} */}
                                      </p>

                                    </div>
                                )
                            })}
        </div>
    )
}
export default DisplayJsonData;