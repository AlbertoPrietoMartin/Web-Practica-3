"use client";

type Props = {
  setSearchQuery: (value: string) => void;
};

export const SearchBar = ({ setSearchQuery }: Props) => {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};