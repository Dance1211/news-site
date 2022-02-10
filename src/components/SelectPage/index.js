import './styles.css'

function SelectPage({ page, setPage }) {

  const handlePageChange = (changePageNum) => {
    return () => {
      setPage((currPage) => currPage + changePageNum);
    }
  }

  return (
    <nav className="SelectPage" id="page_nav">
      <p className="SelectPage__currentPage">Page: {page}</p>
      <button className="SelectPage__prev SelectPage__button" onClick={handlePageChange(-1)}><i className="fas fa-chevron-left" /></button>
      <button className="SelectPage__next SelectPage__button" onClick={handlePageChange(1)}><i className="fas fa-chevron-right" /></button>
    </nav>
  );
}

export default SelectPage;