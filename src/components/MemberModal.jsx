import { useEffect, useRef } from 'react'

export default function MemberModal({ member, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (member) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [member])

  const handleClick = (e) => {
    if (e.target === ref.current) onClose()
  }

  return (
    <dialog
      ref={ref}
      className="modal"
      onClose={onClose}
      onClick={handleClick}
    >
      {member && (
        <>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="modal-body">
            <div className="modal-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="modal-info">
              <h4>{member.name}</h4>
              <h5>{member.classYear}</h5>
              <p>{member.bio}</p>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
