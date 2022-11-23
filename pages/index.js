import Head from 'next/head'
import Image from 'next/image'

const styles = {
  height: 100,
  display: "flex",
  justifyContent: "center",
}

export default function Home() {
  return (
    <div style={styles}>
      <h1>Opa, Anselmo aqui</h1>
    </div>
  )
}
