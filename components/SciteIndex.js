import styles from './styles/SciteIndex.module.css'

const round = num => Math.round(num * 1000 + Number.EPSILON) / 100

const Metric = ({ label, metric }) => (
  <div className={styles.metricLayout}>
    <span className={styles.metric}>{metric ? round(metric) : 'N/A'}</span>
    <span className={styles.label}>{label}</span>
  </div>
)

const SciteIndex = ({ sciteIndex: { relativeYear, siAllYears, siFiveYears, siTwoYears } }) => (
  <div className={styles.sciteIndex}>
    <div className={styles.headerLayout}>
      <h3>{relativeYear} scite Index</h3>
    </div>
    <div className={styles.topMetric}>
      <Metric label='All year SI' metric={siAllYears} />
    </div>
    <div className={styles.bottomMetrics}>
      <Metric label='Five year SI' metric={siFiveYears} />
      <Metric label='Two year SI' metric={siTwoYears} />
    </div>
  </div>
)

export default SciteIndex
