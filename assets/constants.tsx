import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi'

export const genres = [
  { title: 'All', value: 'all' },
  { title: 'Rap', value: 'rap' },
  { title: 'Pop', value: 'pop' },
  { title: 'R&B', value: 'rb' },
  { title: 'Rock', value: 'rock' },
  { title: 'Country', value: 'country' },
  // { title: 'Rock', value: 'ROCK' },
  // { title: 'Latin', value: 'LATIN' },
  // { title: 'Film', value: 'FILM_TV' },
  // { title: 'Country', value: 'COUNTRY' },
  // { title: 'Worldwide', value: 'WORLDWIDE' },
  // { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  // { title: 'House', value: 'HOUSE' },
  // { title: 'K-Pop', value: 'K_POP' },
]

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
]
