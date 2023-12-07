import { useEffect, useState } from 'react'
import CardList from './CardList/CardList'
import useFetch from '../hooks/useFetch'
import rickandmortyapi from '../constants'
import CardDetail from './CardDetail/CardDetail'
import FilterBar from './FilterBar/FilterBar'
import './styles.css'


function RickAndMortyCharacters() {

  const characters = useFetch(rickandmortyapi)
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [selectedFilters, setSelectedFilters] = useState({
    gender: "",
    status: "",
    name: ""
  })

  useEffect(() => {
    console.log("useffect", characters, filteredCharacters)
    setFilteredCharacters(characters)
  }, [characters])

  const [show, setShow] = useState(false)
  const [cardId, setCardId] = useState({})
  window.char = characters

  const onCardClick = (id) => {
    const character = characters.find(char => char.id === id)
    setCardId(character)
    setShow(true)
  }

  useEffect(() => {
    const filteredList = filterByFields(characters, selectedFilters)
    setFilteredCharacters(filteredList)
  }, [selectedFilters])

  const filterChange = (filterSelector) => (e) => {
    const { value } = e.target
    setSelectedFilters({
      ...selectedFilters,
      [filterSelector]: value
    })
  }

  const filterByFields = (arr, filters) => {
    const {gender, status, name} = filters
    if (!gender && !status && !name) return arr
    return arr.filter(item => {
      const nameCondition =
        !name || item.name.toLowerCase().includes(name.toLowerCase())
      const genderCondition =
        !gender || item.gender.toLowerCase() === gender.toLowerCase()
      const statusCondition =
        !status || item.status.toLowerCase() === status.toLowerCase()
      return nameCondition && genderCondition && statusCondition
    })
  }

  return (
    <>
      <FilterBar filterChange={ filterChange }/>
      <CardDetail show={ show } setShow={ setShow } cardData={ cardId }/>
      <CardList allCards={ filteredCharacters } onCardClick={ onCardClick } />
    </>
  )
}

export default RickAndMortyCharacters