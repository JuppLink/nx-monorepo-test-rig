import { z } from 'zod'

const optionalStringSchema = z.string().optional()

export const dataSheetSchema = z.array(
  z
    .object({
      'Issue Type': z.enum(['Epic', 'Introduction', 'Contract']).optional(),
      Key: optionalStringSchema,
      parent: optionalStringSchema,
      'Epic Name': optionalStringSchema,
      Created: optionalStringSchema,
      Bio: optionalStringSchema,
      'Acme Advise - Category': optionalStringSchema,
      'Acme Advise-Tags': optionalStringSchema,
      'Acme Advise - Contract Status': optionalStringSchema,
      'Acme Advise - Advisor Tier': optionalStringSchema,
      'Acme Advise - Current Organization': optionalStringSchema,
      'Acme Advise - Current Role': optionalStringSchema,
      'Acme Advise - Link to CV': optionalStringSchema,
      Website: optionalStringSchema,
      'Profile Link': optionalStringSchema,
      'Referred Party': optionalStringSchema,
      'Created Date': optionalStringSchema,
      'Acme Employee Name': optionalStringSchema,
      'Acme Employee Email': optionalStringSchema,
      'Additional Emails': optionalStringSchema,
      'OpCo/NewCo Name': optionalStringSchema,
      'Acme Advise - OpCo/Concept Description': optionalStringSchema,
      Rating: z.coerce.number().optional(),
      'Area of Expertise - form': optionalStringSchema,
      'T1 Taxonomy Tag': optionalStringSchema,
      'T2 Taxonomy Tag': optionalStringSchema,
      'T3 Taxonomy Tag': optionalStringSchema,
      'Contract End Date': optionalStringSchema,
      'Contract Start Date': optionalStringSchema,
      'Previous Organization and Role': optionalStringSchema,
      'OpCo Conflicts': optionalStringSchema,
      'Number of OpCo Calls': optionalStringSchema,
      'Introduction date': optionalStringSchema
    })
    .transform(data => {
      const splitter = (value?: string) =>
        value
          ?.split(';')
          ?.filter(v => Boolean(v))
          ?.map(v => v.split('_').join(' '))

      return {
        ...data,
        'Acme Advise - Category': splitter(data['Acme Advise - Category']),
        'Acme Advise-Tags': splitter(data['Acme Advise-Tags']),
        'T1 Taxonomy Tag': data['T1 Taxonomy Tag']?.split('_').join(' '),
        'T2 Taxonomy Tag': data['T2 Taxonomy Tag']?.split('_').join(' '),
        'T3 Taxonomy Tag': data['T3 Taxonomy Tag']?.split('_').join(' ')
      }
    })
)
