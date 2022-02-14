import styles from './styles/Tally.module.css'

const TallyRow = ({ icon, label, count }) => (
  <div className={styles.row}>
    <i className={`icon icon-${icon}`} />
    <span className={styles.label}>{label}</span>
    <span className={styles.count}>{count}</span>
  </div>
)

const Tally = ({ tally: { totalCites, totalSupportingCites, totalContrastingCites, totalMentioningCites } }) => (
  <div className={styles.tally}>
    <div className={styles.headerLayout}>
      <h3>Citation Types</h3>
    </div>

    <TallyRow icon='supporting' label='Supporting' count={totalSupportingCites} />
    <TallyRow icon='contrasting' label='Contrasting' count={totalContrastingCites} />
    <TallyRow icon='mentioning' label='Mentioning' count={totalMentioningCites} />

    <div className={styles.total}>
      Total cites: <span className={styles.count}>{totalCites}</span>
    </div>
  </div>
)

export default Tally
