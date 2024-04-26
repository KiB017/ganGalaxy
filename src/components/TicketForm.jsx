import React from "react";
import Select from 'react-select';
import '../stylesheets/TicketForm.css'

function TicketForm()
{
  const options = [
    { value: 'singleAdultType', label: 'Single adult E-Ticket' },
    { value: 'singleChildType', label: 'Single child E-Ticket' },
    { value: 'coupleType', label: 'Couple E-Ticket (2 people)' },
    { value: 'groupType', label: 'Group E-Ticket (4 people)' }
  ]

  return(
    <form className = 'form-ticket'>
      <label>Select the e-ticket type of your choice</label>
      <Select options={options}/>
      <button>Submit</button>
    </form>
  );
}

export default TicketForm;

