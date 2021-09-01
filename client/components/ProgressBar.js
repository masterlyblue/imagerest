import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  progress_section: {
    border: '1px solid #000',
    width: '40rem',
    borderRadius: '0.8rem',
    '& > div': {
      backgroundColor: 'red',  
      borderRadius: '0.8rem',
      textAlign: 'center',
      color: '#fff',
      // width: `${props => props.percent}%`,
      transition: '0.5s',
    }
  },
})

const ProgressBar = ({ percent }) => {
  console.log(percent)
  const classes = useStyles(percent);

  return (
    <div className={classes.progress_section}>
      <div style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  )
}

export default ProgressBar;