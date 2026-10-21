type ResumeImageData = {
  url: string
  visible: boolean
}

type ResumeInfosData = {
  fullName: string
  headline: string
  email: string
  website: string
  phone: string
  location: string
}

type ResumeContentData = {
  image: ResumeImageData
  infos: ResumeInfosData
  summary: string
}

type ResumeData = {
  content: ResumeContentData
  // structure: ResumeStructureData
}
