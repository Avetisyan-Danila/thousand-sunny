import SlimSelect from 'slim-select'

const elements = document.querySelectorAll('select');

elements.forEach((select) => {
  const selectId = select.getAttribute('id');

  new SlimSelect({
    select: `#${selectId}`,
    allowDeselectOption: true,
    placeholder: selectId,
  })
})
