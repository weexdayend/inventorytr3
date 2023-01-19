// DynamicHeroIcon.jsx
// Simple Dynamic HeroIcons Component for React (javascript / jsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import * as HIcons from '@heroicons/react/outline'

const DynamicHeroIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className={`${props.size} ${props.color}`} aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon