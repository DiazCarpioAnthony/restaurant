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


CREATE TABLE plato(
    idPlato INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(150),
    precio INT(11),
    imagen VARCHAR(50)
);

CREATE TABLE bebida(
    idBebida INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(150),
    precio INT(11),
    imagen VARCHAR(50)
);

INSERT INTO `bebida` (`idBebida`, `nombre`, `descripcion`, `precio`, `imagen`) VALUES
(1, 'Vaso de linaza', 'Vaso personal de Linaza (500 ml)', 1.5, 'assets/img/bebida/linaza.jpg'),
(2, 'Vaso de chicha', 'Vaso personal de Chicha (500 ml)', 1.5, 'assets/img/bebida/chicha.jpg'),
(3, 'Gaseosa personal Inka Kola', 'Gaseosa personal Inka Kola (500 ml)', 2.5, 'assets/img/bebida/inka-kola.jpg'),
(4, 'Gaseosa personal Coca Kola', 'Gaseosa personal Coca Kola (500 ml)', 1.5, 'assets/img/bebida/coca-kola.jpg'),
(5, 'Vaso de agua mineral', 'Vaso de agua mineral (500 ml)', 1.5, 'assets/img/bebida/agua.jpg'),
(6, 'Gaseosa Inka kola de 1L', 'Gaseosa Inka kola de 1L', 4.5, 'assets/img/bebida/inka-kola-litro.jpg'),
(7, 'Gaseosa Coca kola de 1L', 'Gaseosa Coca kola de 1L', 4.5, 'assets/img/bebida/inka-kola-litro.jpg'),
(8, 'Gaseosa Inka kola de 3L', 'Gaseosa Inka kola de 3L', 6.5, 'assets/img/bebida/inka-kola-litro3.jpg'),
(9, 'Gaseosa Coca kola de 3L', 'Gaseosa Coca kola de 3L', 6.5, 'assets/img/bebida/coca-kola-litro3.jpg');

INSERT INTO `plato` (`idPlato`, `nombre`, `descripcion`, `precio`, `imagen`) VALUES
(1, 'Porción de Anticucho Clásica', 'Dos palitos de anticuchos de res (200g) con papa sancochada.', 7, 'assets/img/plato/anticucho.jpg'),
(2, 'Porción de Pancita Clásica', 'Porción de pancita de res (200g) con papa sancochada.', 7, 'assets/img/plato/pancita.jpg'),
(3, 'Porción de Rachi Clásica', 'Porción de rachi de res (200g) con papa sancochada.', 8, 'assets/img/plato/rachi.jpg'),
(4, 'Papa Rellena Clásica', 'Papa rellena de corazón de res, huevo, cebolla y puntitas de corazón de res.', 3, 'assets/img/plato/papa-rellena.jpg'),
(5, 'Porción de Mixta Clásica Anticucho + Pancita', 'Un palito de anticucho de res (100g) y pancita (80g) con papa sancochada.', 7, 'assets/img/plato/anticucho-pancita.jpg'),
(6, 'Porción de Mixta Clásica Anticucho + Rachi', 'Un palito de anticucho de res (100g) y rachi(80g) con papa sancochada.', 8, 'assets/img/plato/anticucho-rachi.jpg'),
(7, 'Porción de Mixta Super Anticucho + Pancita', 'Dos palitos de anticucho de res (200g) y pancita (50g) con papa sancochada.', 10, 'assets/img/plato/anticucho2-pancita.jpg'),
(8, 'Porción de Mixta Super Anticucho + Rachi', 'Dos palitos de anticucho de res (200g) y rachi (80g) con papa sancochada.', 12, 'assets/img/plato/anticucho2-rachi.jpg'),
(9, 'Porción de Mixta Super Anticucho + Rachi + Pancita', 'Un palito de anticucho de res (100g), rachi (50g) y pancita (50g) con papa sancochada.', 12, 'assets/img/plato/anticucho-rachi-pancita.jpg'),
(10, 'Porción de Mixta Suprema Anticucho + Rachi + Pancita', 'Dos palitos de anticucho de res (200g), rachi (80g) y pancita (80g) con papa sancochada.', 15, 'assets/img/plato/anticucho2-rachi-pancita.jpg');

