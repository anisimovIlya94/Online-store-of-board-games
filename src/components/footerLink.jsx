import React from 'react'

const FooterLink = ({ name, styles }) => {
  return (
     <div className={styles} role={'button'}>
        {name}
     </div>
  )
}

export default FooterLink