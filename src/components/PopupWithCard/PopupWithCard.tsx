import { aboutField, ageField, alt, emailField, nameField, phoneField } from '../../constants/constantsWithCardText'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { popupWithCardIsOpen } from '../../store/slices/popupOpenSlice'
import iconClose from '../../images/icon-close.svg'
import classes from './PopupWithCard.module.css'

const PopupWithCard: React.FC = () => {


  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.popupOpener)
  const cardData = useAppSelector(state => state.cardData)
  const { name, age, email, phone, about, picture } = cardData

  const handleCLosePopup = (): void => {
    dispatch(popupWithCardIsOpen(false))
  }

  return (
    <div className={isOpen ? classes.popupOpened : classes.popupClosed}>
      <div className={classes.card}>
        <button className={classes.closeButton} onClick={handleCLosePopup}>
          <img className={classes.iconClose} src={iconClose} alt="x" />
        </button>

        <img className={classes.photo} src={picture} alt={alt} />
        
        <ul className={classes.textContainer}>
          <li className={classes.textString}>
            <p className={classes.stringName}>{nameField}</p>
            <p className={classes.stringText}>{name}</p>
          </li>
          <li className={classes.textString}>
            <p className={classes.stringName}>{ageField}</p>
            <p className={classes.stringText}>{age}</p>
          </li>
          <li className={classes.textString}>
            <p className={classes.stringName}>{emailField}</p>
            <p className={classes.stringText}>{email}</p>
          </li>
          <li className={classes.textString}>
            <p className={classes.stringName}>{phoneField}</p>
            <p className={classes.stringText}>{phone}</p>
          </li>
          <li className={classes.textString}>
            <p className={classes.stringName}>{aboutField}</p>
            <p className={classes.stringText}>{about}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PopupWithCard
