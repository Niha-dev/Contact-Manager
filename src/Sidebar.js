import React from 'react';

function Sidebar({ onViewChange, onSearch }) {
  return (
    <div className="d-flex flex-column bg-light p-3" style={{ width: '220px', height: '100vh' }}>
      <h4 className="mb-4">Contacts</h4>
      <button className="btn btn-outline-primary mb-2" onClick={() => onViewChange('form')}>
        Manage Contact
      </button>
      
      <button className="btn btn-outline-primary mb-2" onClick={() => onViewChange('contacts')}>
        All Contacts
      </button>
      <button className="btn btn-outline-warning mb-3" onClick={() => onViewChange('favorites')}>
        Favorites ⭐
      </button>
    </div>
  );
}

export default Sidebar;
