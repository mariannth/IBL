DROP DATABASE IF EXISTS `IBL`; 

CREATE SCHEMA IF NOT EXISTS `IBL` DEFAULT CHARACTER SET utf8 ;
USE `IBL` ;

-- -----------------------------------------------------
-- Table `mydb`.`tipo_de_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`tipo_de_usuario` (
  `id_tipo_de_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_del_tipo` VARCHAR(45) NOT NULL,
  `descripcion_tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tipo_de_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `rfc` VARCHAR(45) NOT NULL,
  `tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_usuario`, `tipo_de_usuario_id_tipo_de_usuario`),
  INDEX `fk_usuario_tipo_de_usuario_idx` (`tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_tipo_de_usuario`
    FOREIGN KEY (`tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`tipo_de_usuario` (`id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado` TEXT NOT NULL,
  `total` VARCHAR(45) NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  `usuario_tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_id_usuario` ASC, `usuario_tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id_usuario` , `usuario_tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`usuario` (`id_usuario` , `tipo_de_usuario_id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `url` VARCHAR(45) NOT NULL,
  `stock` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `nombre_producto` VARCHAR(45) NOT NULL,
  `categoria_id_categoria` INT NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  `usuario_tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `categoria_id_categoria`, `usuario_id_usuario`, `usuario_tipo_de_usuario_id_tipo_de_usuario`),
  INDEX `fk_producto_categoria1_idx` (`categoria_id_categoria` ASC) VISIBLE,
  INDEX `fk_producto_usuario1_idx` (`usuario_id_usuario` ASC, `usuario_tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_id_categoria`)
    REFERENCES `IBL`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_usuario1`
    FOREIGN KEY (`usuario_id_usuario` , `usuario_tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`usuario` (`id_usuario` , `tipo_de_usuario_id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `descuento` VARCHAR(45) NOT NULL,
  `metodo` VARCHAR(45) NOT NULL,
  `iva` VARCHAR(45) NOT NULL,
  `folio_factura` VARCHAR(45) NOT NULL,
  `pedido_id_pedido` INT NOT NULL,
  PRIMARY KEY (`id_pago`, `pedido_id_pedido`),
  INDEX `fk_pago_pedido1_idx` (`pedido_id_pedido` ASC) VISIBLE,
  CONSTRAINT `fk_pago_pedido1`
    FOREIGN KEY (`pedido_id_pedido`)
    REFERENCES `IBL`.`pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '									';

-- Inserts para tipo_de_usuario
INSERT INTO tipo_de_usuario (nombre_del_tipo, descripcion_tipo) VALUES
('administrador', 'puede hacer modificaciones en la página'),
('cliente', 'puede realizar compras y ver productos'),
('moderador', 'gestiona comentarios y productos'),
('vendedor', 'puede agregar y modificar sus productos'),
('superadministrador', 'control total del sistema');

-- Inserts para usuario
INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, email, password, telefono, pais, municipio, direccion, estado, rfc, tipo_de_usuario_id_tipo_de_usuario) VALUES
('Jose Luis', 'Garduño', 'Arrieta', 'gardunoarrietaj@gmail.com', '123123xDxD', '7771101383', 'Mexico', 'Xochitepec', 'Truenos #53', 'Morelos', 'GAAL9512044L0', 1),
('Ana', 'Perez', 'Lopez', 'ana.perez@gmail.com', 'ana123', '5551234567', 'Mexico', 'Cuernavaca', 'Calle Sol #123', 'Morelos', 'APL990101AB1', 2),
('Carlos', 'Martinez', 'Diaz', 'carlos.martinez@gmail.com', 'carlos456', '5549876543', 'Mexico', 'Toluca', 'Calle Luna #456', 'Estado de México', 'CMD880202CD2', 3),
('Luisa', 'Hernandez', 'Vega', 'luisa.hernandez@gmail.com', 'luisa789', '5587654321', 'Mexico', 'Puebla', 'Calle Estrella #789', 'Puebla', 'LHV770303EF3', 4),
('Pedro', 'Ramirez', 'Sanchez', 'pedro.ramirez@gmail.com', 'pedro000', '5598765432', 'Mexico', 'Guadalajara', 'Calle Cometa #321', 'Jalisco', 'PRS660404GH4', 5);

-- Inserts para categoria
INSERT INTO categoria (nombre, descripcion) VALUES
('Computadoras', 'Equipos de cómputo personales y de oficina'),
('Celulares', 'Teléfonos inteligentes y accesorios'),
('Electrodomésticos', 'Aparatos para el hogar'),
('Ropa', 'Vestimenta de diversas marcas'),
('Juguetes', 'Juguetes para todas las edades');

-- Inserts para producto
INSERT INTO producto (sku, descripcion, precio, url, stock, color, marca, nombre_producto, categoria_id_categoria, usuario_id_usuario, usuario_tipo_de_usuario_id_tipo_de_usuario) VALUES
('37592', 'Laptop Acer Aspire 3', 8700, 'ibl.com/aspire3', 500, 'gris', 'ACER', 'Aspire 3', 1, 1, 1),
('12345', 'iPhone 14', 25000, 'ibl.com/iphone14', 300, 'negro', 'Apple', 'iPhone 14', 2, 2, 2),
('67890', 'Refrigerador Samsung', 15000, 'ibl.com/fridge', 100, 'blanco', 'Samsung', 'Refrigerador', 3, 3, 3),
('54321', 'Playera Nike', 500, 'ibl.com/nike', 200, 'rojo', 'Nike', 'Playera', 4, 4, 4),
('98765', 'Lego Star Wars', 1200, 'ibl.com/lego', 50, 'multicolor', 'Lego', 'Set Star Wars', 5, 5, 5);

-- Inserts para pedido
INSERT INTO pedido (fecha, estado, total, usuario_id_usuario, usuario_tipo_de_usuario_id_tipo_de_usuario) VALUES
('2024-11-19', 'pagado', 8700.00, 1, 1),
('2024-11-20', 'pendiente', 25000.00, 2, 2),
('2024-11-21', 'cancelado', 15000.00, 3, 3),
('2024-11-22', 'pagado', 500.00, 4, 4),
('2024-11-23', 'en proceso', 1200.00, 5, 5);

-- Inserts para pago
INSERT INTO pago (fecha, descuento, metodo, iva, folio_factura, pedido_id_pedido) VALUES
('2024-11-19', '20', 'transferencia', '16', '2315', 1),
('2024-11-20', '10', 'tarjeta', '16', '2316', 2),
('2024-11-21', '0', 'efectivo', '16', '2317', 3),
('2024-11-22', '5', 'transferencia', '16', '2318', 4),
('2024-11-23', '15', 'paypal', '16', '2319', 5);




