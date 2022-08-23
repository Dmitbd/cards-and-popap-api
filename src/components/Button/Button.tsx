import classes from './Button.module.css'

type Props = {
  handlerButtonClick(): void
}

const Button: React.FC<Props> = ({handlerButtonClick}) => {

  const buttonText = 'Load more...'

  return (
    <button className={classes.button} onClick={handlerButtonClick}>{buttonText}</button>
  )
}

export default Button
