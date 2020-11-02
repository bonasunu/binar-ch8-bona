import React from 'react'

const CreatePlayerForm = ({ submit }) => {
  const classes = {
    wrapper: 'w-full max-w-5xl mx-auto mt-5 mb-10',
    title: 'text-3xl font-extrabold py-5 text-gray-700 mb-2',
    form: 'flex flex-wrap rounded-xl bg-white rounded-xl py-2 px-5',
    formWrapper: 'w-full md:w-1/2 pr-3 mb-3',
    formLabel: 'block text-gray-600 font-bold py-3',
    formField:
      'block border bg-gray-200 w-full border border-gray-200 rounded-xl h-12 px-3 focus:border-gray-600 focus:bg-yellow-100 focus:outline-none',
    button:
      'mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline',
  }

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create Player</h2>
      <form onSubmit={submit}>
        <div className={classes.form}>
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
              type="email"
              name="email"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="password">
              Password
            </label>
            <input
              className={classes.formField}
              type="password"
              name="password"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <label className={classes.formLabel} htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className={classes.formField}
              type="password"
              name="confirm-password"
            ></input>
          </div>
          <div className={classes.formWrapper}>
            <button className={classes.button} type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreatePlayerForm
