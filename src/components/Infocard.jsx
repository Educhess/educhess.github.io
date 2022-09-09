import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'
import ContactModal from './ContactModal'
import '../index.css'

const App = () => {
  const url = 'https://randomuser.me/api/?results=200'
  const [selectedContact, setSelectedContact] = useState(null)
  const [contactList, setContactList] = useState()



  return (
    <div className="bg-pink100">
      <section className="grid grid-cols-1 sm:grid-cols-2s md:grid-cols-4 gap-6 p-10 md:p-20 lg:p-20 py-0">

        <ContactCards contactList={contactList} setSelectedContact={setSelectedContact} />
      </section>
      <AnimatePresence>
        {selectedContact &&
          <ContactModal
            contact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default App
