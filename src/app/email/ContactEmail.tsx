import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type contactProps = {
  name: string
  message: string
}

const ContactEmail = ({ name, message }: contactProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from Portfolio Site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading className=''>Message from {name}</Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              {/* <Text>Sender's email</Text> */}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export { ContactEmail }
