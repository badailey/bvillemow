/*
 * Notes on Schema
 * Sections should live in sections/
 * If you'd like an icon for the UI, check https://icons.sanity.build/all?scheme=dark
 *
 */
import address from './objects/address'
import blockContent from './objects/blockContent'
import company from './objects/company'
import companySocialMedia from './objects/companySocialMedia'
import donation from './sections/donation'
import facebook from './sections/facebook'
import faq from './sections/faq'
import hero from './sections/hero'
import image from './sections/image'
import navigation from './documents/navigation'
import navigationLink from './objects/navigationLink'
import navigationSection from './objects/navigationSection'
import content from './sections/content'
import page from './documents/page'
import person from './documents/person'
import photoGallery from './documents/photoGallery'
import {galleryImage, galleryNewRow} from './objects/galleryImage'
import galleryRow from './objects/galleryRow'
import qa from './objects/qa'
import siteConfig from './documents/siteConfig'
import teamMember from './objects/teamMember'
import teamMembers from './sections/teamMembers'
import testimonial from './objects/testimonial'
import testimonials from './sections/testimonials'
import twoColumnContent from './sections/twoColumnContent'
import workSpace from './objects/workSpace'

export const schemaTypes = [
  address,
  blockContent,
  company,
  companySocialMedia,
  content,
  donation,
  facebook,
  faq,
  galleryImage,
  galleryNewRow,
  galleryRow,
  hero,
  image,
  navigation,
  navigationLink,
  navigationSection,
  page,
  person,
  photoGallery,
  qa,
  siteConfig,
  teamMember,
  teamMembers,
  testimonial,
  testimonials,
  twoColumnContent,
  workSpace,
]
