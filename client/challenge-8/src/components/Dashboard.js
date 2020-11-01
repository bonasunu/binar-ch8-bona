import React from 'react'

const Dashboard = ({ getPlayers }) => {
  //  styling
  const classes = {
    title: 'text-3xl font-extrabold py-5 text-gray-700',
    wrapper: 'overflow-x-auto max-w-5xl mx-auto',
    table: 'mt-5 rounded-xl bg-white table-auto w-full p-2',
    tableHead: 'rounded-xl text-gray-600 text-left border-b',
    tableData: 'text-left',
    tableDataRow: 'hover:bg-gray-100',
    tableContent: 'px-5 py-2 h-16',
    boxInfo: 'flex flex-wrap mt-2 mb-3',
    boxInfoContent: 'bg-white rounded-xl px-5 py-3 mr-3 mb-3 w-48',
    boxTitle: 'text-gray-400 font-bold',
    boxData: 'font-bold text-5xl text-gray-600',
  }

  // render
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Players</h2>
      <div className={classes.boxInfo}>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Total Players</h3>
          <p className={classes.boxData}>{getPlayers.length}</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Highest Experience</h3>
          <p className={classes.boxData}>3</p>
        </div>
        <div className={classes.boxInfoContent}>
          <h3 className={classes.boxTitle}>Highest Level</h3>
          <p className={classes.boxData}>5</p>
        </div>
      </div>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th className={classes.tableContent}>Username</th>
            <th className={classes.tableContent}>Email</th>
            <th className={classes.tableContent}>Experience</th>
            <th className={classes.tableContent}>Level</th>
          </tr>
        </thead>
        <tbody className={classes.tableData}>
          {getPlayers.map((player) => (
            <tr className={classes.tableDataRow}>
              <td className={classes.tableContent}>{player.username}</td>
              <td className={classes.tableContent}>{player.email}</td>
              <td className={classes.tableContent}>{player.experience}</td>
              <td className={classes.tableContent}>{player.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
