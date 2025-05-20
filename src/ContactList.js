import React from 'react';

function ContactList({ contacts, onDelete, onEdit, onToggleFavorite }) {
  return (
    <div className="mt-4">
      <h4 className="mb-3">Contacts</h4>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="list-group">
          {contacts.map((contact, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{contact.name}</h5>
                <p className="mb-0">📧 {contact.email}</p>
                <p className="mb-0">📞 {contact.phone}</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm"
                  onClick={() => onToggleFavorite(index)}
                  title="Toggle Favorite"
                >
                  {contact.isFavorite ? '⭐' : '☆'}
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
