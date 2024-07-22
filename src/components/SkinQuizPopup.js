import React from 'react'
import Option from './core/Option'
import OptionEdit from './core/OptionEdit'
import OptionSelected from './core/OptionSelected'
import LoveHateCard from './LoveHateCard'
import SearchBar from './core/SearchBar'
import FindingMatches from './FindingMatches'

function SkinQuizPopup() {
  return (
    <div>
        <div className='flex flex-wrap justify-end'>
        <OptionSelected/>
        <OptionSelected/>
        <OptionSelected/>
        <OptionSelected/>
        </div>
        <p className='text-base	font-medium text-left'>What recommendations are you looking for?</p>
        <p className='text-xs font-light text-left text-zinc-400'>Select one</p>
        <Option />
        <SearchBar />
        <LoveHateCard />

        <FindingMatches />
    </div>
  )
}

export default SkinQuizPopup