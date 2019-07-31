import React from 'react'




function ResultCard(props){
    return(

  <div> 

  <h2 className="header">{props.title} at the {props.locationName}</h2>
  <h6> Distance: {props.locationDistance}{props.locationDistanceUnits}</h6>

  <div className="card horizontal">
    <div className="card-image">
      <img src={props.image} alt="event"/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>{props.note}</p>
        <p>{props.dates}</p>
        <p>Venue Address {props.locationAddress} {props.locationCity} {props.locationPostalCode} {props.locationState} </p>

      </div>
      <div className="card-action">
        <a href={props.tickets} target="_blank" rel="noopener noreferrer" >Purchase Tickets</a>
      

      </div>
    </div>
  </div>
</div>
  
    )

}
export default ResultCard


