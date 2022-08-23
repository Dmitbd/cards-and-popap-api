import { Card } from '../../types/card'
import CardContainer from '../CardComponent/CardComponent'
import classes from './ContainerWithCards.module.css'

type Props = {
  cards: Card[]
}

const ContainerWithCards: React.FC<Props> = ({cards}) => {

  return (
    <div className={classes.container}>
      {
        cards.map((card: Card) => {
          return <CardContainer card={card} key={card.index}/>
        })
      }
    </div>
  )
}

export default ContainerWithCards
