import React from 'react'
import * as classes from './rules.module.css'

const Rules = ({children, rules}) => {
  // Truthy sets off the rules generator

  const res = rules.map(r => r()).filter(r => r !== true)
  const errorLabels = res.map(r => `${children}: ${r}`)
  console.log(res, errorLabels)
  return (
    <div className={classes.display}>
      {children}
      <ul>
        {res.map(r => <li key={r} className={classes.li}>{r}</li>)}
      </ul>
      < br />
    </div>
  )
}

export default Rules