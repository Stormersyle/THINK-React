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
      aria-labelledby="member-modal-name"
      onClose={onClose}
      onClick={handleClick}
    >
      {member && (
        <>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close bio"
          >
            &times;
          </button>
          <div className="modal-body">
            <div className="modal-photo">
              <img src={member.photo} alt="" />
            </div>
            <div className="modal-info">
              <h2 id="member-modal-name">{member.name}</h2>
              <p className="class-year">{member.classYear}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
