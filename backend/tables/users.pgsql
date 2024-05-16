CREATE TABLE Users (
    IDuser SERIAL PRIMARY KEY,
    email VARCHAR(255),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    pseudo VARCHAR(255),
    mot_de_passe VARCHAR(255),
    adresse VARCHAR(255),
    ville VARCHAR(255),
    code_postal VARCHAR(10),
    telephone VARCHAR(15)
);
