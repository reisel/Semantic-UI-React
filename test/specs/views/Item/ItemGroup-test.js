import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemGroup from 'src/views/Item/ItemGroup'

describe('ItemGroup', () => {
  common.hasUIClassName(ItemGroup)
  common.isConformant(ItemGroup)
  common.rendersChildren(ItemGroup)

  common.propKeyOnlyToClassName(ItemGroup, 'divided')
  common.propKeyOnlyToClassName(ItemGroup, 'link')

  common.propKeyOrValueAndKeyToClassName(ItemGroup, 'relaxed', ['very'])

  describe('items prop', () => {
    it('renders children', () => {
      const firstText = faker.hacker.phrase()
      const secondText = faker.hacker.phrase()
      const items = [
        { content: firstText },
        { content: secondText },
      ]

      const wrapper = mount(<ItemGroup items={items} />)
      const itemWrappers = wrapper.find('Item')

      wrapper.should.have.exactly(2).descendants('Item')
      itemWrappers.first().find('ItemContent').should.contain.text(firstText)
      itemWrappers.last().find('ItemContent').should.contain.text(secondText)
    })
  })
})
