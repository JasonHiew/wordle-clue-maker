import styles from './Footer.module.css'
import Link from 'next/link';
import { Container, Text, Image } from '@mantine/core';

export default function Footer() {
  return (
    <>
      <Container fluid sx={{justifyContent: "center", alignItems: "center", display: "flex"}}>
        Made by <Link href="https://jason-devs.me/" passHref><Text variant="link" component="a" sx={{margin: 6}}>Jason Hiew</Text></Link> with <Link href="https://www.netlify.com/" passHref><Image src="/netliheart.svg" alt="Netlify Logo" width={15} height={15} component="a" className={styles.logo} /></Link> for you
      </Container>
    </>
  )
}
