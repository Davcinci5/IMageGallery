import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    display:'grid',
    // gridTemplateColumns: '500 500 500',
    // gridAutoRows: '450',
    gridAutoFlow: 'dense',
  },
  gridContainer: {
    // display:'grid',
    // gridTemplateColumns: '500 500 500',
    // gridAutoRows: '450',
    // gridAutoFlow: 'dense',

  },
  gridList: {
    width: 500,
    height: 450
  },
}));

 function ImageGridList({ arreImages, page, count, changeSize }) {

    React.useEffect(() => {
        changeSize({page, count, id:1});
       },[page, count, changeSize]);

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {arreImages.slice(arreImages.length - count).map(({width, height, src}) => {
              if(width > height) {
                 return(<GridListTile key={width} cols={2}>
                    <img src={src} alt={'sometext'} />
                  </GridListTile>)
              }else if(width < height) {
                return(<GridListTile key={width} rows={2}>
                    <img src={src} alt={'sometext'} />
                  </GridListTile>)
              }
              return (<GridListTile key={width}> <img src={src} alt={'sometext'} /></GridListTile>)
          })}
        </GridList>
        
      </div>
    );
  };

  const mapStatetoProps = state => ({
    arreImages: state.data,
    page: state.page,
    count: state.count
  });

const mapDispatchtoProps = dispatch => ({
    changeSize: (payload) => dispatch({type: 'LOAD_DATA', payload})
});

  export default connect(mapStatetoProps, mapDispatchtoProps)(ImageGridList);
  