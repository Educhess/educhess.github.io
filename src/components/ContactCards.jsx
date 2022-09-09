import { motion } from 'framer-motion'

var aboutCards = [{
  icon: "/public/teacher.png",
  title: 'Mentoring',
  desc: 'Advanced coaching with 1-1 interaction',
  inside: 'Mentorship is the influence, guidance, or direction given by a mentor. Mentor is someone who teaches or gives help and advice to a less experienced and often younger person. In an organizational setting, a mentor influences the personal and professional growth of a menteeWe are into 1-to-1 personal coaching and group sessions.'
},
{
  icon: 'https://img.icons8.com/dusk/50/000000/brainstorm-skill.png',
  title: 'Analysis',
  desc: 'Game strategy and tactic analysis \n Opening and endgame analysis.',
  inside: 'We anmalyse the games so that the players can improve their understanding and in depth knowledge of the game Analysis of a position is a very important skill to master for a chess player of any level. Many chess players analyze positions almost spontaneously, without a well-defined plan. ... Material on the board is one of the most important elements for position analysis.'
},
{
  icon: "https://img.icons8.com/nolan/50/financial-dynamic-presentation.png",
  title: 'Training',
  desc: 'Online group training with beginner and advanced level \n Puzzle solving \n Weekly tournaments',
  inside: 'Analysis of a position is a very important skill to master for a chess player of any level. Many chess players analyze positions almost spontaneously, without a well-defined plan. ... Material on the board is one of the most important elements for position analysis.'
},
{
  icon: "https://img.icons8.com/office/16/000000/clock--v1.png",
  title: 'Tournamnets',
  desc: 'World Amateur Champion, University Blue, Fide Rating: 1705 ',
  inside: 'Analysis of a position is a very important skill to master for a chess player of any level. Many chess players analyze positions almost spontaneously, without a well-defined plan. ... Material on the board is one of the most important elements for position analysis.'
}

]
const ContactCards = ({ contactList, setSelectedContact }) => {
  return (
    <>
      {aboutCards?.map((contact, index) => (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: index / 5 }}
          drag={false}
          dragElastic={1}
          dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
          className="bg-black text-white h-80 w-full rounded-lg shadow-md mr-96"
          key={index}
          onClick={() => setSelectedContact(contact)}
        >
          <img alt="" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.icon} />
          <figcaption className="text-center mt-5">
            {contact.desc}
            <p className="text-white font-bold text-xl mb-2">
              {contact.title}

            </p>
          </figcaption>
        </motion.button >

      ))}
    </>
  )
}

export default ContactCards
