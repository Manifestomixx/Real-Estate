import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <BootstrapPagination className="justify-content-center mt-4">
      <BootstrapPagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
      <BootstrapPagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      
      {pageNumbers.map(number => (
        <BootstrapPagination.Item 
          key={number} 
          active={number === currentPage} 
          onClick={() => onPageChange(number)}
        
        >
          {number}
        </BootstrapPagination.Item>
      ))}
      
      <BootstrapPagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <BootstrapPagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
    </BootstrapPagination>
  );
};

export default Pagination;
