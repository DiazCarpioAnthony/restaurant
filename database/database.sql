CREATE DATABASE restaurant_bd;

USE restaurant_bd;

CREATE TABLE fraseDia(
    idFrase INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(150),
    autor VARCHAR(50)
);

INSERT INTO 'frasedia' ('idFrase', 'descripcion', 'autor') VALUES
(1, 'El descubrimiento de un nuevo plato es de más provecho para la humanidad que el descubrimiento de una estrella', 'Jean Anthelme Brillat - Savarin'),
(2, 'La cocina de autor es poner tu personalidad en lo que haces y ese sentimiento la convierte en algo distinto', 'Ferran Adriá'),
(3, 'El secreto del éxito en la vida es comer lo que te gusta y dejar que la comida combata dentro', 'Mark Twain'),
(4, 'Una receta no tiene alma. Es el cocinero quien debe darle alma a la receta', 'Thomas Keller'),
(5, 'Una de las mejores cosas de la vida es que debemos interrumpir regularmente cualquier labor y concentrar nuestra atención en la comida', 'Luciano Pavarotti'),
(6, 'No puedes tener una influencia de la cocina de un país si no la entiendes. Y para entenderla, tienes que estudiarla', 'Ferran Adrià'),
(7, 'Una comida bien equilibrada es como un poema al desarrollo de la vida', 'Anthony Burgess'),
(8, 'Lo importante no es lo que; se come, sino cómo se come', 'Epicteto'),
(9, 'El ingrediente más importante para un cocinero es la humildad', 'Gastón Acurio'),
(10, 'Y fuimos todos felices, en el Salón de la felicidad, entre ríos de tamarindo y cataratas de Inca Kola', 'Gastón Acurio');


