import classes from './Loading.module.css'

const Loading = () => {
  return (
    <>
      <div className={classes.spinner}></div>
      <p>Loading...</p>
    </>
  )
}

export default Loading
