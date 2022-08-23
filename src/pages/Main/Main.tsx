import React, { useEffect, useState } from 'react'
import { getCatdsAsync } from '../../api/axios'
import Button from '../../components/Button/Button'
import ContainerWithCards from '../../components/ContainerWithCards/ContainerWithCards'
import Loading from '../../components/Loading/Loading'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { increaseCardsCount } from '../../store/slices/cardCountSlice'
import classes from './Main.module.css'

const Main: React.FC = () => {

  const dispatch = useAppDispatch()

  const [showButton, setShowButton] = useState(true)
  // первичная загрузка карточек с сервера
  useEffect(() => {
    getCatdsAsync(dispatch)
  }, [])

  const cardsArray = useAppSelector(state => state.cards)
  const cardsCount = useAppSelector(state => state.cardsCount)

  // фильтр количества карточек
  const cardsArrayFilter = cardsArray.filter(card => card.index <= cardsCount)

  // увеличивает количество разрешенных карточек
  const handlerButtonClick = (): void => {
    dispatch(increaseCardsCount(4))
  }

  // проверка, есть ли еще карточки в хранилище
  useEffect(() => {
    cardsCount < cardsArray.length ? setShowButton(true) : setShowButton(false)
  }, [handlerButtonClick])

  return (
    <section className={classes.main}>

      {cardsArray.length ? <ContainerWithCards cards={cardsArrayFilter} /> : <Loading />}

      {showButton ? <Button handlerButtonClick={handlerButtonClick} /> : null}

    </section>
  )
}

export default Main
