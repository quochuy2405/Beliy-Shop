import { CarouselProps } from 'primereact/carousel'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'primereact/carousel'

interface ICarousel2Props extends CarouselProps {
  isAutoPlay?: boolean
}

const Carousel2: React.FC<ICarousel2Props> = ({ isAutoPlay, ...props }) => {
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    if (isAutoPlay) {
      const time = setInterval(() => {
        const nextPage = page >= props.itemTemplate.length ? 0 : page + 1
        setPage(nextPage)
      }, props.autoplayInterval || 1000)

      return () => clearInterval(time)
    }
  }, [])
  return <Carousel {...props} page={page} onPageChange={(e) => setPage(e.page)} />
}

export default Carousel2
