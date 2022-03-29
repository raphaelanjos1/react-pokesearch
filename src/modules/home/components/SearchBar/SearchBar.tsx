import React from 'react'
import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react'

export default function SearchBar() {
  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='Enter Pokemon name'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
