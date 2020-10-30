import React from 'react'
import './Pagination.css'

function Pagination({pages, totalContacts, paginate}) {
    const pageNumbers = [];

    //below calculates the logic for dynamically setting the page numbers
    //based upon contacts available to pages set.
    for(let i = 1; i <= Math.ceil(totalContacts / pages ); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="pagination__list">
                    <a onClick={() => paginate(number)} className="pagination__link"href="#">
                        {number}
                    </a>
                </li>
            ))}
        </div>
    )
}

export default Pagination
