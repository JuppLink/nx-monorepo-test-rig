import {
  mockMarketplaceBuyerCompany,
  mockMarketplaceSellerCompany,
  mockAcmeOpCoCompany,
  mockAcmeThemeCompany
} from './company'
import { api } from './openapi-msw-setup'

describe('Company fixtures validation against API contract', () => {
  describe('Get company', () => {
    it('Acme OpCo company', () => {
      const valid = api.validateResponse(mockAcmeOpCoCompany, 'get_5', 200)
      expect(valid.errors).toBeNull()
    })
    it('Acme Theme company', () => {
      const valid = api.validateResponse(mockAcmeThemeCompany, 'get_5', 200)
      expect(valid.errors).toBeNull()
    })
    it('Marketplace seller company', () => {
      const valid = api.validateResponse(
        mockMarketplaceSellerCompany,
        'get_5',
        200
      )
      expect(valid.errors).toBeNull()
    })
    it('Marketplace buyer company', () => {
      const valid = api.validateResponse(
        mockMarketplaceBuyerCompany,
        'get_5',
        200
      )
      expect(valid.errors).toBeNull()
    })
  })
})
