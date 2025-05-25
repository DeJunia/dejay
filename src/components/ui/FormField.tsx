import React from 'react'

interface formFiledProps {
  value?: string
  placeholder?: string
  title?: string
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<formFiledProps> = ({value, placeholder, title, handleInputChange}) => {
  return (
    <div className='flex flex-col gap-3'>
      <p>{title}</p>
      <input type="text" value={value} placeholder={placeholder} onChange={handleInputChange} className="px-4 py-2 border-2 border-gray-100 rounded-lg" />
    </div>
  )
}

export default FormField
