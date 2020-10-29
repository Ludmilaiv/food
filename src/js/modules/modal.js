const modal = () => {
  const modalButtons = document.querySelectorAll(".open-modal")

  const showModal = (id) => {
    const modalWindow = document.getElementById(id)
    modalWindow.classList.add("modal_open")
    setTimeout(() => modalWindow.style.opacity = "1", 1)
    modalWindow.addEventListener("click", function myListenner(e){
      const target = e.target
      if (target.closest(".modal__close") || !target.closest(".modal__dialog"))
      {
        e.preventDefault();
        closeModal(modalWindow);
        modalWindow.removeEventListener("click", myListenner)
      }
      

    })
  }

  const closeModal = (modalWindow) => {
    modalWindow.style.opacity = "0"
    setTimeout(() => modalWindow.classList.remove("modal_open"), 300)
  }

  modalButtons.forEach(elem => {
    const modalId = "modal-" + elem.id
    elem.addEventListener("click", (e) => {
      e.preventDefault()
      showModal(modalId)
    })
  });
  
}

export default modal;