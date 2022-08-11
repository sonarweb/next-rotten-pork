import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Hola</h1>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus vero cupiditate doloremque rem modi, qui animi similique consequuntur iusto aspernatur consectetur quibusdam laboriosam dolorum officia aliquam. Veniam dolore laudantium tempora sint quia illo facere minima modi aut eos magnam aliquam, cumque eaque beatae a in laboriosam veritatis! Nisi ad eius qui, consequuntur voluptate eum necessitatibus voluptatum deleniti animi quibusdam officia non quia harum veritatis debitis blanditiis possimus magnam inventore commodi, atque eaque rem omnis labore delectus? Quas, distinctio adipisci dolorem ut ducimus, voluptate in rem asperiores animi expedita laboriosam aspernatur optio? Error fugiat eaque in dolor voluptatem impedit ipsam!</p>
    </div>

  )
}

export default Header
