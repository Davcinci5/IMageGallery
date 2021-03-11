import React from 'react';
import './Grid.css';
import { connect } from 'react-redux';

const Grid = props => {
    const { arreImages, page, count, changeSize } = props

    React.useEffect(() => {
       changeSize({page, count, id:1});
      },[page, count, changeSize]);

    const pickSize = ({width, height}) => {
        let value = '';
        if(width > height) {
            value = 'h2';
        }else if(width < height) {
            value = 'v2';
        }
        return value;
    };

    const mapCreateCell = (image) => {
        return (<div key={image.src}className={`item ${pickSize(image)}`} >
            <img src={image.src} alt={'kitty'}/>
        </div>)
    }

    return(
        <section className='gallery'>
           {arreImages.map(mapCreateCell)}
        </section>
    )
};
const mapStatetoProps = state => ({
    arreImages: state.data,
    page: state.page,
    count: state.count
  });

const mapDispatchtoProps = dispatch => ({
    changeSize: (payload) => dispatch({type: 'LOAD_DATA', payload})
});

export {Grid};
export default connect(mapStatetoProps, mapDispatchtoProps)(Grid);
