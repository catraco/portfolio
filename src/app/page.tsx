
'use client'

import {
  Header,
  Introduction
} from '@/components/modules'
import { useState } from 'react'
import { SECTIONS } from "@/data/modules"

export default function Home() {

  const [section, setSection] = useState(SECTIONS[0].name)

  return (

    <main className="main">

      <Header section={section} setSection={setSection} />
      { section === 'introduction' && <Introduction /> }

    </main>

  )

}
