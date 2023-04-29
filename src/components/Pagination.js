import { useEffect, useState } from "react";

const Pagination = ({pages, setCurrentPage, currentUsers, sortedUsers}) => {

    const numOfPages = [];
    for (let i=1; i <= pages; i++) {
        numOfPages.push(i); // push every page to numOfPages which is empty array
    }

    const [currentButton, setCurrentButton] = useState(1); //first page

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
        <div className="hint-text">Showing <b>{currentUsers.length}</b> out of <b>{sortedUsers.length}</b> entries</div>
        <ul className="pagination">
             <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item' }`}> {/* if currentButton === 1, use 'page-item disabled' as className, otherwise,'page-item' */}
                {/* to go to previous page */}
                <a href="#!" onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a>
            </li>
            {
                numOfPages.map((page, index) => {
                    return (
                        // to display the number of pages and to go to selected page
                        <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item' }`}>
                            <a href="#!" className="page-link" onClick = {()=>setCurrentButton(page)}>{page}</a>
                        </li>
                    )
                })
            }

            <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item' }`}>
                {/* to go to next page */}
                <a href="#!" onClick = { () => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}>Next</a>
            </li>
        </ul>
    </div>
    )
}

export default Pagination;

