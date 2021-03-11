import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import { parse } from 'query-string';
import './App.css';
import PaginationC from './components/Pagination/Pagination';
import Grid from './components/Grid/Grid'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


function App({changePage, changeCount}) {
  return (
      <Router>
        <div className="NavBar">
            <Link to={`/gallery/gallery1/?count=10&page=5`}>
              {'gallery 1'}
            </Link>
            <Link to={`/gallery/gallery2/?count=20&page=1`}>
              {'gallery 2'}
            </Link>
            <Link to={`/gallery/gallery3/?count=15&page=3`}>
              {'gallery 3'}
            </Link>
        </div>
        <div className="gallery-wrapper">
        <Route path="/gallery/:galleryId/" render={(props) => {
            const { galleryId } = props.match.params;
            if(galleryId !== 'gallery1' && galleryId !== 'gallery2' && galleryId !== 'gallery3'){ return <Redirect to="/" />}
            let {page, count } = parse(props.location.search);
            page = parseInt(page)
            page = page > 10 ? 10 : page < 1 ? 1 : page 
            changePage(page);
            changeCount(parseInt(count));
            return (
            <>
              <Grid/>
              <PaginationC useHistory={useHistory}/>
            </>
            )
          }}/> 
        </div>
      </Router>
  );
}

const mapDispatchtoProps = dispatch => ({
  changePage: (page) => dispatch({type: 'CHANGE_PAGE', payload:{ page } }),
  changeCount: (count) => dispatch({type: 'CHANGE_COUNT', payload: { count }})
});

export default connect(null, mapDispatchtoProps)(App);
// export default App;
