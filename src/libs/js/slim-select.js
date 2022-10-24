import SlimSelect from 'slim-select'

const allSelects = document.querySelectorAll('select');

allSelects.forEach((select) => {
  const selectId = select.getAttribute('id');

  new SlimSelect({
    select: `#${selectId}`,
    allowDeselectOption: true,
    placeholder: selectId,
  })
})
