const endent = require('endent').default

function processNode(node, { error }) {
  const { attributes } = node
  const { option } = attributes

  if (!option) {
    return error(
      `Found a "::testing-type-specific-option" directive without a "option" attribute. This directive should look like "::testing-type-specific-option{option=configOptionName}".`
    )
  }

  const message = `Depending on which Cypress [test type](/guides/overview/choosing-testing-type)
  you are using, you can configure your \`OPTION_HERE\` accordingly.`

  return endent`
    <Alert type="info">

    <strong class="alert-header"><Icon name="cogs"></Icon> Support File, Per Test
    Type</strong>

    ${message.replace('OPTION_HERE', option)}

    - [component](/guides/references/configuration#component)
    - [e2e](/guides/references/configuration#e2e)

    </Alert>`
}

module.exports = {
  type: 'leafDirective',
  name: 'testing-type-specific-option',
  processNode,
}
