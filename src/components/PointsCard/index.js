import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    display: 'flex',
    border: '1px solid #333',
    width: '480px',
    height: '320px',
  },
  leftPoints: {
    flex: '0 0 64px',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  centerColumn: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  topPoints: {
    flex: '0 0 64px',
    display: 'flex'
  },
  details: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #333'
  },
  name: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px'
  },
  cardTitle: {
    flex: '0 0 80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333',
    color: '#fefefe',
    fontSize: '54px',
  },
  pointExchange: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px'
  },
  bottomPoints: {
    flex: '0 0 64px',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  rightPoints: {
    flex: '0 0 64px',
    display: 'flex',
    flexDirection: 'column'
  },
  point: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #333',
    fontSize: '24px',
  }
}

class PointsCard extends Component {
  static propTypes = {
    /** Name of whose points card this is for */
    name: PropTypes.string.isRequired,
    /** What is worth one point */
    pointExchange: PropTypes.string.isRequired,
    /** How many points per card */
    pointTotal: PropTypes.oneOf([
      10,
      20
    ])
  }

  static defaultProps = {
    pointTotal: 20
  }



  render() {
    const { classes, name, pointExchange, pointTotal } = this.props

    let verticalLayout = Math.floor(pointTotal / 5)
    let horizontalLayout = (pointTotal / 2) - verticalLayout
    let points = Array.from({length: pointTotal}, (v, k) => k+1)
    points = points.splice(pointTotal - verticalLayout + 1).concat(points)
    
    let leftPoints = points.splice(0, verticalLayout)
    let topPoints = points.splice(0, horizontalLayout)
    let rightPoints = points.splice(0, verticalLayout)
    let bottomPoints = points.splice(0, horizontalLayout)
    
    const renderPoints = (points) => {
      return points.map((point) => <Typography variant="div" className={classes.point}>{point}</Typography>)
    }

    return (
      <div className={classes.root}>
        <div className={classes.leftPoints}>
          {renderPoints(leftPoints)}
        </div>
        <div className={classes.centerColumn}>
          <div className={classes.topPoints}>
            {renderPoints(topPoints)}
          </div>
          <div className={classes.details}>
            <Typography variant="div" className={classes.name}>{name}'s</Typography>
            <Typography variant="div" className={classes.cardTitle}>POINT CARD</Typography>
            <Typography variant="div" className={classes.pointExchange}>1 point = {pointExchange}</Typography>
          </div>
          <div className={classes.bottomPoints}>
            {renderPoints(bottomPoints)}
          </div>
        </div>
        <div className={classes.rightPoints}>
          {renderPoints(rightPoints)}
        </div>
      </div>
    )
  }
}

export { PointsCard }
export default withStyles(styles)(PointsCard)