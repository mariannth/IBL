<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contáctanos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
</head>
<body>
    <div class="container bg-gradient-primary position-relative z-2 py-3 py-md-5">
        <div class="row">
            <div class="col-md-5">
                <h2 class="text-uppercase">¡Contáctanos, somos tu mejor opción!</h2>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-md-8 col-xl-5">
                <ul class="list-unstyled">
                    <li class="border-start border-green border-5 ps-4 d-flex align-items-center text-green text-uppercase mb-3 fs-30 fw-light">Déjanos tus datos, nosotros te contactaremos</li>
                </ul>
            <div class="col-md-20" id="contact_form">
                    <div class="row">
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="fullname" class="form-label">Nombre</label>
                            <input type="text" class="form-control" name="fullname" id="fullname" placeholder="ej: Arezbi Zuñiga" value="">
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="enterprise" class="form-label">Empresa</label>
                            <input type="text" class="form-control" name="enterprise" id="enterprise" placeholder="ej: Empresa X" value="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="position" class="form-label">Cargo</label>
                            <input type="text" class="form-control" name="position" id="position" placeholder="ej: Gerente" value="">
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="country" class="form-label">País</label>
                            <input type="text" class="form-control" name="country" id="country" placeholder="ej: México" value="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="phone" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="*********" value="">
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="ej: Arez8@gmail.com" value="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 mb-3">
                            <label for="service" class="form-label">¿En qué servicio estás interesado?</label>
                            <select class="form-select" id="service" name="service"><option value="Desarrollo de página web">Desarrollo de página web</option><option value="Consultoria de mi página web">Consultoría de mi página web</option><option value="Asesoria por hora">Asesoria por hora</option><option value="Contratar un paquete">Contratar un paquete</option>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="message" class="form-label">Mensaje</label>
                            <textarea class="form-control" name="message" id="message" rows="3" placeholder="Tu mensaje"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3 form-check">
                            <input type="checkbox" class="form-check-input" name="terms" id="terms">
                            <label class="form-check-label" for="terms">Al marcar esta casilla, acepta nuestros <a>términos de privacidad</a></label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <button type="click" class="btn btn-primary p-3 w-100 fw-bold fs-6">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</body>
</html>

