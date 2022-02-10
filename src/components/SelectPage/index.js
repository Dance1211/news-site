import './styles.css'

function SelectPage({ page, setPage, isArticlesLoading}) {

  const handlePageChange = (changePageNum) => {
    return () => {
      if (isArticlesLoading) return;
      setPage((currPage) => {
        const newPage = currPage + changePageNum;
        if (newPage < 1) return 1;
        return newPage;
      });
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