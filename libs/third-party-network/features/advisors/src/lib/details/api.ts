import {
  getData,
  getFirstOpcoEngagementDate,
  getOpcoEngagementNames,
  getTaxonomyTagsText
} from '@acmehealth/third-party-network/data-assets'

import { Advisor, OpcoEngagement } from './types'

export const getAdvisor = async (advisorId: string) => {
  const data = await getData()

  const rawAdvisor = data.find(row => row.Key === advisorId)
  if (!rawAdvisor) return null

  const advisor: Advisor = {
    id: rawAdvisor.Key,
    name: rawAdvisor['Epic Name'],
    bio: rawAdvisor.Bio,
    status: rawAdvisor['Acme Advise - Contract Status'],
    organization: rawAdvisor['Acme Advise - Current Organization'],
    role: rawAdvisor['Acme Advise - Current Role'],
    cv: rawAdvisor['Acme Advise - Link to CV'],
    linkedIn: rawAdvisor['Profile Link'],
    website: rawAdvisor.Website,
    categories: rawAdvisor['Acme Advise - Category'],
    tags: rawAdvisor['Acme Advise-Tags'],
    referrerName: rawAdvisor['Acme Employee Name'],
    referallDate: rawAdvisor['Created Date'],
    opcoEngagementNames: getOpcoEngagementNames(rawAdvisor, data),
    tier: rawAdvisor['Acme Advise - Advisor Tier'],
    previousOrgAndRole: rawAdvisor['Previous Organization and Role'],
    taxonomyTagsText: getTaxonomyTagsText(rawAdvisor),
    opcoConflicts: rawAdvisor['OpCo Conflicts'],
    numIntroductions: rawAdvisor['Number of OpCo Calls'],
    firstEngagementDate: getFirstOpcoEngagementDate(rawAdvisor, data)
  }

  return advisor
}

export const getOpcoEngagements = async (
  advisorId: string,
  opcoName: string
) => {
  const data = await getData()
  const requests = data.filter(
    row =>
      (row['Issue Type'] === 'Introduction' ||
        row['Issue Type'] === 'Contract') &&
      row.parent === advisorId &&
      row['OpCo/NewCo Name'] === opcoName
  )

  return requests
    .map<OpcoEngagement>(r => ({
      id: r.Key,
      type: r['Issue Type'],
      reviewDate: r.Created,
      reviewerName: r['Acme Employee Name'],
      reviewerExpertise: r['Area of Expertise - form'],
      rating: r.Rating
    }))
    .sort((a, b) => -1 * (a.type?.localeCompare(b.type ?? '') ?? 0))
}
