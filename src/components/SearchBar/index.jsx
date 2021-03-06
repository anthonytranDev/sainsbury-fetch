// @flow
import React from 'react'
import { Debounce } from 'react-throttle'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

import './SearchBar.scss'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
}

type Classes = {
  root: Object,
  input: Object,
  iconButton: Object,
  divide: Object,
}

type Props = {
  callback: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  classes: Classes,
}

function SearchBar(props: Props) {
  const { classes } = props
  return (
    <Paper className={`${classes.root} search-bar`} elevation={1}>
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Debounce time="300" handler="onChange">
        <InputBase
          id="search-bar"
          className={`${classes.input} search-bar`} 
          onChange={event => props.callback(event)}
          placeholder="Search"
        />
      </Debounce>
    </Paper>
  )
}

export default withStyles(styles)(SearchBar)
