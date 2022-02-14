import Head from 'next/head'
import Tally from '../components/Tally'
import SciteIndex from '../components/SciteIndex'
import styles from './styles/Index.module.css'

const EXAMPLE_ISSN = '0022-4715'

export const getServerSideProps = async () => {
  const [tally, sciteIndices] = await Promise.all([
    fetch(`https://api.scite.ai/journal/${EXAMPLE_ISSN}/tallies`).then(res => res.json()),
    fetch(`https://api.scite.ai/journal/${EXAMPLE_ISSN}/yearly-si`).then(res => res.json()),
  ])

  return {
    props: {
      tally, sciteIndices
    }
  }
}

const Badge = ({ tally, sciteIndices }) => (
  <div className={styles.badge}>
    <SciteIndex sciteIndex={sciteIndices[0]} />
    <Tally tally={tally} />
  </div>
)

const Index = ({ tally, sciteIndices }) => {
  return (
    <div>
      <Head>
        <title>Scite Example Badge</title>
      </Head>

      <Badge tally={tally} sciteIndices={sciteIndices} />
    </div>
  )
}

export default Index