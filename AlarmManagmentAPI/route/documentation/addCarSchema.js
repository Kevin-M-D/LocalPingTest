Create and import the routes
{
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: documentation.addCarSchema
  }
