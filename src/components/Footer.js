import React from 'react'

export default function Footer() {
  return (
    <div className="container fixed-bottom">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p className="text-center text-muted">&copy; 2022 PartCombinator, Inc</p>
    </footer>
  </div>
  );
}
