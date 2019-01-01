// @flow
import React from 'react'
import { DebounceInput } from 'react-debounce-input'

import './SearchBar.scss'

type Props = {
  callback: (event: SyntheticInputEvent<HTMLInputElement>) => void,
}

export default function SearchBar(props: Props) {
  return (
    <DebounceInput
      className="search-bar"
      minLength={1}
      debounceTimeout={1000}
      placeholder="Search"
      onChange={event => props.callback(event)}
      type="text"
    />
  )
}
