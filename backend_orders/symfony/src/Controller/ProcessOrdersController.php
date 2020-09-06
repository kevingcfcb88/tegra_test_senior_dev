<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class ProcessOrdersController
{

  public function ProcessingOrder()
  {
    return new Response('Hola');
  }
}
