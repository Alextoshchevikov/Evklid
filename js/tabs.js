document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__step__item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.work_support').forEach(function (tabContent) {
        tabContent.classList.remove('work_support-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work_support-active')
      document.querySelector('.work__step__item_selected').classList.remove('work__step__item_selected')

    })

  })
})
