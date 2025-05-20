import React, { useState, useEffect } from 'react';

function ContactForm({ onAdd, onUpdate, contactToEdit, isEditing }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', isFavorite: false });

  useEffect(() => {
    if (isEditing && contactToEdit) {
      setForm(contactToEdit);
    } else {
      setForm({ name: '', email: '', phone: '', isFavorite: false });
    }
  }, [isEditing, contactToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleFavorite = () => {
    setForm({ ...form, isFavorite: !form.isFavorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;

    if (isEditing) {
      onUpdate(form);
    } else {
      onAdd({ ...form, isFavorite: false }); // always add new contacts as not favorite initially
      setForm({ name: '', email: '', phone: '', isFavorite: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      {/* Show favorite toggle only in edit mode */}
      {isEditing && (
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={form.isFavorite}
            onChange={toggleFavorite}
            id="favoriteCheckbox"
          />
          <label className="form-check-label" htmlFor="favoriteCheckbox">
            Mark as Favorite ⭐
          </label>
        </div>
      )}

      <div className="mt-3 text-end">
        <button className={`btn ${isEditing ? 'btn-warning' : 'btn-success'}`}>
          {isEditing ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
