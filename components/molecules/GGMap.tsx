import React from 'react'
import Title from '../atoms/Title'

const GGMap: React.FC = () => {
  return (
    <div className="mt-5">
      <Title className="text-lg">Bản đồ</Title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.662970615454!2d108.59071982919227!3d13.30967299941468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80e16ed5b04ab424!2zMTPCsDE4JzM0LjgiTiAxMDjCsDM1JzI4LjYiRQ!5e0!3m2!1svi!2s!4v1674203605091!5m2!1svi!2s"
        className="w-full h-[60vh] mt-5"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default GGMap
