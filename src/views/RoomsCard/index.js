import React, {Component} from 'react';
import RoomsList from '../modules/RoomsData/entities.json'
import apartment from '../../assets/images/apartment.jpg'
import Like from '../../assets/images/Like.png'
import love from '../../assets/images/love.png'
class RoomsCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      ActiveIndex:''
    }

  }

  handleClick=(i)=>{
    this.setState({ActiveIndex:i})
  }
  handleClickCancel=()=>{
    this.setState({ActiveIndex:''})
  }

  render() {
    return (
      <div className='Container'>
         <h1 className='ClassTitle'>Квартиры</h1>
        <div className='DivForCard'>
          {RoomsList.response.map((row, i) => (
              <div className='CardStyle'>
                <div className={'title'}>
                 <img className={'CardImg'} src={apartment} alt={'SomeApartment'}/>
                  <h3>{row.type}</h3>
                </div>
                  <div className='AboutRoom'>
                    <p><span> Тип -</span>  {row.attributes.title}</p>
                    <p><span> Комнаты -</span> {row.attributes.rooms}</p>
                    <p><span> Адрес - </span>{`г.${row.attributes.address.city},ул. ${row.attributes.address.street}, д.${row.attributes.address.house}, кв.${row.attributes.address.room}`}</p>
                    <p><span> Площадь дома - </span>{`${row.attributes.area} ${row.attributes.unit}`}</p>
                    <hr className={'hrStyle'}/>
                    <p><span>{row.relationships.type} - </span>
                      {`${row.relationships.attributes.last_name}
                           ${row.relationships.attributes.first_name} 
                           ${row.relationships.attributes.middle_name}`}</p>
                  </div>
                {this.state.ActiveIndex === i ?
                  <div className='ButtonDiv'>
                    <button
                      onClick={this.handleClickCancel}
                      className={'LikeHeartButton'}>
                      <img src={love} alt={'like'}/></button>
                  </div>
                  :
                  <div className={'ButtonDiv'}>
                    <button
                      onClick={() => this.handleClick(i)}
                      className={'LikeButton'}><img src={Like} alt={'Like'}/></button>
                  </div>
                      }
              </div>
             ))  }
        </div>
      </div>
    );
  }
}

export default RoomsCard;