import { useEffect, useState } from 'react'

import Banner from '../../components/Header/Banner'
import ProductsList from '../../components/ProductsList'
import residente from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setpromocoes] = useState<Game[]>([])
  const [emBreve, setemBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setpromocoes(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setemBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="grey" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
