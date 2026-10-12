import {
  getAdvisors,
  getData,
  getOpcoEngagementNames,
  getTaxonomyTagsText
} from '@acmehealth/third-party-network/data-assets'

import { AdvisorList, AdvisorListData } from './types'

export const getAllAdvisors = async () => {
  const data = await getData()

  const advisors: AdvisorList = getAdvisors(data).map<AdvisorListData>(
    advisor => ({
      id: advisor.Key,
      name: advisor['Epic Name'],
      bio: advisor.Bio,
      status: advisor['Acme Advise - Contract Status'],
      organization: advisor['Acme Advise - Current Organization'],
      advisorRole: advisor['Acme Advise - Current Role'],
      linkedIn: advisor['Profile Link'],
      categories: advisor['Acme Advise - Category'],
      tags: advisor['Acme Advise-Tags'],
      expertise: '',
      role: advisor['Acme Advise - Current Role'],
      opcoEngagementNames: getOpcoEngagementNames(advisor, data),
      tier: advisor['Acme Advise - Advisor Tier'],
      previousOrgAndRole: advisor['Previous Organization and Role'],
      taxonomyTagsText: getTaxonomyTagsText(advisor),
      opcoConflicts: advisor['OpCo Conflicts'],
      numOpcoCalls: advisor['Number of OpCo Calls']
    })
  )

  return advisors
}
