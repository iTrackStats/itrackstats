"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface SearchboxProps {
  onSearchChange: (searchTerm: string) => void;
}

const Searchbox: React.FC<SearchboxProps> = ({ onSearchChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleSearchbox = () => {
    setIsOpen((prev) => !prev);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <>
      <div className={`w-1/2`}>
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <Input
            type="text"
            placeholder="Escriba su búsqueda aquí"
            className=""
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default Searchbox;
