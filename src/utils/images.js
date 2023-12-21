import Photosnap from '../assets/images/photosnap.svg'
import Manage from '../assets/images/manage.svg'
import Account from '../assets/images/account.svg'
import MyHome from '../assets/images/myhome.svg'
import LoopStudio from '../assets/images/loop-studios.svg'
import Faceit from '../assets/images/faceit.svg'
import Shortly from '../assets/images/shortly.svg'
import Insure from '../assets/images/insure.svg'
import EyecamCo from '../assets/images/eyecam-co.svg'
import TheAirFilterCompany from '../assets/images/the-air-filter-company.svg'

export default function imageUrl (url) {
  switch (url) {
    case 'Photosnap':
      return Photosnap
    case 'Manage':
      return Manage
    case 'Account':
      return Account
    case 'MyHome':
      return MyHome
    case 'Loop Studio':
      return LoopStudio
    case 'FaceIt':
      return Faceit
    case 'Shortly':
      return Shortly
    case 'Insure':
      return Insure
    case 'Eyecam Co.':
      return EyecamCo
    default:
      return TheAirFilterCompany
  }
}
