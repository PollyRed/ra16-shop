function ShopCard(props) {
  const {card} = props;
  return (
    <div className="shop-card">
      <div>{card.name}</div>
      <div>{card.color}</div>
      <img src={card.img} alt=""></img>
      <div>{'$' + card.price}</div>
      <button>Add to card</button>
    </div>
  )
}

export default ShopCard;
