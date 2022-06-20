import ShopCard from './ShopCard';

function ListView(props) {
  const {cards} = props;

  return (
    <div>
        {cards.map((card, index) => {
          return <ShopCard key={index} card={card}></ShopCard>
        })}
    </div>
  )
}

export default ListView;
