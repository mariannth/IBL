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
 INSERT INTO tipo_de_usuario(nombre_del_tipo, descripcion_tipo)
 VALUES('administrador', 'puede hacer modificaciones en la página');
 INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, email, password, telefono, pais, municipio, direccion, estado, rfc, tipo_de_usuario_id_tipo_de_usuario) 
 values ('Jose Luis', 'Garduño', 'Arrieta', 'gardunoarrietaj@gmail.com', '123123xDxD', '7771101383', 'Mexico', 'Xochitepec', 'Truenos #53', 'Morelos', 'GAAL9512044L0', 1);

INSERT INTO categoria (nombre, descripcion)
VALUES ('computadoras','computadoras bonitas para trabajar');

 INSERT INTO producto (sku, descripcion, precio, url, stock, marca, color, nombre_producto, categoria_id_categoria, usuario_id_usuario,usuario_tipo_de_usuario_id_tipo_de_usuario) 
 values('37592', 'Laptop Acer Aspire 3', '8700','ibl.com','500','ACER', 'gris0' , 'Aspire 3', 1,1,1);




INSERT INTO pedido (fecha, estado, total, usuario_id_usuario, usuario_tipo_de_usuario_id_tipo_de_usuario) VALUES
('2024-11-19','pagado', '8700.00', 1, 1);


-- SELECT * FROM pedido WHERE id_pedido = 1;
INSERT INTO pago (fecha, descuento, metodo, iva, folio_factura, pedido_id_pedido) 
VALUES ('2024-11-19','20','transferencia', '16','2315',1);



