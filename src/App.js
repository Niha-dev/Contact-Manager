import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [viewMode, setViewMode] = useState('form'); // 'form', 'contacts', 'favorites'

  const addContact = (contact) => setContacts([contact, ...contacts]);

  const updateContact = (updatedContact) => {
    const updated = contacts.map((c, i) =>
      i === editingIndex ? updatedContact : c
    );
    setContacts(updated);
    setEditingIndex(null);
  };

  const deleteContact = (index) => {
  const confirmed = window.confirm('Are you sure you want to delete this contact?');
  if (confirmed) {
    setContacts(contacts.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  }
};


  const editContact = (index) => setEditingIndex(index);

  // Search handler
  const handleSearch = (query) => setSearchText(query.toLowerCase());

  const toggleFavorite = (index) => {
    const updated = [...contacts];
    updated[index].isFavorite = !updated[index].isFavorite;
    setContacts(updated);
  };

  // Filter by search AND view mode
  const filteredContacts = contacts.filter((c) => {
  const matchesSearch =
    c.name.toLowerCase().includes(searchText) ||
    c.email.toLowerCase().includes(searchText) ||
    c.phone.includes(searchText);

  const matchesView = viewMode === 'favorites' ? c.isFavorite : true;
  return matchesSearch && matchesView;
});

  return (
  <div className="d-flex">
    <Sidebar onViewChange={setViewMode} onSearch={handleSearch} />
    <div className="container-fluid p-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Manage Contacts</h2>
          <ContactForm
            onAdd={addContact}
            onUpdate={updateContact}
            contactToEdit={contacts[editingIndex]}
            isEditing={editingIndex !== null}
          />

          {(viewMode === 'contacts' || viewMode === 'favorites') && (
            <>
              {/* Use filteredContacts here */}
              <ContactList
  contacts={filteredContacts}
  onDelete={deleteContact}
  onEdit={editContact}
  onToggleFavorite={toggleFavorite}
/>

            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

}

export default App;
