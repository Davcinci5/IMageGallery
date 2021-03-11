import React from 'react';
import './Pagination.css';
import Pagination from '@material-ui/lab/Pagination';
// import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';


const PaginationC =({ page, count, changePage, useHistory }) => {

    const history = useHistory();
    const setUrl = React.useCallback((page, currentCount = count) => {
      const params = new URLSearchParams();
        params.append("count", currentCount);
        params.append("page", page);
        history.push({search: params.toString()});
    }, [count, history])

    React.useEffect(() => {
       setUrl(page);
      }, [page, setUrl])

    const handleChange = (e, value) => {
        setUrl(value)
        changePage(value);
      };

    return(<div className="pagination-wrapper">
        <Pagination count={10} page={page} onChange={handleChange} />
    </div>);
};

const mapStatetoProps = state => ({
  page: state.page,
  count: state.count
});

const mapDispatchtoProps = dispatch => ({
  changePage: (page) => dispatch({type: 'CHANGE_PAGE', payload:{ page } })
});
export {PaginationC};
export default connect(mapStatetoProps, mapDispatchtoProps)(PaginationC);