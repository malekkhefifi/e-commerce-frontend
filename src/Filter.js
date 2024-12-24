import React from 'react';
import './Filter.css'
const Filter = ({
  categories = [],
  brands = [],
  sizes = [],
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedSizes,
  setSelectedSizes,
}) => {

  // Fonction pour gérer le changement de taille (multi-sélection possible)
  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      // Si la taille est déjà sélectionnée, on la retire
      setSelectedSizes(selectedSizes.filter(item => item !== size));
    } else {
      // Sinon, on l'ajoute à la liste des tailles sélectionnées
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <div className="filter-container">
      <h3>Filtres</h3>

      {/* Filtre par catégorie */}
      <div className="filter-group">
        <label htmlFor="category">Catégorie</label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Toutes les catégories</option>
          {categories && categories.length > 0 && categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Filtre par marque */}
      <div className="filter-group">
        <label htmlFor="brand">Marque</label>
        <select
          id="brand"
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value="">Toutes les marques</option>
          {brands && brands.length > 0 && brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Filtre par taille */}
      <div className="filter-group">
        <label>Taille</label>
        <div className="checkbox-container">
          {sizes && sizes.length > 0 && sizes.map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;


