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
  const refVisible = useRef(numVisible)

  const classNames = clsx('w-full carousel', {
    [className as string]: className
  })

  const numNav = value.length - refVisible.current + 1

  const onPrev = () => {
    const quantityNav = value.length
    setCount((e) => (e - 1 < 0 ? quantityNav - 1 : e - 1))
  }
  const onNext = () => {
    const quantityNav = value.length - refVisible.current
    setCount((e) => (e + 1 > quantityNav ? 0 : e + 1))
  }

  useEffect(() => {
    if (refBoxSlider.current?.clientWidth) {
      setWidthSlider(refBoxSlider.current?.clientWidth)
    }

    if (window.outerWidth && numVisible > 1) {
      if (window.outerWidth > 1024) {
        refVisible.current = numVisible
      } else if (window.outerWidth > 986) {
        refVisible.current = 3
      } else if (window.outerWidth > 780) {
        refVisible.current = 2
      } else if (window.outerWidth > 640) {
        refVisible.current = 2
      } else if (window.outerWidth > 0) {
        refVisible.current = 1
      }
    }

    window.addEventListener(
      'resize',
      (e: any) => {
        if (e.target.outerWidth && numVisible > 1) {
          if (e.target.outerWidth > 1024) {
            refVisible.current = numVisible
          } else if (e.target.outerWidth > 986) {
            refVisible.current = 3
          } else if (e.target.outerWidth > 780) {
            refVisible.current = 2
          } else if (e.target.outerWidth > 640) {
            refVisible.current = 2
          } else if (e.target.outerWidth > 0) {
            refVisible.current = 1
          }
        }

        if (refBoxSlider.current?.clientWidth) {
          setWidthSlider(refBoxSlider.current?.clientWidth)
        }
      },
      false
    )
    return () =>
      window.removeEventListener(
        'resize',
        (e: any) => {
          if (e.target.outerWidth && numVisible > 1) {
            if (e.target.outerWidth > 1024) {
              refVisible.current = 4
            } else if (e.target.outerWidth > 780) {
              refVisible.current = 2
            } else if (e.target.outerWidth > 640) {
              refVisible.current = 2
            } else if (e.target.outerWidth > 0) {
              refVisible.current = 1
            }
          }

          if (refBoxSlider.current?.clientWidth) {
            setWidthSlider(refBoxSlider.current?.clientWidth)
          }
        },
        false
      )
  }, [])

  useEffect(() => {
    const time = setInterval(onNext, autoplayInterval)
    return () => clearInterval(time)
  }, [])

  useEffect(() => {
    refBoxSliders.current.style.transform = `translateX(-${
      (widthSlider / refVisible.current) * count
    }px)`
    console.log(refVisible.current)
  }, [count, widthSlider])

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
                key={item.toString()}
                className="flex justify-center h-full"
                style={{ width: `${widthSlider / refVisible.current}px` }}
              >
                <div
                  ref={refBoxItem}
                  className={clsx('h-full flex items-center', {
                    'w-fit mr-3': refVisible.current > 1,
                    'w-full': refVisible.current <= 1
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
      <div className="flex justify-center mt-2 w-[80%] m-auto">
        <div className="flex gap-3 w-full justify-center">
          {[...Array(numNav)].map((_, index) => (
            <div
              key={index}
              className={clsx('flex-1 min-w-[5px] max-w-[44px] h-[5px] bg-gray-500  rounded-md', {
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
