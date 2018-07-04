import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import PointsCard from '../PointsCard'


storiesOf('PointsCard', module)
  .addDecorator(withKnobs)
  .add('default', () => {

    const pointTotal = select('Points', [10, 12, 14, 16, 18, 20, 22, 24, 26], 20)

    return (
      <PointsCard
        name="Silas"
        pointExchange="15 minutes"
        pointTotal={pointTotal}
      />
    )
  
  })
