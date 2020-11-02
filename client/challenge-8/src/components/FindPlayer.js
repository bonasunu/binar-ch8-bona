import React from 'react'

const FindPlayer = () => {
  const classes = {
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-20',
    title: 'text-3xl font-extrabold py-5 text-gray-700 mb-2',
    form: 'rounded-xl bg-white rounded-xl py-2 px-5',
    formWrapper: 'md:w-3/12 w-full pr-3 mb-3',
    formFieldWrapper: 'flex flex-wrap',
    formLabel: 'block text-gray-600 font-bold py-3',
    formField:
      'block border bg-gray-200 w-full border border-gray-200 rounded-xl h-12 px-3 focus:border-gray-600 focus:bg-yellow-100 focus:outline-none',
    button:
      'mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline',
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Find Player</h2>
      <form className={classes.form}>
        <div className={classes.formFieldWrapper}>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="username">
              Username
            </label>
            <input
              className={classes.formField}
              type="text"
              name="username"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={classes.formField}
              type="text"
              name="email"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="experience">
              Experience
            </label>
            <input
              className={classes.formField}
              type="text"
              name="experience"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="level">
              Level
            </label>
            <input
              className={classes.formField}
              type="text"
              name="level"
            ></input>
          </div>
        </div>

        <div className={classes.formWrapper}>
          <button className={classes.button} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default FindPlayer
