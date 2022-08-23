import { alt, emailField, nameField } from '../../constants/constantsWithCardText'
import { useAppDispatch } from '../../hooks/store'
import { getCardData } from '../../store/slices/cardDataSlice'
import { popupWithCardIsOpen } from '../../store/slices/popupOpenSlice'
import { Card } from '../../types/card'
import classes from './CardComponent.module.css'

type Props = {
  card: Card
}

const CardComponent: React.FC<Props> = ({ card }) => {

  const { picture, name, email } = card

  const dispatch = useAppDispatch()

// передает в стейт открытие попапа true и сохраняет данные выбранной карточки
  const handlePopupOpen = (): void => {
    dispatch(popupWithCardIsOpen(true))
    dispatch(getCardData(card))
  }

  return (
    <div className={classes.card} onClick={handlePopupOpen}>
      <img className={classes.photo} src={picture} alt={alt} />
      <ul className={classes.textContainer}>
        <li className={classes.textString}>
          <p className={classes.stringName}>{nameField}</p>
          <p className={classes.stringText}>{name}</p>
        </li>
        <li className={classes.textString}>
          <p className={classes.stringName}>{emailField}</p>
          <p className={classes.stringText}>{email}</p>
        </li>
      </ul>
    </div>
  )
}

export default CardComponent
