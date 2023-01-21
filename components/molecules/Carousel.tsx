import clsx from 'clsx'
import { Button } from 'primereact/button'
import { ReactElement, useEffect, useRef, useState } from 'react'
interface ICarouselProps {
  className?: string
  value?: Array<object | number | string>
  showIndicators?: boolean
  showNavigators?: boolean
  autoplayInterval?: number
  numVisible?: number
  numScroll?: number
  itemTemplate: (item: object | number | string) => ReactElement
}

const Carousel: React.FC<ICarouselProps> = ({
  className,
  value,
  itemTemplate,
  numVisible = 1,
  autoplayInterval = 2000
}) => {
  const refBoxSlider = useRef<HTMLDivElement>(null)
  const refBoxItem = useRef<HTMLDivElement>(null)
  const refBoxSliders = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [widthSlider, setWidthSlider] = useState(0)
  const classNames = clsx('w-full carousel', {
    [className as string]: className
  })

  const numNav = value.length - numVisible + 1

  const onPrev = () => {
    const quantityNav = value.length
    setCount((e) => (e - 1 < 0 ? quantityNav - 1 : e - 1))
  }
  const onNext = () => {
    const quantityNav = value.length - numVisible
    setCount((e) => (e + 1 > quantityNav ? 0 : e + 1))
  }

  useEffect(() => {
    setWidthSlider(refBoxSlider.current.clientWidth)
  }, [])

  useEffect(() => {
    const time = setInterval(onNext, autoplayInterval)
    return () => clearInterval(time)
  }, [])

  useEffect(() => {
    refBoxSliders.current.style.transform = `translateX(-${(widthSlider / numVisible) * count}px)`
  }, [count])

  return (
    <div className={classNames}>
      <div className="flex items-center gap-1">
        <div>
          <Button
            icon="pi pi-angle-left"
            className="p-button-rounded p-button-secondary p-button-outlined"
            aria-label="Bookmark"
            onClick={onPrev}
          />
        </div>
        <div ref={refBoxSlider} className="w-full overflow-scroll">
          <div
            className="flex min-h-[300px] h-[50vh] w-fit transition-all"
            style={{ width: `${widthSlider * value.length}px` }}
            ref={refBoxSliders}
          >
            {value.map((item) => (
              <div
                className="flex justify-center h-full"
                style={{ width: `${widthSlider / numVisible}px` }}
              >
                <div
                  ref={refBoxItem}
                  className={clsx('h-full', {
                    'w-fit mr-3': numVisible > 1,
                    'w-full': numVisible <= 1
                  })}
                >
                  {itemTemplate(item)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          icon="pi pi-angle-right"
          className="p-button-rounded p-button-secondary p-button-outlined min-w-[48px] h-[48px]"
          aria-label="Bookmark"
          onClick={onNext}
        />
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex gap-2">
          {[...Array(numNav)].map((_, index) => (
            <div
              className={clsx('w-[40px] h-[5px] bg-gray-500  rounded-md', {
                'bg-red-400': index === count
              })}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
