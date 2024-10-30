'use client'

import { Label } from '@/components/ui/label'

import * as RPNInput from 'react-phone-number-input'
import { PhoneInput, FlagComponent, CountrySelect } from '@/components/ui/input-phone'
import { useState } from 'react'

interface InputPhoneProps {
  label: string
  name: string
  required?: boolean
}

export function InputPhone({ label, name, required }: InputPhoneProps) {
  const [value, setValue] = useState('')

  return (
    <div className="space-y-1 w-full">
      <Label htmlFor="user-phone">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>

      <RPNInput.default
        className="flex rounded-lg shadow-sm shadow-black/[.04]"
        international
        flagComponent={FlagComponent}
        defaultCountry="BR"
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        id={name}
        name={name}
        placeholder="insira seu telefone"
        value={value}
        onChange={(newValue) => setValue(newValue ?? '')}
      />
    </div>
  )
}
